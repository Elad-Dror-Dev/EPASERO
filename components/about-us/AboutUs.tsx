'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Container from '@/components/container/Container'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: (
      <Image src="/earth.svg" alt="Earth icon" width={24} height={24} className="h-full w-full" />
    ),
    title: 'Reliable Expertise',
    description:
      'Nearly five decades of experience in architecture, interior design, and construction.',
  },
  {
    icon: (
      <Image
        src="/briliant.svg"
        alt="Brilliant icon"
        width={24}
        height={24}
        className="h-full w-full"
      />
    ),
    title: 'Tailored Approach',
    description:
      'Every project is crafted individually - no templates, just thoughtful design for real lives.',
  },
]

const AboutUs = () => {
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

  const featureVariants: Variants = {
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
    <section id="about" ref={ref} className="bg-[#292829] py-16 md:py-[120px]">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16"
        >
          <div className="flex w-full flex-col justify-between lg:min-h-[699px] lg:w-[551px]">
            <motion.div variants={itemVariants} className="mb-16 flex flex-col gap-6 md:gap-8">
              <motion.h2
                variants={itemVariants}
                className="max-w-[440px] text-2xl font-bold text-white uppercase max-lg:mx-auto max-md:text-center md:text-[40px] md:leading-[46px]"
              >
                Crafting spaces with purpose and passion{' '}
                <span className="text-white/70">since 2016</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="max-w-[551px] text-base leading-[24px] font-normal text-white/90 max-lg:mx-auto max-lg:text-center"
              >
                An architecture and interior design studio rooted in Dubai, where integrity meets
                artistry. Nearly five decades of experience guide every project we undertake. We
                believe in spaces that tell your story - thoughtfully designed, expertly built, and
                made to endure. From concept to completion, our team walks alongside you, ensuring
                excellence at every step.
              </motion.p>
            </motion.div>

            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative mb-16 h-[400px] w-full overflow-hidden rounded-[32px] bg-[#d4b8a0] md:h-[500px] lg:hidden lg:h-[699px] lg:w-[697px]"
            >
              <Image
                src="/about-us-team_up2.webp"
                alt="Team photo"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
                quality={100}
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={featureVariants}
                  custom={index}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <div className="h-6 w-6">{feature.icon}</div>

                  <h3 className="text-[24px] leading-[24px] font-normal text-white">
                    {feature.title}
                  </h3>

                  <p className="text-[16px] leading-[24px] font-normal text-white/70">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative h-[400px] w-full overflow-hidden rounded-[32px] bg-[#d4b8a0] max-lg:hidden md:h-[500px] lg:h-[699px] lg:w-[697px]"
          >
            <Image
              src="/about-us-team_up2.webp"
              alt="Team photo"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 697px"
              priority
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default AboutUs
