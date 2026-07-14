'use client'

import Container from '@/components/container/Container'
import { cn } from '@/lib/utils'
import { detailIcons } from '@/components/property-details/icons'
import Image from 'next/image'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/components/header/config'

interface PropertyDetailsProps {
  description: string
  features: string[]
  materials: string
  specifications: {
    icon: string
    label: string
    value: string
  }[]
  contactInfo?: string
  amenitiesTitle?: string
  amenitiesColumns: {
    left: string[]
    right: string[]
  }
}

function arrowVector() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3332 4L5.99984 11.3333L2.6665 8"
        stroke="#09090B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PropertyDetails({
  description,
  features,
  specifications,
  materials,
  contactInfo,
  amenitiesTitle = 'Community & Services',
  amenitiesColumns,
}: PropertyDetailsProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="w-full bg-white">
      <Container className="max-w-[1318px] py-12 md:py-24">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-6">
          <div className="flex w-full flex-col gap-6 lg:max-w-[672px]">
            <div className="flex flex-col gap-[26px]">
              <p className="text-base leading-[26px] tracking-[0.4px] text-zinc-950">
                {description}
              </p>

              <div className="flex w-full flex-col">
                {specifications.map((spec, index) => {
                  if (index > 1) return null
                  return (
                    <div
                      key={index}
                      className={cn(
                        'flex items-center justify-between py-2',
                        index > 0 && 'border-t border-gray-300',
                      )}
                    >
                      <div className="flex w-full items-center gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                          <Image
                            alt={spec.label}
                            width={20}
                            height={20}
                            src={detailIcons[spec.icon as keyof typeof detailIcons]}
                          />
                        </div>
                        <span className="text-[15px] leading-6 text-zinc-950">{spec.label}</span>
                        <span className="ml-auto text-[15px] leading-6 text-zinc-950">
                          {spec.value}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

              <p className="text-base leading-[26px] tracking-[0.4px] text-zinc-950">{materials}</p>

              {contactInfo && (
                <p className="text-base leading-[26px] tracking-[0.4px] text-zinc-950">
                  {contactInfo}
                </p>
              )}
            </div>
          </div>

          <div className="w-full shrink-0 lg:sticky lg:top-24 lg:w-[448px]">
            <div className="flex flex-col gap-6 rounded-[32px] bg-[#eae5e0] p-8">
              <h2 className="text-2xl leading-8 font-bold tracking-[-0.84px] text-black uppercase">
                Contact us
              </h2>

              <div className="flex items-center justify-between rounded-[10px] border border-gray-300 bg-transparent p-4">
                <div className="relative shrink-0">
                  <Image
                    alt={'logo'}
                    width={112}
                    height={56}
                    src={'/logo-black.svg'}
                    className="max-sm:max-w-[100px]"
                  />
                </div>

                <div className="flex flex-col items-end gap-1">
                  <p className="text-[10px] leading-[18px] tracking-[1.2px] text-zinc-950 uppercase sm:text-xs">
                    Epasero contracing
                  </p>
                  <p className="text-[10px] leading-[18px] tracking-[1.2px] text-zinc-950 uppercase opacity-50 sm:text-xs">
                    design & Building
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex h-[53px] cursor-pointer items-center justify-center rounded-[10px] bg-[#121211] px-3 transition-colors hover:bg-[#2a2a29]"
                >
                  <span className="text-[15.9px] leading-6 font-normal tracking-[0.8px] text-neutral-50 uppercase">
                    Get Consultation
                  </span>
                </button>

                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="flex h-[53px] items-center justify-center gap-2 rounded-[10px] bg-white px-3 transition-colors hover:bg-gray-50"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 11.2067V13.2067C14.5009 13.3936 14.4641 13.5788 14.3919 13.7511C14.3198 13.9234 14.2137 14.0792 14.0802 14.2093C13.9467 14.3393 13.7883 14.441 13.6147 14.5082C13.4411 14.5754 13.2559 14.6068 13.07 14.6007C11.0301 14.3907 9.06207 13.7217 7.31333 12.6407C5.68225 11.6539 4.28101 10.3226 3.2 8.74733C2.09334 7.06733 1.39933 5.17933 1.18667 3.21867C1.18066 3.03978 1.21154 2.86125 1.27777 2.69381C1.344 2.52638 1.44425 2.37385 1.57147 2.24497C1.69868 2.11609 1.85001 2.01349 2.01789 1.94324C2.18576 1.87299 2.36635 1.83662 2.54867 1.83667H4.648C4.96984 1.83358 5.28219 1.94236 5.53408 2.14553C5.78597 2.3487 5.96229 2.63398 6.032 2.95133C6.16341 3.58607 6.36759 4.20562 6.64133 4.79867C6.72935 5.00327 6.76027 5.22794 6.73062 5.44876C6.70097 5.66957 6.61196 5.87809 6.472 6.04933L5.58333 6.87867C6.48488 8.52385 7.80145 9.76277 9.53667 10.6153L10.4253 9.78467C10.6067 9.65528 10.8269 9.57437 11.0596 9.54688C11.2923 9.51938 11.5288 9.54641 11.7447 9.62667C12.372 9.88556 13.0266 10.0799 13.696 10.206C14.0279 10.2742 14.3257 10.4566 14.5363 10.7208C14.7468 10.985 14.8571 11.3144 14.8467 11.6513"
                      stroke="#121211"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[15.1px] leading-6 font-normal tracking-[0.8px] text-[#121211] uppercase">
                    {WHATSAPP_NUMBER}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
