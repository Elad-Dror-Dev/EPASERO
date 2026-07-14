import Hero from '@/components/hero/Hero'
import AboutUs from '@/components/about-us/AboutUs'
import Services from '@/components/services/Services'
import HowWeWork from '@/components/how-we-work/HowWeWork'
import PortfolioPreview from '@/components/portfolio-preview/PortfolioPreview'
import ClientStories from '@/components/client-stories/ClientStories'
import CtaSection from '@/components/cta/CtaSection'
import LottieLoader from '@/components/LottieLoader/LottieLoader'

/** Section order follows spec §4.2 – §4.9. */
export default function Home() {
  return (
    <main>
      <LottieLoader />
      <Hero />
      <AboutUs />
      <Services />
      <HowWeWork />
      <PortfolioPreview />
      <ClientStories />
      <CtaSection />
    </main>
  )
}
