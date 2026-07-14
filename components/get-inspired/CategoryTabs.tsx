'use client'

import { motion } from 'framer-motion'
import { Category, CategoryTab } from './types'

interface CategoryTabsProps {
  categories: CategoryTab[]
  activeCategory: Category
  onCategoryChange: (category: Category) => void
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="flex min-w-max items-center gap-3 md:gap-4">
      {categories.map(category => {
        const isActive = activeCategory === category.id

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className="group relative cursor-pointer pb-4 last:pr-4 md:pb-4 md:last:pr-0"
          >
            <motion.p
              initial={false}
              animate={{
                color: isActive ? '#000000' : '#7c6858',
                opacity: isActive ? 1 : 0.5,
              }}
              transition={{ duration: 0.2 }}
              className="text-base leading-[13.2px] font-medium whitespace-nowrap uppercase"
            >
              {category.label} ({category.count})
            </motion.p>

            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute right-0 bottom-0 left-0 h-px bg-[#7c6858]"
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
                className="absolute right-0 bottom-0 left-0 h-px origin-left bg-[#7c6858] opacity-30"
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
