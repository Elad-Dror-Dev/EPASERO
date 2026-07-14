'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Swiper from 'swiper'

interface CarouselControlsProps {
  swiper: Swiper | null
}

export default function CarouselControls({ swiper }: CarouselControlsProps) {
  const [canGoPrevious, setCanGoPrevious] = useState(false)
  const [canGoNext, setCanGoNext] = useState(true)

  useEffect(() => {
    if (swiper) {
      const updateButtons = () => {
        setCanGoPrevious(!swiper.isBeginning)
        setCanGoNext(!swiper.isEnd)
      }

      swiper.on('slideChange', updateButtons)
      swiper.on('reachBeginning', () => {
        setCanGoPrevious(false)
      })
      swiper.on('reachEnd', () => {
        setCanGoNext(false)
      })

      updateButtons()

      return () => {
        swiper.off('slideChange', updateButtons)
      }
    }
  }, [swiper])

  const onPrevious = () => {
    swiper?.slidePrev()
  }

  const onNext = () => {
    swiper?.slideNext()
  }

  return (
    <div className="flex items-center gap-4">
      <motion.button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        whileHover={canGoPrevious ? { scale: 1.05 } : {}}
        whileTap={canGoPrevious ? { scale: 0.95 } : {}}
        className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-[10px] border border-[#7c6858] transition-opacity ${
          canGoPrevious ? 'opacity-100' : 'cursor-not-allowed opacity-50'
        }`}
        aria-label="Previous projects"
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 7L2 4L5 1"
            stroke="#7c6858"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      <motion.button
        onClick={onNext}
        disabled={!canGoNext}
        whileHover={canGoNext ? { scale: 1.05 } : {}}
        whileTap={canGoNext ? { scale: 0.95 } : {}}
        className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-[10px] border border-[#7c6858] transition-opacity ${
          canGoNext ? 'opacity-100' : 'cursor-not-allowed opacity-50'
        }`}
        aria-label="Next projects"
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 1L6 4L3 7"
            stroke="#7c6858"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  )
}
