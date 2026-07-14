'use client'
import Image from 'next/image'
import Container from '@/components/container/Container'
import { motion } from 'framer-motion'
import { BlurIn } from '../hero/Hero'

const Hero = () => {
  return (
    <section className="relative h-screen max-h-[871px] w-full overflow-hidden bg-white md:max-h-[900px]">
      <motion.div
        key={1}
        className="absolute inset-0"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/hero-portfolio-bg.webp"
          alt="Interior background"
          fill
          className="object-cover object-left md:object-center"
          priority
          quality={100}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#796853] opacity-50 mix-blend-multiply" />

      <Container className="relative flex h-full flex-col justify-between pt-[130px] pb-[100px] md:pt-[157px]">
        <BlurIn>
          <div className="text-[48px] leading-[64px] font-bold tracking-[-1.92px] text-white uppercase max-md:max-w-[550px] md:ml-[50px] md:text-[60px] lg:text-[100px] lg:leading-[100px]">
            <div className="md:mb-[11px]">We Shape</div>
            <div className="text-center md:mb-[11px] md:text-left">the Feeling</div>
            <div className="max-md:text-right">of Space</div>
          </div>
        </BlurIn>

        <BlurIn>
          <p className="text-center text-base font-bold text-white uppercase max-lg:hidden md:text-right">
            Private Residence, Palm Jumeirah <br /> — Contemporary Luxury Interior
          </p>
        </BlurIn>

        <BlurIn className="mx-auto md:hidden">
          <button className="relative z-20 mx-auto h-[52px] max-w-[127px] cursor-pointer rounded-[10px] bg-[#7c6858] px-[21px] text-base font-bold text-white">
            Contact Us
          </button>
        </BlurIn>
      </Container>
    </section>
  )
}

export default Hero
