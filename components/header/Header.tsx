'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/header-logo.svg'
import logoBlack from '@/public/logo-black.svg'
import burger from '@/public/burger-menu.svg'
import Container from '../container/Container'
import MobileMenu from './MobileMenu'
import { navLinks, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from './config'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { smoothScrollToSection } from '@/lib/smoothScroll'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const page = usePathname()
  const urlPortfolio = '/portfolio/'
  const isBlackLogo = page.includes(urlPortfolio) && page.length > urlPortfolio.length

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <header className={cn('absolute z-50 max-h-[76px] w-full', 'pt-5')}>
        <Container className="max-w-[1318px]">
          <div className={cn('mx-auto flex items-center justify-between')}>
            <Link href="/" className="cursor-pointer">
              <Image
                src={isBlackLogo ? logoBlack : logo}
                alt="Logo"
                width={102}
                height={87}
                className="w-[112px]"
              />
            </Link>

            <div className="flex items-center">
              <nav className="hidden gap-3 md:flex">
                {navLinks.map((link, index) =>
                  link.isWhatsApp ? (
                    <button
                      key={index}
                      onClick={handleWhatsAppClick}
                      className={cn(
                        'flex h-[52px] cursor-pointer items-center rounded-[10px] px-5 text-base leading-[105%] font-bold text-white transition',
                        'bg-[#7C6858] hover:bg-[#8C7868]',
                      )}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={index}
                      prefetch={link.href.length > 1}
                      href={link.href}
                      onClick={e => smoothScrollToSection(e, link.id)}
                      className={cn(
                        'flex h-[52px] items-center rounded-[10px] px-5 text-base leading-[105%] font-bold text-white transition',
                        'bg-[rgba(127,127,118,0.3)] opacity-90 hover:bg-[rgba(127,127,118,0.4)]',
                      )}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </nav>

              <div className="flex items-center gap-1.5 lg:gap-2">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(true)}
                  className="flex h-10 cursor-pointer items-center justify-center rounded-full text-base text-white transition hover:opacity-80 md:hidden"
                >
                  <Image src={burger} alt="" />
                </button>

                <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}
