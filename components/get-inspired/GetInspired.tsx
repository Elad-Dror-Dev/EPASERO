'use client'

import { useState, useMemo, useEffect } from 'react'
import Container from '@/components/container/Container'
import CategoryTabs from './CategoryTabs'
import CarouselControls from './CarouselControls'
import { Category } from './types'
import { portfolioCategories, portfolioProjects } from '@/data/data'
import Carousel from './Carousel'
import Swiper from 'swiper'

export default function GetInspired() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [swiper, setSwiper] = useState<Swiper | null>(null)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return portfolioProjects
    }
    return portfolioProjects.filter(project => project.category === activeCategory)
  }, [activeCategory])

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0)
      swiper.update()
    }
  }, [filteredProjects, swiper])

  return (
    <section className="w-full bg-[#eae5e0] py-16 md:py-[120px]">
      <Container key={activeCategory} className="oveflow-x-hidden flex flex-col">
        <div className="mb-8 flex w-full flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-center md:gap-5">
          <h2 className="text-[24px] leading-[32px] font-bold tracking-[-0.84px] text-black uppercase md:text-[40px] md:leading-[46px]">
            Get Inspired
          </h2>
        </div>

        <div className="relative mb-6 md:mb-11">
          <div className="mr-[-1rem] flex flex-col items-start justify-between pb-0 md:mr-[0] md:flex-row md:items-end md:border-b md:border-[#a59e8c]">
            <div className="w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:w-auto md:pb-0 [&::-webkit-scrollbar]:hidden">
              <CategoryTabs
                categories={portfolioCategories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            <div className="hidden pb-2 md:flex">
              <CarouselControls swiper={swiper} />
            </div>
          </div>
        </div>

        <div className="relative -mx-4 overflow-hidden md:mx-0">
          <Carousel
            projects={filteredProjects}
            activeCategory={activeCategory}
            setSwiper={setSwiper}
          />
        </div>

        <div className="mt-4 flex justify-center md:hidden">
          <CarouselControls swiper={swiper} />
        </div>
      </Container>
    </section>
  )
}
