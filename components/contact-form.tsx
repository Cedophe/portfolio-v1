"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check } from "./icons";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; code?: string };

export function ContactForm() {
  const t = useTranslations("Contact");
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          organization: data.get("organization"),
          message: data.get("message"),
          locale: document.documentElement.lang,
          website: data.get("website"),
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        code?: string;
      };

      if (!response.ok) {
        setState({ status: "error", code: payload.code });
        return;
      }

      form.reset();
      setState({ status: "success" });
    } catch {
      setState({ status: "error" });
    }
  }

  if (state.status === "success") {
    return (
      <div className="form-success" role="status">
        <Check className="form-success__icon" />
        <h2>{t("successTitle")}</h2>
        <p>{t("successBody")}</p>
        <button
          type="button"
          className="button button--ghost"
          onClick={() => setState({ status: "idle" })}
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  const errorMessage =
    state.status === "error"
      ? state.code === "not_configured"
        ? t("notConfigured")
        : state.code === "validation"
          ? t("validationBody")
          : t("errorBody")
      : null;

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      aria-busy={state.status === "submitting"}
    >
      <div className="field">
        <label htmlFor="name">{t("name")}</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={80}
          placeholder={t("namePlaceholder")}
        />
      </div>
      <div className="field">
        <label htmlFor="email">{t("email")}</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          placeholder={t("emailPlaceholder")}
        />
      </div>
      <div className="field">
        <label htmlFor="organization">{t("organization")}</label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          maxLength={120}
          placeholder={t("organizationPlaceholder")}
        />
      </div>
      <div className="field">
        <label htmlFor="message">{t("message")}</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={4000}
          rows={8}
          placeholder={t("messagePlaceholder")}
        />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div>
        {errorMessage ? (
          <div className="form-error" role="alert">
            <strong>{t("errorTitle")}</strong>
            <p>{errorMessage}</p>
          </div>
        ) : null}
      </div>
      <div className="form-actions">
        <button
          type="submit"
          className="button"
          disabled={state.status === "submitting"}
        >
          {state.status === "submitting" ? t("submitting") : t("submit")}
        </button>
        <p className="field__hint">{t("privacy")}</p>
      </div>
    </form>
  );
}
