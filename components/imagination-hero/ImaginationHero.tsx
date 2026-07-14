'use client'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Container from '@/components/container/Container'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/components/header/config'

const ImaginationHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3,
      },
    },
  }

  return (
    <section id="contact" ref={ref} className="bg-white px-4 py-16 md:px-8 md:py-[120px]">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center gap-16"
        >
          <motion.div variants={titleVariants} className="w-full max-w-[830px] px-0 md:px-4">
            <h2 className="text-center text-[28px] leading-[36px] font-bold tracking-[-0.84px] text-black uppercase md:text-[40px] md:leading-[46px]">
              Where Imagination Shapes Reality
            </h2>
          </motion.div>

          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsAppClick}
            className="w-fit cursor-pointer rounded-[10px] bg-[#7c6858] px-[21px] py-[17.5px] text-[16px] leading-[16.8px] font-bold text-white transition-colors hover:bg-[#8a7562]"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </Container>
    </section>
  )
}

export default ImaginationHero
