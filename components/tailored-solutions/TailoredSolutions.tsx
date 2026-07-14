import Image from 'next/image'
import Container from '@/components/container/Container'
import Marquee from 'react-fast-marquee'

const TailoredSolutions = () => {
  return (
    <section className="w-full bg-white py-16 md:py-[120px]">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex w-full max-w-[695px] flex-col items-center">
          <h2 className="w-full text-center text-2xl leading-8 font-bold tracking-[-0.84px] text-black uppercase md:text-[40px] md:leading-[46px]">
            Designing Tailored Solutions{' '}
            <span className="text-[#7c6858]">To Meet Diverse Demands</span>
          </h2>

          <div className="w-full pt-6">
            <p className="text-center text-base leading-5 font-normal tracking-[-0.8px] text-[#09090B] md:leading-[20px]">
              {`Epasero Contracting's team of experienced interior architects and designers in
              Dubai specialize in crafting bespoke luxury interiors tailored to
              the unique tastes and needs of each client. With a keen eye for
              detail and a passion for innovation, Epasero Contracting seamlessly blends
              style, comfort, and creativity to create spaces that exude
              sophistication, functionality, and individuality. Our expertise
              spans residential, commercial, and hospitality projects, where
              they transform ordinary spaces into extraordinary environments.`}
            </p>
          </div>
        </div>

        <Marquee
          autoFill={true}
          speed={30}
          gradient={true}
          loop={0}
          gradientColor={'white'}
          className={'flex w-full items-center'}
        >
          {
            Array.from({ length: 8 }, (_, i) => (<Image
              priority={true}
              key={i}
              src={`/brand-logos/${i + 1}.webp`}
              alt={''}
              width={118}
              height={30}
              className={'mx-4 h-[30px] w-[90px] object-contain md:mx-6 md:w-[118px]'}
            />))
          }
        </Marquee>
      </Container>
    </section>
  )
}

export default TailoredSolutions
