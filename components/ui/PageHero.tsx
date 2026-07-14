'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/container/Container'

/**
 * Spec §5.1, §6.1, §8.1 — the Portfolio, Journal and Contact heroes must all
 * match the homepage hero's style and placement, so they share this component.
 */
type Props = {
  /** Rendered in the homepage hero's typeface and weight. */
  heading: string
  image: string
  caption?: string
}

const PageHero = ({ heading, image, caption }: Props) => (
  <section className="relative h-[70vh] max-h-[720px] min-h-[480px] w-full overflow-hidden">
    <Image
      src={image}
      alt=""
      fill
      priority
      quality={90}
      sizes="100vw"
      className="object-cover object-center"
    />

    <div className="absolute inset-0 bg-[#796853] opacity-50 mix-blend-multiply" />

    <Container className="relative flex h-full flex-col justify-end pt-24 pb-16">
      <motion.h1
        initial={{ filter: 'blur(20px)', opacity: 0 }}
        animate={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-brand-white max-w-[900px] text-[40px] leading-[1.05] font-bold tracking-[-1.92px] uppercase md:text-[64px] lg:text-[80px]"
      >
        {heading}
      </motion.h1>

      {caption ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-brand-white mt-6 text-right text-base font-bold uppercase max-lg:hidden"
        >
          {caption}
        </motion.p>
      ) : null}
    </Container>
  </section>
)

export default PageHero
