'use client'

import { motion } from 'framer-motion'
import PortfolioImageSlider from '../reuse/PortfolioImageSlider'
import { categoryLabels } from '@/data/data'
import { PortfolioProject } from '../portfolio/types'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  project: PortfolioProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} prefetch className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="h-full cursor-pointer overflow-hidden rounded-[24px] bg-white md:rounded-[32px]"
      >
        <div className="relative h-[288px] overflow-hidden">
          <motion.div className="h-full w-full">
            <PortfolioImageSlider project={project} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-6 left-6 z-10 rounded-[10px] border border-[rgba(124,104,88,0.3)] bg-white px-[21px] py-1.5 backdrop-blur-[25px] md:top-6 md:left-6 md:py-2"
          >
            <p className="text-sm leading-[16.8px] font-normal text-[#7c6858] uppercase">
              {categoryLabels[project.category]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute inset-0 bg-black/20"
          />
        </div>

        <div className="flex flex-col gap-4 p-6">
          <h3 className="text-2xl leading-6 font-bold tracking-[-0.48px] text-black">
            {project.title}
          </h3>

          <div className="flex items-center gap-[6px]">
            <div className="h-4 w-4 shrink-0 md:h-5 md:w-5">
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
