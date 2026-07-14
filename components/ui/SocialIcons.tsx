import { FaInstagram, FaTiktok, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import { SOCIAL_LINKS } from '@/lib/site'
import { cn } from '@/lib/utils'

/**
 * Spec §1.3 requires every icon on the site — social and WhatsApp — to come from
 * a single family with the same visual weight. All five (including the floating
 * WhatsApp button) are Font Awesome 6 brand glyphs for exactly that reason.
 */
const ICONS: Record<string, IconType> = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  Facebook: FaFacebookF,
  LinkedIn: FaLinkedinIn,
}

type Props = {
  /** Light-on-dark, for the black footer and over hero imagery. */
  invert?: boolean
  size?: number
  className?: string
}

const SocialIcons = ({ invert = false, size = 16, className }: Props) => (
  <ul className={cn('flex items-center gap-4', className)}>
    {SOCIAL_LINKS.map(({ label, href }) => {
      const Icon = ICONS[label]
      return (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              'block transition-colors duration-300',
              invert
                ? 'text-brand-white/70 hover:text-brand-brown'
                : 'text-brand-black hover:text-brand-brown',
            )}
          >
            <Icon size={size} />
          </a>
        </li>
      )
    })}
  </ul>
)

export default SocialIcons
