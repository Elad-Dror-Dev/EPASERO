'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Container from '@/components/container/Container'
import { motion, useInView } from 'framer-motion'

/**
 * Blur-and-fade reveal. Renders a plain div so callers choose their own heading
 * tag — it used to hardcode <h2>, which left the homepage with no <h1> at all.
 */
export const BlurIn = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Spec §4.2 — headline is exactly "We Create the Feeling of Living", keeping the
 * existing typeface and staggered placement.
 *
 * The spec asks to try brand black or brown for the headline. Both are illegible
 * against the current dark photograph, so this stays white until the supplied
 * "Hero Image" arrives — at which point it is a one-line change.
 */
const Hero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Wait out the intro animation on a first visit; reveal immediately on
    // subsequent ones. Always going through a timer (rather than setting state
    // synchronously here) avoids a cascading re-render.
    const delay = sessionStorage.getItem('loaderShown') ? 0 : 3500
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen max-h-[871px] w-full overflow-hidden md:max-h-[900px]">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/hero-bg.webp"
          alt="A contemporary Epasero interior in Dubai"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-left md:object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#796853] opacity-50 mix-blend-multiply" />

      {/* The headline stays mounted rather than being gated behind `visible`.
          Gating it meant the server-rendered homepage contained no <h1> at all,
          so crawlers saw a page with no headline. It is revealed by animating
          opacity once the intro loader has finished. */}
      <Container className="relative flex h-full flex-col justify-between pt-[130px] pb-[100px] md:pt-[157px]">
        <motion.h1
          initial={{ filter: 'blur(20px)', opacity: 0 }}
          animate={visible ? { filter: 'blur(0px)', opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-brand-white text-[48px] leading-[64px] font-bold tracking-[-1.92px] uppercase max-md:max-w-[550px] md:text-[60px] lg:text-[100px] lg:leading-[100px]"
        >
          <span className="block md:mb-[11px]">We Create</span>
          <span className="block text-center md:mb-[11px] md:ml-[103px] md:text-left">
            the Feeling
          </span>
          <span className="ml-[117px] block max-md:text-right md:ml-[415px]">of Living</span>
        </motion.h1>

        <motion.p
          initial={{ filter: 'blur(20px)', opacity: 0 }}
          animate={visible ? { filter: 'blur(0px)', opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-brand-white text-center text-base font-bold uppercase max-lg:hidden md:text-right"
        >
          Spaces that reflect your story, <br /> built to last.
        </motion.p>
      </Container>
    </section>
  )
}

export default Hero
