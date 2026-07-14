'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { PortfolioProject } from '@/components/portfolio/types'
import SwiperCore from 'swiper'

import 'swiper/css'

interface CarouselProps {
  projects: PortfolioProject[]
  activeCategory: string
  setSwiper: (swiper: SwiperCore) => void
}

export default function Carousel({ projects, activeCategory, setSwiper }: CarouselProps) {
  return (
    <Swiper
      onSwiper={setSwiper}
      spaceBetween={24}
      slidesPerView={3}
      speed={600}
      className="w-full"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >
      {projects.map(project => (
        <SwiperSlide key={`${activeCategory}-${project.id}`}>
          <motion.div className="w-full shrink-0 px-4 md:px-0" layout>
            <ProjectCard project={project} />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
