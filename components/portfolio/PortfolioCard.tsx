'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { PortfolioProject } from './types'
import PortfolioImageSlider from '../reuse/PortfolioImageSlider'
import { categoryLabels } from '@/data/data'

/**
 * The shared "box style" card. Spec §5.2 and §6.2 require the portfolio and
 * journal grids to reuse exactly this, so it stays generic.
 *
 * Radius is 8px (spec §1.3: 4–8px, no fully-rounded shapes) — the previous 32px
 * pill did not fit the brand.
 */
export default function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <Link href={`/portfolio/${project.slug}`} prefetch className="block h-full">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="group rounded-brand-lg border-brand-line bg-brand-white hover:border-brand-brown h-full overflow-hidden border transition-all duration-300 hover:shadow-lg"
      >
        <div className="relative">
          <PortfolioImageSlider project={project} />
          <div className="rounded-brand bg-brand-white/90 absolute top-4 left-4 z-10 px-3 py-1.5 backdrop-blur-sm">
            <span className="h1-label text-brand-brown !text-[11px]">
              {categoryLabels[project.category]}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 p-6">
          <h3 className="h2-display text-brand-black group-hover:text-brand-brown !text-[22px] transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-brand-muted flex items-center gap-2 text-xs tracking-[0.08em] uppercase">
            <MapPin size={14} className="text-brand-brown shrink-0" />
            {project.location}
          </p>
        </div>
      </motion.article>
    </Link>
  )
}
