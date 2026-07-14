'use client'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import Image, { type ImageProps } from 'next/image'

function TikTok({
  size = 16,
  ...props
}: Omit<ImageProps, 'src' | 'width' | 'height'> & { size?: number }) {
  return (
    <img
      className="invert transition duration-200 group-hover:invert-0"
      src="/tik-tok.webp"
      width={size}
      height={size}
      {...props}
    />
  )
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/epaserocontracting/',
    icon: <Instagram size={18} />,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@epaserocontracting',
    icon: <TikTok size={18} alt={''} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/epaserocontracting/',
    icon: <Linkedin size={18} />,
  },
]

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const dateYearNow = new Date().getFullYear()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
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
    <footer ref={ref} className="bg-[#292829] px-4 py-16 md:px-16 md:pb-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="mx-auto flex max-w-[1440px] flex-col gap-[60px] md:gap-18"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between md:gap-[50px]"
        >
          <div className="relative h-auto w-[112px]">
            <Link href="/">
              <Image
                src={'/header-logo.svg'}
                alt="Logo"
                width={102}
                height={87}
                className="w-[112px]"
              />
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-[18.8px] md:flex-row md:gap-10">
            <div className="flex h-[37px] justify-end gap-2">
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group h-[36px] w-[36px] rounded border border-white p-2 text-white transition hover:bg-white md:hover:text-[#040d26]"
                  target="_blank"
                >
                  {icon}
                </Link>
              ))}
            </div>
            <div className="">
              <p className="text-xs leading-[15.6px] text-[#7e7e7e] md:text-base md:leading-[18.2px]">
                Cover Technologies Inc.
              </p>
              <p className="text-xs leading-[15.6px] text-white md:text-base md:leading-[18.2px]">
                © {dateYearNow} All rights reserved.
              </p>
            </div>

            <div className="">
              <p className="text-xs leading-[15.6px] text-[#7e7e7e] md:text-base md:leading-[18.2px]">
                Designed and manufactured in
              </p>
              <p className="text-xs leading-[15.6px] text-white md:text-base md:leading-[18.2px]">
                Dubai.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
