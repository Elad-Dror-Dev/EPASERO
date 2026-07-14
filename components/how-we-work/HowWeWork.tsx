'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Container from '@/components/container/Container'

interface WorkItem {
  number: string
  title: string
  description: string
}

const workItems: WorkItem[] = [
  {
    number: '01',
    title: 'Tailored Layouts',
    description: 'Designed around your lifestyle',
  },
  {
    number: '02',
    title: 'Efficiently Built',
    description: 'Optimized process and materials',
  },
  {
    number: '03',
    title: 'Transparent Pricing',
    description: 'Clear costs from day one',
  },
]

const HowWeWork = () => {
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

  const workItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const decorativeImageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 1,
      },
    },
  }

  return (
    <section id="services" ref={ref} className="bg-white py-16 md:py-[120px]">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center gap-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex max-w-[830px] flex-col items-center gap-4 md:gap-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-[16px] leading-[20px] font-bold tracking-[-0.32px] text-[rgba(124,104,88,0.7)] uppercase"
            >
              How We Work
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-center text-[24px] leading-[32px] font-bold tracking-[-0.84px] text-black uppercase md:text-[40px] md:leading-[46px]"
            >
              From Vision to Structure
            </motion.h2>
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative h-[418px] w-full overflow-hidden rounded-[32px] bg-[#eae5e0] md:h-[600px]"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={isInView ? { y: 0 } : { y: 20 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative h-full w-full"
            >
              <Image
                src="/how-we-work-3d.webp"
                alt="3D architectural visualization"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-[#eae5e0] mix-blend-soft-light" />
            </motion.div>
          </motion.div>

          <div className="relative w-full">
            {workItems.map((item, index) => (
              <motion.div
                key={item.number}
                variants={workItemVariants}
                custom={index}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: 0.6 + index * 0.15 }}
                whileHover={{
                  x: 4,
                  transition: { duration: 0.2 },
                }}
                className="relative flex cursor-pointer gap-5 border-t border-[rgba(124,104,88,0.5)] pt-6 pb-16 md:gap-5 md:pb-[92px]"
              >
                <motion.div
                  className="min-w-[24px] text-[16px] leading-[20px] font-medium text-[#7c6858] md:flex-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.number}
                </motion.div>

                <div className="flex w-[234px] flex-col gap-2.5 md:w-auto md:flex-1">
                  <motion.h3
                    className="text-[20px] leading-[25px] tracking-[-0.5px] text-black md:text-[24px]"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-[16px] leading-[20px] text-black md:hidden">
                    {item.description}
                  </p>
                </div>

                <div className="hidden md:block md:max-w-[370px] md:flex-1">
                  <p className="text-[16px] leading-[20px] text-black">{item.description}</p>
                </div>

                {item.number === '02' && (
                  <>
                    <motion.div
                      variants={decorativeImageVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      className="absolute -top-5 left-16 z-50 hidden h-[144px] w-[224px] overflow-hidden rounded-[23px] shadow-lg md:block"
                    >
                      <Image
                        src="/how-we-work-wood.webp"
                        alt="Wood texture"
                        fill
                        className="object-cover"
                        sizes="224px"
                      />
                    </motion.div>

                    <motion.div
                      variants={decorativeImageVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      transition={{ delay: 1.1 }}
                      className="absolute top-5 left-[116px] z-50 hidden h-[144px] w-[224px] overflow-hidden rounded-[23px] shadow-lg md:block"
                    >
                      <Image
                        src="/how-we-work-marble.webp"
                        alt="Marble texture"
                        fill
                        className="object-cover"
                        sizes="224px"
                      />
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default HowWeWork
