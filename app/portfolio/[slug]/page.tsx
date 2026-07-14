import { PortfolioProject } from '@/components/portfolio/types'
import PropertyHero from '@/components/property-hero/PropertyHero'
import PropertyDetails from '@/components/property-details/PropertyDetails'
import CtaSection from '@/components/cta/CtaSection'
import { categoryLabels, portfolioProjects } from '@/data/data'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return portfolioProjects.map((project: PortfolioProject) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params

  const metadata = portfolioProjects.find((project: PortfolioProject) => project.slug === slug)

  if (!metadata) return {}

  return {
    title: metadata.title,
    description: metadata.location,
    openGraph: {
      images: [`https://epaserocontracting.com${metadata?.images[1]?.src || '/og-image.webp'}`],
    },
  }
}

const DetailsPage = async ({ params }: { params: Promise<{ slug: string; language: string }> }) => {
  const { slug } = await params
  const data = portfolioProjects.find((project: PortfolioProject) => project.slug === slug)

  const propertyData = data?.property

  if (!propertyData) {
    return notFound()
  }

  const propertyDetailsData = propertyData.details
  return (
    <main>
      <PropertyHero
        {...propertyData}
        title={data.title}
        location={data.location}
        images={data.images}
        category={categoryLabels[data.category]}
      />
      <PropertyDetails {...propertyDetailsData} />
      <CtaSection />
    </main>
  )
}

export default DetailsPage
