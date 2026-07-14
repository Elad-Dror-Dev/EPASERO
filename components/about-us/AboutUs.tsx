'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import Container from '@/components/container/Container'
import SectionHeading from '@/components/ui/SectionHeading'

/** Spec §4.3 — this copy is verbatim from the brief and must not be reworded. */
const PARAGRAPHS = [
  'Founded in Dubai in 2022, Epasero was born from the recognition that the existing standard was no longer enough. Conventional renovation and fit-out approaches failed to meet the expectations of modern clients, those who seek spaces with deeper character, elevated quality, and a distinctly contemporary perspective.',
  'Where design meets custom-made functionality, Epasero was created to unite two essential worlds into one seamless vision: crafting exceptional luxury environments without ever compromising on comfort, practicality, or tailored living. We bring a profound understanding of how people truly live, translating these insights into refined forms and effortless functionality. Moving beyond repetitive solutions, we create spaces that feel timeless, designed to outlast trends rather than follow them.',
  'Designing spaces where even the most ordinary routines feel exceptional, because In Epasero we understand that true luxury is felt in the small, everyday moments, not only in grand statements.',
  'Today, we deliver bespoke interiors, renovation, fit-out, and landscaping projects across Dubai, from private villas and apartments to refined commercial spaces. Every project is crafted to feel impeccable, enduring, and distinctly personal.',
  'What truly defines Epasero is its people. Our team is composed of seasoned professionals who share an uncompromising commitment to precision, craftsmanship, and excellence. When clients choose Epasero, they partner with a team dedicated to bringing their vision to life, at the highest possible standards.',
]

const PRINCIPLES = ['Always Bespoke', 'Uncompromising Craft', 'Total Transparency']

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const AboutUs = () => (
  <section id="about" className="bg-brand-white py-section md:py-section-lg scroll-mt-24">
    <Container className="flex flex-col gap-16">
      <SectionHeading label="About Us" heading="Curating" accent="Elevated Living" />

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.08 }}
          className="flex flex-col gap-5"
        >
          {PARAGRAPHS.map((text, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-brand-muted text-[15px] leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-brand-lg relative min-h-[420px] overflow-hidden md:min-h-full"
        >
          <Image
            src="/about-us-team_up2.webp"
            alt="The Epasero team at work in Dubai"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Principles — spec §4.3 */}
      <div className="flex flex-col gap-8">
        <h3 className="text-brand-black text-xl font-semibold md:text-2xl">
          The Principles Behind Every Project
        </h3>

        <div className="grid gap-4 sm:grid-cols-3">
          {PRINCIPLES.map(principle => (
            <motion.div
              key={principle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="group rounded-brand border-brand-line hover:border-brand-brown hover:bg-brand-brown border px-6 py-8 text-center transition-colors duration-300"
            >
              <span className="h1-label text-brand-brown group-hover:text-brand-white transition-colors duration-300">
                {principle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trusted By — developer logos */}
      <div className="flex flex-col gap-8">
        <h3 className="text-brand-black text-xl font-semibold md:text-2xl">Trusted By</h3>
        <Marquee autoFill speed={30} gradient gradientColor="white" className="flex items-center">
          {Array.from({ length: 8 }, (_, i) => (
            <Image
              key={i}
              src={`/brand-logos/${i + 1}.webp`}
              alt=""
              width={118}
              height={30}
              className="mx-6 h-[30px] w-[90px] object-contain opacity-60 md:mx-10 md:w-[118px]"
            />
          ))}
        </Marquee>
      </div>
    </Container>
  </section>
)

export default AboutUs
