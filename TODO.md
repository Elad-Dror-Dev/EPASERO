# Outstanding — blocked on assets, content, or credentials

The redesign in `Epasero Contracting Website Updates.docx` is implemented. These items
cannot be completed until the listed input is supplied.

## Missing assets

The brief names four images that were never attached. Each currently falls back to an
existing image; swapping them is a one-line `src` change in the file listed.

| Named in brief | Used by | Currently showing |
|---|---|---|
| `Hero Image` | `components/hero/Hero.tsx` | `/hero-bg.webp` |
| `Portfolio Hero Image` | `app/portfolio/page.tsx` | `/hero-portfolio-bg.webp` |
| `Contact Us Image` | `app/contact/page.tsx` | `/hero-portfolio-bg.webp` |
| `Blogs Hero Image` | — | Journal page not built (deferred) |
| "3 images from the catalogue" | `components/lead-capture/LeadCaptureModal.tsx` | one portfolio image |

## Missing content

- **`Interior Design Guide` (PDF)** — the asset the lead-capture popup gives away. The
  download is wired to `/guides/interior-design-guide-2026.pdf`; drop the file there and
  it works. **Until then the popup collects a lead and then 404s on the download.**
- **`Updated List of Projects`** — which portfolio projects to add and remove. All 32
  existing projects are still live in `data/data.ts`.
- **`Frequently Asked Questions`** — the FAQ answers. Questions are transcribed into
  `data/faqs.ts` with empty answers; the page hides unanswered questions, so `/faqs`
  currently shows a holding message. Answers must be written by Epasero — these are
  questions about renovation *pricing*, and invented figures would be a liability.
- **`Epasero_Website_Layout_Mockup.html` / `epasero-article.html`** — referenced in the
  brief as `file:///C:/Users/Lenovo/Downloads/...`, a path on someone else's Windows
  machine. Not available.

## Missing credentials

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` + `CONTACT_FROM` — **the contact form cannot send email without these.**
  Sign up at resend.com and verify `epaserocontracting.com` as a sending domain.
- `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` — for live Google reviews in Client Stories.
  The section hides itself until both are set, so nothing breaks in the meantime.

  ⚠️ The brief's "Google Place ID" section pasted the source of Google's *Place ID Finder*
  demo page instead of an actual Place ID. The key in that snippet (`AIzaSyA6my…`) is
  Google's public documentation key — it is not yours and must not be used. Get the real
  Place ID from https://developers.google.com/maps/documentation/places/web-service/place-id
  and create your own restricted key in Google Cloud.

## Deferred by decision

- **Journal / blog** (brief §4.8, §6) — skipped for now; needs a CMS with image upload.
  When it lands, add "Design & Build Journal" to `FOOTER_LINKS` in `lib/site.ts`.

## Deviations from the brief (deliberate)

- **Segoe UI is not self-hosted.** It is Windows-only and Microsoft-licensed, so it cannot
  legally be served as a webfont and does not exist on macOS/iOS/Android. The stack in
  `globals.css` leads with Segoe UI (Windows users see the intended face) and falls back to
  near-identical neutral sans-serifs elsewhere.
- **Section titles are not `<h1>` tags.** The brief's "H1 – Section Titles" describes a type
  *style*. Emitting a real `<h1>` per section would put six of them on the homepage and
  break the heading outline for search engines. Each page has exactly one `<h1>` (the hero);
  section labels use the `.h1-label` class and look identical.

## Popup safety guard

The lead-capture popup will not open unless `public/guides/interior-design-guide-2026.pdf`
actually exists (it does a HEAD request before showing). This prevents it from taking a real
prospect's name, email and phone, pushing them to HubSpot, and then handing back a 404.

Drop the guide PDF at that exact path and the popup enables itself — no code change needed.
