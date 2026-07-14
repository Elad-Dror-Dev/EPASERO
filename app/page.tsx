import Hero from '@/components/hero/Hero'
import TailoredSolutions from '@/components/tailored-solutions/TailoredSolutions'
import GetInspired from '@/components/get-inspired'
import HowWeWork from '@/components/how-we-work/HowWeWork'
import RealPeopleSpaces from '@/components/real-people-spaces/RealPeopleSpaces'
import AboutUs from '@/components/about-us/AboutUs'
import ImaginationHero from '@/components/imagination-hero/ImaginationHero'
import LottieLoader from '@/components/LottieLoader/LottieLoader'

export default function Home() {
  return (
    <main className="">
      <LottieLoader />
      <Hero />
      <TailoredSolutions />
      <GetInspired />
      <HowWeWork />
      <RealPeopleSpaces />
      <AboutUs />
      <ImaginationHero />
    </main>
  )
}
