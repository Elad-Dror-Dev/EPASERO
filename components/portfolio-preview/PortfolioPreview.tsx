import Container from '@/components/container/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import PortfolioCard from '@/components/portfolio/PortfolioCard'
import { portfolioProjects } from '@/data/data'

/** Spec §4.6 — homepage portfolio teaser. Full list lives on /portfolio. */
const PortfolioPreview = () => {
  const featured = portfolioProjects.slice(0, 6)

  return (
    <section id="portfolio" className="py-section md:py-section-lg scroll-mt-24 bg-[#faf8f7]">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          label="Our Portfolio"
          heading="Spaces That"
          accent="Define Themselves"
          body="A curated body of work across Dubai, encompassing private residences and commercial environments. Each project is conceived as a distinct architectural expression, shaped through context, materiality, and a disciplined design language."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map(project => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center">
          <ButtonLink href="/portfolio" variant="outline" className="px-10 py-4">
            View All Projects
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}

export default PortfolioPreview
