'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import logoBlack from '@/public/logo-black.svg'
import { NAV_LINKS } from '@/lib/site'
import SocialIcons from '@/components/ui/SocialIcons'
import { cn } from '@/lib/utils'

/**
 * Spec §4.1: fixed to the top at all times and never hides. On scroll it
 * compresses (80px → 56px) rather than disappearing.
 */
const Header = () => {
  const [compressed, setCompressed] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setCompressed(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Stop the page scrolling underneath an open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    // Spec §4.1 gives the nav heights as an example ("e.g. 80px → 56px") but the
    // logo sizes as hard values (80px at rest, 60px compressed). Those cannot
    // both hold: a 60px logo does not fit inside a 56px bar. The logo is the
    // point of that requirement ("increase the logo size"), so the bar grows to
    // accommodate it and still visibly compresses on scroll.
    <header
      className={cn(
        'border-brand-line bg-brand-white fixed top-0 left-0 z-[1000] w-full border-b transition-all duration-300',
        compressed ? 'h-[72px]' : 'h-24',
      )}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-6 px-4 md:px-10">
        {/* Logo — links home; on the homepage this returns the user to the top. */}
        <Link href="/" aria-label="Epasero Contracting — home" className="flex items-center">
          <Image
            src={logoBlack}
            alt="Epasero Contracting"
            priority
            className={cn(
              'w-auto transition-all duration-300',
              // Spec §4.1: 60px compressed, 80px at rest.
              compressed ? 'max-h-[60px]' : 'max-h-[80px]',
            )}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-brand-black hover:text-brand-brown text-sm font-medium transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <SocialIcons />

          <Link
            href="/contact"
            className="rounded-brand bg-brand-brown text-brand-white hover:bg-brand-brown-dark px-5 py-2.5 text-sm font-semibold transition-colors duration-300"
          >
            Let&apos;s Connect
          </Link>
        </nav>

        {/* Mobile: keep the Let's Connect CTA outside the hamburger. */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/contact"
            className="rounded-brand bg-brand-brown text-brand-white px-4 py-2 text-xs font-semibold"
          >
            Let&apos;s Connect
          </Link>
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="text-brand-black"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen ? (
        <div
          className={cn(
            'bg-brand-white fixed inset-x-0 bottom-0 z-[999] flex flex-col gap-8 px-6 py-10 transition-all duration-300 lg:hidden',
            // Sit directly beneath the bar, whichever height it currently is.
            compressed ? 'top-[72px]' : 'top-24',
          )}
        >
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="h2-display text-brand-black"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <SocialIcons size={20} />
        </div>
      ) : null}
    </header>
  )
}

export default Header
