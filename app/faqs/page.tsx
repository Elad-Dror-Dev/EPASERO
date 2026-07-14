import type { Metadata } from 'next'
import Container from '@/components/container/Container'
import FaqAccordion from '@/components/faqs/FaqAccordion'
import { publishedFaqs } from '@/data/faqs'

/**
 * Spec §7 — deliberately clean, no hero. Hidden from the main navigation
 * (reachable from the footer only) and excluded from the sitemap.
 */
export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  robots: { index: false, follow: false },
}

export default function FaqsPage() {
  return (
    <main className="pb-section md:pb-section-lg pt-32 md:pt-40">
      <Container className="flex max-w-[900px] flex-col gap-10">
        <h1 className="h2-display text-brand-black">Frequently Asked Questions</h1>

        {publishedFaqs.length > 0 ? (
          <FaqAccordion faqs={publishedFaqs} />
        ) : (
          <p className="text-brand-muted">
            Answers are being finalised and will be published shortly.
          </p>
        )}
      </Container>
    </main>
  )
}
