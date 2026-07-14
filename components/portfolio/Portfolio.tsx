'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/container/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import PortfolioCard from './PortfolioCard'
import Pagination from './Pagination'
import { PortfolioCategory, PortfolioCategoryTab } from './types'
import { portfolioCategories, portfolioProjects } from '@/data/data'

const PROJECTS_PER_PAGE = 9

export default function Portfolio() {
  const portfolioTopRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return portfolioProjects
    }
    return portfolioProjects.filter(project => project.category === activeCategory)
  }, [activeCategory])

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const endIndex = startIndex + PROJECTS_PER_PAGE
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  const [isInitialMount, setInitialMount] = useState(true)

  useEffect(() => {
    if (isInitialMount) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInitialMount(false)
    } else {
      portfolioTopRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [currentPage])

  const handleCategoryChange = (category: PortfolioCategory) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section ref={portfolioTopRef} className="w-full bg-white py-[120px]">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-11">
          <SectionHeading
            label="Our Portfolio"
            heading="Spaces That"
            accent="Define Themselves"
            body="From private residences in Dubai's most coveted addresses to distinguished commercial environments, each project is shaped by a singular design language, and finished to a standard that speaks for itself."
            align="center"
          />

          <div className="relative w-full">
            <div className="mr-[-1rem] flex flex-col overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:mr-[0] md:w-auto md:flex-row md:items-end md:border-b md:border-[#a59e8c] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-6">
                {portfolioCategories.map((category: PortfolioCategoryTab) => {
                  const isActive = activeCategory === category.id

                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className="group relative cursor-pointer pb-4 last:pr-4 md:last:pr-0"
                    >
                      <motion.p
                        initial={false}
                        animate={{
                          color: isActive ? '#000000' : '#9c5b4b',
                          opacity: isActive ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-base leading-[13.2px] font-medium whitespace-nowrap uppercase"
                      >
                        {category.label} ({category.count})
                      </motion.p>

                      {isActive && (
                        <motion.div
                          layoutId="activePortfolioTab"
                          className="absolute right-0 bottom-0 left-0 h-px bg-[#9c5b4b]"
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}

                      {!isActive && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 bottom-0 left-0 h-px origin-left bg-[#9c5b4b] opacity-30"
                        />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[800px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <PortfolioCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </Container>
    </section>
  )
}
