import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(200),
  organization: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(20).max(4000),
  locale: z.enum(["en", "fr"]).default("en"),
  website: z.string().max(200).optional().default(""),
});

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, code: "invalid" },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, code: "validation" },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { ok: false, code: "not_configured" },
      { status: 503 },
    );
  }

  const { name, email, organization, message, locale } = parsed.data;
  const safeName = name.replace(/[\r\n]+/g, " ");
  const resend = new Resend(apiKey);

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    organization ? `Organization: ${organization}` : null,
    `Locale: ${locale}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const result = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolio contact: ${safeName}`,
    text,
  });

  if (result.error) {
    return NextResponse.json(
      { ok: false, code: "send_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
