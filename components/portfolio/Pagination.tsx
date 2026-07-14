'use client'

import { motion } from 'framer-motion'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const getPageNumbers = () => {
    const pages: number[] = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)

      if (currentPage > 3) {
        pages.push(-1)
      }

      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i)
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push(-2)
      }

      if (!pages.includes(totalPages)) {
        pages.push(totalPages)
      }
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex items-center justify-center gap-[6px]">
      <motion.button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-[10px] border border-[#7c6858] transition-opacity ${
          currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'opacity-100'
        }`}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-0"
        >
          <path
            d="M7.5 4L0.5 4M0.5 4L4 7.5M0.5 4L4 0.5"
            stroke="#7c6858"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {pageNumbers.map((page, index) => {
        if (page === -1 || page === -2) {
          return (
            <div key={`ellipsis-${index}`} className="px-3 py-2 text-sm text-[#313131]">
              ...
            </div>
          )
        }

        const isActive = currentPage === page

        return (
          <motion.button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-8 cursor-pointer rounded-[4px] px-3 py-2 text-sm transition-all ${
              isActive
                ? 'cursor-default font-medium text-black'
                : 'cursor-pointer text-[#313131] opacity-50 hover:opacity-100'
            }`}
          >
            {page}
          </motion.button>
        )
      })}

      <motion.button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-[10px] border border-[#7c6858] transition-opacity ${
          currentPage === totalPages
            ? 'cursor-not-allowed opacity-50'
            : 'cursor-pointer opacity-100 hover:opacity-70'
        }`}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path
            d="M7.5 4L0.5 4M0.5 4L4 7.5M0.5 4L4 0.5"
            stroke="#7c6858"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  )
}
