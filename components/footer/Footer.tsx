import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/header-logo.svg'
import { FOOTER_LINKS, FOOTER_DESCRIPTION } from '@/lib/site'
import SocialIcons from '@/components/ui/SocialIcons'

/**
 * Spec §4.10: black background, white text, three columns
 * (logo + description | Quick Links | Follow Us), auto-updating copyright year.
 */
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    // Extra bottom padding on small screens keeps the footer's links clear of the
    // fixed WhatsApp button (56px + 24px offset), which would otherwise sit on top
    // of them — spec §2 requires it not to obscure content on mobile.
    <footer className="bg-brand-black pt-section text-brand-white px-4 pb-28 md:px-10 md:pb-10">
      <div className="mx-auto max-w-[1316px]">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-16">
          {/* Logo + description */}
          <div className="flex flex-col gap-6">
            <Image src={logo} alt="Epasero Contracting" className="h-auto w-[180px]" />
            <p className="text-brand-white/70 max-w-[420px] text-sm leading-relaxed">
              {FOOTER_DESCRIPTION}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links" className="flex flex-col gap-5">
            <h2 className="h1-label text-brand-white/80">Quick Links</h2>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-brand-white/70 hover:text-brand-brown text-sm transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex flex-col gap-5">
            <h2 className="h1-label text-brand-white/80">Follow Us</h2>
            <SocialIcons invert size={18} />
          </div>
        </div>

        <div className="border-brand-white/15 mt-16 border-t pt-8">
          <p className="text-brand-white/50 text-xs">
            © {year} Epasero Contracting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
