import type { Metadata } from 'next'
import { Phone, Mail, MapPin } from 'lucide-react'
import Container from '@/components/container/Container'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/contact/ContactForm'
import { CONTACT } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Speak with Epasero Contracting about interiors, fit-out, renovation and landscaping projects across Dubai.',
}

/**
 * The map embed needs the Google Place ID. The brief's "Google Place ID" section
 * pasted the Place ID *Finder* demo source instead of an actual ID, so the map
 * falls back to a plain address query — which works, but pins the address rather
 * than the verified business listing. Set NEXT_PUBLIC_GOOGLE_PLACE_QUERY (or
 * hardcode the Place ID here) once it is supplied.
 */
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`

export default function ContactPage() {
  return (
    <main>
      <PageHero heading="Where Breathtaking Spaces Begin" image="/hero-portfolio-bg.webp" />

      <section className="bg-brand-white py-section md:py-section-lg">
        <Container className="grid gap-16 lg:grid-cols-2">
          {/* Left: details + map */}
          <div className="flex flex-col gap-10">
            <SectionHeading label="Contact Us" heading="Contact" accent="Information" />

            <ul className="flex flex-col gap-8">
              <li className="flex gap-4">
                <Phone size={20} className="text-brand-brown mt-1 shrink-0" />
                <div>
                  <p className="h1-label text-brand-black mb-1">Call Us</p>
                  <p className="text-brand-muted text-sm">{CONTACT.phoneLandline}</p>
                  <a
                    href={CONTACT.phoneMobileHref}
                    className="text-brand-brown hover:text-brand-brown-dark text-sm transition-colors hover:underline"
                  >
                    {CONTACT.phoneMobile}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <Mail size={20} className="text-brand-brown mt-1 shrink-0" />
                <div>
                  <p className="h1-label text-brand-black mb-1">Email Us</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-brand-brown hover:text-brand-brown-dark text-sm transition-colors hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <MapPin size={20} className="text-brand-brown mt-1 shrink-0" />
                <div>
                  <p className="h1-label text-brand-black mb-1">Visit Us</p>
                  <p className="text-brand-muted text-sm">{CONTACT.address}</p>
                </div>
              </li>
            </ul>

            <iframe
              src={MAP_SRC}
              title="Epasero Contracting office location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="rounded-brand border-brand-line h-[350px] w-full border"
            />
          </div>

          {/* Right: form */}
          <ContactForm />
        </Container>
      </section>
    </main>
  )
}
