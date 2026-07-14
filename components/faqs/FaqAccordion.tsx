'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Faq } from '@/data/faqs'
import { cn } from '@/lib/utils'

/** Spec §7 — numbered rows with a brown index block and a dropdown answer. */
const FaqAccordion = ({ faqs }: { faqs: Faq[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <ul className="flex flex-col gap-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        const index = String(i + 1).padStart(2, '0')

        return (
          <li
            key={faq.question}
            className="rounded-brand border-brand-line flex overflow-hidden border"
          >
            {/* Brown index block */}
            <div className="bg-brand-brown flex w-14 shrink-0 items-center justify-center md:w-20">
              <span className="h1-label text-brand-white">{index}</span>
            </div>

            <div className="flex-1">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left md:px-8"
              >
                <span className="text-brand-black text-sm font-semibold md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    'text-brand-brown shrink-0 transition-transform duration-300',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-brand-muted px-5 pb-6 text-[15px] leading-relaxed md:px-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default FaqAccordion
