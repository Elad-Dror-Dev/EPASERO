'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { PortfolioProject } from './types'
import PortfolioImageSlider from '../reuse/PortfolioImageSlider'
import { categoryLabels } from '@/data/data'

interface PortfolioCardProps {
  project: PortfolioProject
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} prefetch className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="group/main h-full cursor-pointer overflow-hidden rounded-[32px] border border-[#eae5e0] bg-white transition-shadow duration-300 hover:shadow-xl"
      >
        <div className="relative">
          <PortfolioImageSlider project={project} />
          <motion.div
            initial={{ opacity: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 left-4 z-10 rounded-[10px] border border-[rgba(124,104,88,0.3)] bg-white/90 px-4 py-1.5 backdrop-blur-[25px] md:top-6 md:left-6 md:px-[21px] md:py-2"
          >
            <p className="text-xs leading-[16.8px] font-normal text-[#7c6858] uppercase md:text-sm">
              {categoryLabels[project.category]}
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <h3 className="text-2xl leading-6 font-bold tracking-[-0.48px] text-black transition-colors duration-300 group-hover/main:text-[#7c6858]">
            {project.title}
          </h3>

          <div className="flex items-center gap-[6px]">
            <div className="h-5 w-5 shrink-0">
              <Image
                src="/pin.svg"
                alt="Location pin"
                width={20}
                height={20}
                className="h-full w-full"
              />
            </div>

            <p className="flex-1 text-sm leading-[16.8px] text-[#7c6858] uppercase">
              {project.location}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
