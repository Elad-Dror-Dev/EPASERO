'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import Container from '@/components/container/Container'
import SectionHeading from '@/components/ui/SectionHeading'

/**
 * Spec §4.7 — live Google reviews.
 *
 * If the Places API is unconfigured, errors, or returns nothing, the section
 * removes itself entirely rather than rendering an empty shell.
 */

type Review = {
  author: string
  rating: number
  text: string
  time: string
}

const EXCERPT_LIMIT = 200

const ReviewCard = ({ review }: { review: Review }) => {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > EXCERPT_LIMIT
  const shown = expanded || !isLong ? review.text : `${review.text.slice(0, EXCERPT_LIMIT)}…`

  return (
    <li className="rounded-brand border-brand-line hover:border-brand-brown flex min-w-[300px] flex-1 flex-col gap-4 border p-6 transition-colors duration-300">
      <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < Math.round(review.rating)
                ? 'fill-brand-brown text-brand-brown'
                : 'text-brand-line'
            }
          />
        ))}
      </div>

      <p className="text-brand-muted text-[15px] leading-relaxed">
        {shown}
        {isLong ? (
          <button
            onClick={() => setExpanded(v => !v)}
            className="text-brand-brown ml-1 font-semibold hover:underline"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        ) : null}
      </p>

      <p className="h1-label text-brand-black mt-auto">{review.author}</p>
    </li>
  )
}

const ClientStories = () => {
  const [reviews, setReviews] = useState<Review[] | null>(null)

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.json())
      .then(d => setReviews(d.reviews ?? []))
      .catch(() => setReviews([]))
  }, [])

  // Loading, or nothing to show — render nothing at all.
  if (!reviews || reviews.length === 0) return null

  return (
    <section className="bg-brand-white py-section md:py-section-lg">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          label="Client Stories"
          heading="Voices of"
          accent="Experience"
          body="Reflections from clients on the process, the collaboration, and the spaces shaped through it."
        />

        <ul className="flex snap-x gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {reviews.map((review, i) => (
            <ReviewCard key={`${review.author}-${i}`} review={review} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default ClientStories
