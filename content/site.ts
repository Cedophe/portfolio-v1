export const site = {
  name: "Cedophe ZOHOUN",
  employer: "IMPROTECH",
  location: "Accra, Ghana",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cedophe.example",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || null,
  cv: {
    en: "/cv/cedophe-zohoun-cv-en.pdf",
    fr: "/cv/cedophe-zohoun-cv-fr.pdf",
  },
};
