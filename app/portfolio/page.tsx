import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Portfolio from '@/components/portfolio/Portfolio'
import CtaSection from '@/components/cta/CtaSection'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'A curated body of work across Dubai — private residences, villas, and commercial environments by Epasero Contracting.',
}

/**
 * Spec §5. The hero image should be the supplied "Portfolio Hero Image"; until
 * that arrives this reuses the existing portfolio background.
 */
const PortfolioPage = () => (
  <main>
    <PageHero
      heading="We Shape the Feeling of Space"
      image="/hero-portfolio-bg.webp"
      caption={'Private Residence, Palm Jumeirah\n— Contemporary Luxury Interior'}
    />
    <Portfolio />
    <CtaSection />
  </main>
)

export default PortfolioPage
