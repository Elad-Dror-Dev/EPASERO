'use client'

import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { WHATSAPP_URL } from '@/lib/site'

/**
 * Spec §2: fixed bottom-right on every page, above everything else, circular,
 * scales on hover, opens in a new tab. The circular shape is a deliberate
 * exception to the "avoid fully circular" rule in §1.3 — §2 asks for it
 * explicitly.
 */
const FloatingWhatsApp = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed right-6 bottom-6 z-[9999] flex items-center gap-3">
      {/* Tooltip — desktop only, so it can never crowd a small viewport. */}
      <span
        className={`rounded-brand bg-brand-black text-brand-white pointer-events-none hidden px-3 py-2 text-xs font-medium whitespace-nowrap transition-opacity duration-300 md:block ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Chat with us on WhatsApp
      </span>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="bg-brand-brown text-brand-white hover:bg-brand-brown-dark flex h-14 w-14 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  )
}

export default FloatingWhatsApp
