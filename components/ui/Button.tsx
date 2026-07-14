import Link from 'next/link'
import { cn } from '@/lib/utils'

/** Buttons & CTAs — spec §1.1: Segoe UI, uppercase, 0.1em tracking, weight 600. */
const base =
  'inline-flex items-center justify-center rounded-brand px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  /** Brand brown fill, white text, darkens 10% on hover. */
  primary: 'bg-brand-brown text-brand-white hover:bg-brand-brown-dark',
  /** Outlined, fills brown on hover. */
  outline: 'border border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-white',
  /** For use on dark/photographic backgrounds. */
  invert: 'border border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black',
} as const

type Variant = keyof typeof variants

export const buttonClasses = (variant: Variant = 'primary', className?: string) =>
  cn(base, variants[variant], className)

type ButtonLinkProps = {
  href: string
  variant?: Variant
  className?: string
  children: React.ReactNode
  external?: boolean
}

export const ButtonLink = ({
  href,
  variant = 'primary',
  className,
  children,
  external,
}: ButtonLinkProps) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses(variant, className)}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={buttonClasses(variant, className)}>
      {children}
    </Link>
  )
}

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & { variant?: Variant }

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => (
  <button className={buttonClasses(variant, className)} {...props} />
)
