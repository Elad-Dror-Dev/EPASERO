/**
 * Site-wide constants. Single source of truth for anything that appears in more
 * than one place (nav, footer, contact page, CTAs).
 */

export const CONTACT = {
  /** Landline — display only, per spec §8.2 only the mobile is click-to-call. */
  phoneLandline: '04 370 2044',
  phoneMobile: '056 549 9787',
  phoneMobileHref: 'tel:+971565499787',
  email: 'contact@epaserocontracting.com',
  address: '2601 - U-Bora Tower - Marasi Dr - Business Bay - Dubai',
} as const

export const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=971565499787&text=Hello%21+I+would+like+to+discuss+a+design+project+for+my+space.&type=phone_number&app_absent=0'

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/epaserocontracting/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@epaserocontracting' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61570876192778' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/106127331/' },
] as const

/** Nav order is fixed by spec §4.1 and must not be reordered. */
export const NAV_LINKS = [
  { label: 'About Us', href: '/#about' },
  { label: 'Our Services', href: '/#services' },
  { label: 'Our Portfolio', href: '/portfolio' },
] as const

/**
 * Footer quick links. Journal and FAQs are deliberately absent from NAV_LINKS —
 * spec §4.8 and §7 want those pages reachable but not in the main navigation.
 */
export const FOOTER_LINKS = [
  { label: 'About Us', href: '/#about' },
  { label: 'Our Services', href: '/#services' },
  { label: 'Our Portfolio', href: '/portfolio' },
  { label: "Let's Connect", href: '/contact' },
  { label: 'FAQs', href: '/faqs' },
] as const

export const FOOTER_DESCRIPTION =
  'Epasero ensures that luxury is felt through the precision of daily routines and meticulous craftsmanship. Every project is executed with an uncompromising commitment to quality, delivering enduring environments that are both impeccable and distinctly contemporary.'

/** Shared across the homepage, portfolio and journal — spec §4.9, §5.3, §6.3. */
export const CTA_SECTION = {
  label: 'Begin Your Project',
  heading: 'Where Breathtaking Spaces Begin',
  body: 'From conceptual design to site completion, every phase of interiors, fit-outs, and landscaping is executed with meticulous oversight. Direct inquiries are welcome for a detailed consultation.',
  buttonLabel: "Let's Connect",
  buttonHref: '/contact',
} as const

export const HUBSPOT = {
  portalId: '148276867',
  formId: '3e0f4a39-d9b3-4110-b94c-19e689a48cbd',
  region: 'eu1',
} as const
