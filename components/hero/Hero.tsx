'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Container from '@/components/container/Container'
import { motion, useInView } from 'framer-motion'

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
    <motion.h2
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className={className}
    >
      {children}
    </motion.h2>
  )
}

const Hero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const loaderShown = sessionStorage.getItem('loaderShown')
    if (loaderShown) {
      setVisible(true)
      return
    }

    const timer = setTimeout(() => {
      setVisible(true)
    }, 3500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="relative h-screen max-h-[871px] w-full overflow-hidden md:max-h-[900px]">
      <motion.div
        key={1}
        className="absolute inset-0"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/hero-bg.webp"
          alt="Interior background"
          fill
          className="object-cover object-left md:object-center"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#796853] opacity-50 mix-blend-multiply" />

      {visible && (
        <Container className="mb:pb-16 relative flex h-full flex-col justify-between pt-[130px] pb-[100px] md:pt-[157px]">
          <BlurIn>
            <div className="text-[48px] leading-[64px] font-bold tracking-[-1.92px] text-white uppercase max-md:max-w-[550px] md:text-[60px] lg:text-[100px] lg:leading-[100px]">
              <div className="md:mb-[11px]">We Design</div>
              <div className="text-center md:mb-[11px] md:ml-[103px] md:text-left">the Feeling</div>
              <div className="ml-[117px] max-md:text-right md:ml-[415px]">of Living</div>
            </div>
          </BlurIn>

          <BlurIn>
            <p className="text-center text-base font-bold text-white uppercase max-lg:hidden md:text-right">
              Spaces that reflect your story, <br /> built to last.
            </p>
          </BlurIn>

          <BlurIn className="mx-auto md:hidden">
            <button className="relative z-20 mx-auto h-[52px] max-w-[127px] cursor-pointer rounded-[10px] bg-[#7c6858] px-[21px] text-base font-bold text-white md:hidden">
              Contact Us
            </button>
          </BlurIn>
        </Container>
      )}
    </section>
  )
}

export default Hero
