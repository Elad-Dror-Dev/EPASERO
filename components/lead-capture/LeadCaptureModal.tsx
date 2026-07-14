'use client'

import { useEffect, useState, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

/**
 * Spec §3 — lead-capture modal.
 *
 * Appears 6s after the first homepage visit, once per browser session. On a
 * valid submit: POST to HubSpot, then trigger the PDF download, then return the
 * user to the homepage. If HubSpot fails, nothing downloads and nothing
 * redirects — the user sees an inline error and can retry.
 */

const SESSION_KEY = 'epasero:lead-modal-seen'
const DELAY_MS = 6000

/** The gated asset. Supplied by the client as "Interior Design Guide". */
const GUIDE_PATH = '/guides/interior-design-guide-2026.pdf'

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'consent' | 'form', string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LeadCaptureModal = () => {
  const pathname = usePathname()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [form, setForm] = useState({ name: '', email: '', phone: '', consent: false })

  // Homepage only, once per session, after a delay so the hero lands first.
  //
  // The popup stays shut unless the guide PDF is actually on the server. Without
  // this check it would take a real prospect's name, email and phone, push them
  // to HubSpot, and then hand back a 404 — the worst possible first impression.
  // Drop the file at GUIDE_PATH and the popup enables itself; no code change.
  useEffect(() => {
    if (pathname !== '/') return
    if (sessionStorage.getItem(SESSION_KEY)) return

    let timer: ReturnType<typeof setTimeout>
    let cancelled = false

    fetch(GUIDE_PATH, { method: 'HEAD' })
      .then(res => {
        if (cancelled || !res.ok) return
        timer = setTimeout(() => setOpen(true), DELAY_MS)
      })
      .catch(() => {
        /* guide unavailable — leave the popup closed */
      })

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [pathname])

  const dismiss = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, '1')
    setOpen(false)
  }, [])

  // Close on Escape, and lock background scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && dismiss()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, dismiss])

  const validate = (): Errors => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!EMAIL_RE.test(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.'
    if (!form.consent) next.consent = 'Please accept to continue.'
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setSubmitting(true)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('submission failed')

      // Step 2 — trigger the download only after HubSpot has accepted the lead.
      const a = document.createElement('a')
      a.href = GUIDE_PATH
      a.download = ''
      document.body.appendChild(a)
      a.click()
      a.remove()

      // Step 3 — return the user to the homepage.
      sessionStorage.setItem(SESSION_KEY, '1')
      setOpen(false)
      router.push('/')
    } catch {
      setErrors({ form: 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  const field =
    'w-full rounded-brand border border-brand-line px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-brand-brown'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-4"
      onClick={dismiss}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="rounded-brand-lg bg-brand-white relative grid w-full max-w-[900px] overflow-hidden shadow-2xl md:grid-cols-2"
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          className="text-brand-black hover:text-brand-brown absolute top-4 right-4 z-10"
        >
          <X size={22} />
        </button>

        {/* Visual half — hidden on mobile so the form is never pushed off-screen. */}
        <div className="relative hidden min-h-[460px] md:block">
          <Image
            src="/portfolio/1/1.webp"
            alt="Epasero interior"
            fill
            sizes="(max-width: 768px) 0px, 450px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
          <div className="flex flex-col gap-2">
            <h2 id="lead-modal-title" className="h2-display text-brand-black">
              Get Your Free <span className="h2-accent">Interior Design Guide 2026</span>
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              Discover the trends, materials, and design principles shaping luxury interiors in
              Dubai.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div>
              <label htmlFor="lead-name" className="sr-only">
                Name
              </label>
              <input
                id="lead-name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className={field}
              />
              {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
            </div>

            <div>
              <label htmlFor="lead-email" className="sr-only">
                Email
              </label>
              <input
                id="lead-email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className={field}
              />
              {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="lead-phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="lead-phone"
                type="tel"
                required
                placeholder="+971 XX XXX XXXX"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className={field}
              />
              {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
            </div>

            <div>
              <label className="text-brand-muted flex cursor-pointer items-start gap-2 text-xs leading-relaxed">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={e => setForm({ ...form, consent: e.target.checked })}
                  className="mt-0.5 accent-[#9c5b4b]"
                />
                <span>
                  I agree to receive communications and marketing materials from Epasero
                  Contracting.
                </span>
              </label>
              {errors.consent ? (
                <p className="mt-1 text-xs text-red-600">{errors.consent}</p>
              ) : null}
            </div>

            {errors.form ? <p className="text-xs text-red-600">{errors.form}</p> : null}

            <Button type="submit" disabled={submitting} className="w-full">
              {submitting ? 'Sending…' : 'Download'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LeadCaptureModal
