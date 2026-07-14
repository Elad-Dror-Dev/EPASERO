'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import logo from '@/public/header-logo.svg'
import { navLinks, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from './config'
import { smoothScrollToSection } from '@/lib/smoothScroll'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuVariants: Variants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { x: '100%', transition: { duration: 0.3, ease: 'easeIn' } },
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.8, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 z-50 h-full w-full bg-[#7C6858] shadow-lg sm:max-w-sm"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-between p-4">
              <Link href="/">
                <Image src={logo} alt="Logo" width={102} height={87} className="w-[112px]" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer text-2xl text-black"
              >
                <X color="#fff" size={30} />
              </button>
            </div>
            <nav className="mt-[90px] flex flex-col px-4">
              {navLinks.map((link, index) =>
                link.isWhatsApp ? (
                  <button
                    key={index}
                    onClick={handleWhatsAppClick}
                    className="cursor-pointer border-b border-white/30 py-[30px] text-left text-2xl font-normal tracking-wide text-white uppercase transition last:border-b-0 hover:opacity-80"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={e => {
                      smoothScrollToSection(e, link.id)
                      onClose()
                    }}
                    className="border-b border-white/30 py-[30px] text-2xl font-normal tracking-wide text-white uppercase transition last:border-b-0 hover:opacity-80"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
