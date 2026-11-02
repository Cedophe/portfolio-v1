# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js App Router with TypeScript, deployed to Vercel. Greenfield project with no existing scaffold or code. Planned supporting libraries: Tailwind CSS, next-intl, Resend, Zod.

## Users

- **Primary:** hiring managers and recruiters evaluating candidates for network and security engineering roles. They scan for role fit, credibility, and concrete proof, usually under time pressure and often on mobile.
- **Secondary:** peers and community in networking, security, and cloud who explore the work in more depth.

## Product Purpose

A bilingual personal portfolio for a network and security engineer with working cloud knowledge. It exists to make the owner's professional capability legible and credible to evaluators, and to give peers a place to see how they work. Success means a qualified visitor understands the owner's profile and chooses to make contact or advance a conversation.

## Positioning

A network, security, and cloud hybrid: grounded in traditional networking and security engineering, extended into AWS and Azure. The value is bridging on-premises network and security practice with cloud environments, rather than presenting as a generic developer or a single-cloud specialist. Bilingual French/English delivery is part of the proof.

## Operating Context

- Visitors arrive from job applications, recruiter outreach, professional networks, and peer referrals.
- Evaluation happens in short screening passes and longer peer reads.
- The owner's evidence is professional history, certifications, project case studies, and certified training experience.
- The site is a personal professional surface, not a product marketing site.
- Employer is named; client organizations are anonymized for confidentiality.

## Capabilities and Constraints

- Bilingual site with `/en` and `/fr` routes, English default, language switch preserving the current route.
- Multi-page structure: home, work index, work detail, experience, about, contact.
- Seven anonymized case studies derived strictly from the owner's CV; no invented metrics, outcomes, or client names.
- Four certifications: CCNP Enterprise (ENCOR 350-401), CCNA, Fortinet NSE 3, Microsoft AZ-104.
- Contact through a Resend-backed form, public email, and LinkedIn. Phone number stays private.
- Separate French and English CV PDFs, language-matched.
- No homelab section: the owner has no homelab to present.
- No CMS, blog platform, or analytics tooling has been confirmed; treat these as undecided.
- Project diagrams and screenshots are not yet supplied; neutral schematics may be authored and labeled illustrative, otherwise omissions stay visible.

## Brand Commitments

- Public name: **Cedophe ZOHOUN**.
- Employer: **IMPROTECH**, Accra, Ghana.
- Client organizations are anonymized: a 500+ user university in Accra, a 16+ branch organization, an international school in Accra, and the employer's own managed services context.
- Do not display the phone number, home address, or other personal details.
- Voice should read as a competent, direct security/network professional, not as a software developer persona.
- Visual direction: **Quiet Systems**, an Apple-like clean editorial system with a white canvas, soft gray surfaces, system sans, one blue accent, and rounded cards. Documented in `DESIGN.md`; this file remains the source of truth for content.
- CCNP Enterprise is completed and may be displayed as such.

## Evidence on Hand

- CV/résumé covering roles, certifications, education, training, skills, and languages.
- Professional history: IMPROTECH (2023–present) and an IT support internship at Benin's Ministry of Economy and Finance (2021).
- Seven professional projects: Palto Alto NGFW rollout for a 500+ user university; multi-site FortiGate operations across 16+ branches; Palo Alto firewall administration; enterprise Ubiquiti UniFi Wi-Fi; MikroTik and dual-ISP load balancing; Python automated inventory across ~50 devices; multi-site 3CX VoIP administration.
- Certifications: CCNP Enterprise (ENCOR 350-401), CCNA, Fortinet NSE 3, Microsoft AZ-104.
- Certified Cisco and AWS trainer: CCNA, CCNP ENCOR, AWS Cloud Practitioner; 50+ learners.
- Languages: French native, English professional working proficiency (C1).
- No testimonials, press, client logos, or benchmark claims exist and must not be fabricated.

## Product Principles

1. **Proof over assertion.** Show real configurations, projects, and credentials rather than adjectives.
2. **Engineer's credibility.** Technical accuracy and specificity matter more than marketing polish.
3. **Hybrid is the story.** Network, security, and cloud should read as one coherent practice, not separate hats.
4. **Fast to evaluate.** A recruiter should grasp the profile quickly; a peer should be able to go deep.
5. **Nothing invented.** Missing facts stay visibly unstated until the owner provides them.

## Accessibility & Inclusion

WCAG 2.2 AA is the required standard. Bilingual delivery must preserve parity of content and accessible language switching.
