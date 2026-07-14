import Container from '@/components/container/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { CTA_SECTION } from '@/lib/site'

/** Spec §4.9 / §5.3 / §6.3 — identical on every page, so it lives in one place. */
const CtaSection = () => (
  <section className="bg-brand-white py-section md:py-section-lg">
    <Container className="flex flex-col items-center gap-8 text-center">
      <SectionHeading
        label={CTA_SECTION.label}
        heading={CTA_SECTION.heading}
        body={CTA_SECTION.body}
        align="center"
      />
      <ButtonLink href={CTA_SECTION.buttonHref} variant="primary" className="px-12 py-4">
        {CTA_SECTION.buttonLabel}
      </ButtonLink>
    </Container>
  </section>
)

export default CtaSection
