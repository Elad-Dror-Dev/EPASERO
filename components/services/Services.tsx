'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '@/components/container/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

/** Spec §4.4 — labels and descriptions are verbatim. */
const SERVICES = [
  {
    name: 'Interior Design',
    description:
      'Spatial compositions defined by proportion, material intelligence, and technical precision. Interiors are developed as cohesive systems, where aesthetics and functionality exist in complete alignment.',
  },
  {
    name: 'Architectural Design',
    description:
      'Architectural solutions shaped by context, purpose, and longevity. From concept through to authority submissions and detailed drawings, the focus remains on clarity of form and enduring relevance.',
  },
  {
    name: 'Fit-Out & Execution',
    description:
      'A disciplined approach to construction, where design intent is carried through with exactness. Execution is managed with rigor, ensuring continuity between concept and built outcome.',
  },
  {
    name: 'Renovation & Upgrading',
    description:
      'Existing structures are reinterpreted through a lens of refinement and clarity. Interventions are deliberate, enhancing both spatial quality and long-term value.',
  },
  {
    name: 'Landscape Design & Build',
    description:
      'External environments conceived as extensions of the architecture. Material, light, and spatial rhythm are composed to create continuity between interior and exterior.',
  },
  {
    name: 'Project Management',
    description:
      'Oversight grounded in structure and transparency. Timelines, costs, and execution are managed with precision, maintaining full alignment from inception to completion.',
  },
]

const Services = () => {
  // Only one panel open at a time — spec §4.4.
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="services" className="bg-brand-white py-section md:py-section-lg scroll-mt-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          label="Our Services"
          heading="Creators of Bespoke"
          accent="Living Spaces"
          body="A practice defined by precision, craft, and an uncompromising approach to design and execution."
        />

        <div className="flex flex-col">
          {SERVICES.map((service, i) => {
            const isOpen = openIndex === i

            return (
              <div key={service.name} className="border-brand-line border-b">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={cn(
                    'group flex w-full items-center justify-between gap-6 px-4 py-6 text-left transition-colors duration-300 md:px-6',
                    isOpen
                      ? 'bg-brand-brown text-brand-white'
                      : 'text-brand-black hover:bg-brand-brown hover:text-brand-white',
                  )}
                >
                  <span className="h2-display !text-[clamp(20px,2.4vw,30px)]">{service.name}</span>
                  <ChevronDown
                    size={22}
                    className={cn(
                      'shrink-0 transition-transform duration-300',
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
                      <p className="text-brand-muted max-w-[820px] px-4 py-6 text-[15px] leading-relaxed md:px-6">
                        {service.description}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Services
