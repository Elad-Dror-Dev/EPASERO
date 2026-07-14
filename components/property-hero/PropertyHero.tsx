'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Container from '@/components/container/Container'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

interface PropertyImage {
  src: string
  alt: string
}

interface PropertyHeroProps {
  category?: string
  title: string
  location: string
  price: string
  area: string
  images: PropertyImage[]
}

export default function PropertyHero({
  category = 'Fit Out Projects',
  title,
  location,
  price,
  area,
  images,
}: PropertyHeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const [slidesPerView, setSlidesPerView] = useState<number | 'auto'>('auto')
  const [swiperKey, setSwiperKey] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView('auto')
        setSwiperKey(false)
      } else {
        setSlidesPerView(1)
        setSwiperKey(true)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToNextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % images.length)
  }

  const goToPrevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      goToNextImage()
    } else if (e.key === 'ArrowLeft') {
      goToPrevImage()
    } else if (e.key === 'Escape') {
      closeModal()
    }
  }

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#EAE5E0] pt-[168px] pb-[60px]"
    >
      <Container className="max-w-full">
        <div className="mx-auto max-w-[1318px]">
          <div className="mb-[41px]">
            <div className="inline-flex rounded-[10px] border border-[rgba(124,104,88,0.3)] bg-white px-[21px] py-[8px] backdrop-blur-[25px]">
              <span className="text-[14px] leading-[16.8px] font-normal text-[#7C6858] uppercase">
                {category}
              </span>
            </div>
          </div>

          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-[105px] md:flex-row lg:items-center">
            <div className="flex max-w-[768px] flex-col gap-6">
              <h1 className="text-[40px] leading-[46px] font-bold tracking-[-0.84px] text-black uppercase">
                {title}
              </h1>

              <div className="flex items-center gap-2">
                <Image alt={'location'} width={20} height={20} src={'/icons/location.svg'} />
                <span className="text-[16px] leading-[18px] font-medium tracking-[1.2px] text-[#09090B] uppercase">
                  {location}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="text-right">
                <p className="text-[24px] leading-[28px] font-normal tracking-[-1.2px] text-[#09090B]"></p>
              </div>

              <div className="flex items-center gap-2 md:justify-end">
                <Image alt={'location'} width={16} height={16} src={'/icons/size-hero.svg'} />
                <span className="text-[16px] leading-[18px] font-medium tracking-[1.2px] text-[#09090B] uppercase">
                  {area}
                </span>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative mx-auto h-[350px] max-w-fit"
        >
          <Swiper
            key={String(swiperKey)}
            modules={[Navigation]}
            spaceBetween={24}
            speed={600}
            centeredSlides={slidesPerView == 1 ? true : false}
            slidesPerView={slidesPerView}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className=""
            style={{ overflow: 'visible' }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <motion.div
                  className="group relative h-[350px] w-full cursor-pointer overflow-hidden rounded-[32px]"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    height={350}
                    width={700}
                    className="h-full object-cover transition-transform duration-300 hover:scale-105 max-md:w-full md:w-auto"
                    style={{ objectFit: 'cover' }}
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <Image
                      src="/icons/magnifier.svg"
                      alt="Zoom"
                      width={20}
                      height={20}
                      className="pointer-events-none"
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="swiper-button-prev-custom absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[12.5px] border-[1.25px] border-[rgba(124,104,88,0.3)] bg-white transition hover:bg-gray-50 hover:opacity-100 md:left-0 md:left-[19px]"
            aria-label="Scroll left"
          >
            <Image
              src={'/swiper/left-arrow.svg'}
              className="mt-1"
              width={11}
              height={11}
              alt="Scroll left"
            />
          </button>
          <button
            className="swiper-button-next-custom absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[12.5px] border-[1.25px] border-[rgba(124,104,88,0.3)] bg-white transition hover:bg-gray-50 hover:opacity-100 md:right-0 md:right-[19px]"
            aria-label="Scroll right"
          >
            <Image
              src={'/swiper/right-arrow.svg'}
              className="mt-1"
              width={11}
              height={11}
              alt="Scroll right"
            />
          </button>
        </motion.div>
      </Container>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 md:top-8 md:right-8"
            onClick={closeModal}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="absolute top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm md:top-8">
            <span className="text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </span>
          </div>

          <button
            className="absolute top-1/2 left-4 z-50 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 md:left-8"
            onClick={e => {
              e.stopPropagation()
              goToPrevImage()
            }}
            aria-label="Previous image"
          >
            <Image
              src={'/swiper/left-arrow.svg'}
              className="mt-0.5 brightness-0 invert"
              width={16}
              height={16}
              alt="Previous"
            />
          </button>

          <div
            className="relative flex h-full w-full items-center justify-center p-4 md:p-16"
            onClick={e => e.stopPropagation()}
          >
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full"
            >
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </div>

          <button
            className="absolute top-1/2 right-4 z-50 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 md:right-8"
            onClick={e => {
              e.stopPropagation()
              goToNextImage()
            }}
            aria-label="Next image"
          >
            <Image
              src={'/swiper/right-arrow.svg'}
              className="mt-0.5 brightness-0 invert"
              width={16}
              height={16}
              alt="Next"
            />
          </button>
        </div>
      )}
    </section>
  )
}
