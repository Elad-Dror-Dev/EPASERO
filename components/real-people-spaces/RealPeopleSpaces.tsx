'use client'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Container from '@/components/container/Container'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

const RealPeopleSpaces = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
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
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section ref={ref} className="bg-white py-16 md:py-[120px]">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center gap-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col gap-8 md:items-center md:justify-between md:gap-12"
          >
            <h2 className="text-center text-[24px] leading-[32px] font-bold tracking-[-0.84px] text-black uppercase md:flex-1 md:text-left md:text-[40px] md:leading-[46px]">
              Real People, Real Spaces
            </h2>

            <Link href="/portfolio">
              <motion.button
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden cursor-pointer rounded-[10px] bg-[#7c6858] px-[21px] py-[17.5px] text-[16px] leading-[16.8px] font-bold text-white md:block"
              >
                More Cases
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="relative h-[418px] w-full overflow-hidden rounded-[20px] md:h-[678px]"
          >
            <ReactCompareSlider
              itemOne={
                <div className="relative h-full w-full">
                  <ReactCompareSliderImage
                    src="/real-people-before.webp"
                    alt="Before renovation"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-6 left-6 z-10">
                    <span className="text-[15px] leading-[20.8px] font-bold tracking-[-0.32px] text-white">
                      Before
                    </span>
                  </div>
                </div>
              }
              itemTwo={
                <div className="relative h-full w-full">
                  <ReactCompareSliderImage
                    src="/real-people-after_up2.webp"
                    alt="After renovation"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute right-6 bottom-6 z-10">
                    <span className="text-[15.4px] leading-[20.8px] font-bold tracking-[-0.32px] text-white">
                      After
                    </span>
                  </div>
                </div>
              }
              style={{
                width: '100%',
                height: '100%',
              }}
              boundsPadding={0}
              position={50}
              changePositionOnHover={true}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-16"
          >
            <div className="w-full md:flex-1">
              <p className="text-center text-[20px] leading-[32px] tracking-[-0.8px] text-black md:text-left md:text-[32px] md:leading-[52px] md:tracking-[-1.04px]">
                Epasero Contracting turned our apartment into a place that finally feels like home.
                Every corner reflects how we live - elegant, warm, and personal.
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-6 md:flex-1 md:items-start md:justify-between">
              <div className="flex flex-col gap-4 text-[16px] leading-[20px] text-black opacity-70 max-md:items-center">
                <p>Project: Business Bay penthouse, Dubai</p>
                <p>Client: Sarah Johnson</p>
              </div>

              <Link
                href={'portfolio/penthouse-180-13'}
                className="cursor-pointer text-[16px] leading-[16.8px] font-bold text-[#7c6858] uppercase"
              >
                View Full Story
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default RealPeopleSpaces
