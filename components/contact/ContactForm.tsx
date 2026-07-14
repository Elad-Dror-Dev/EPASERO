'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { CONTACT } from '@/lib/site'

/** Spec §8.3 — enquiry form. Delivers to contact@epaserocontracting.com. */

type Fields = { name: string; email: string; phone: string; location: string; overview: string }
type Errors = Partial<Record<keyof Fields | 'form', string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY: Fields = { name: '', email: '', phone: '', location: '', overview: '' }

const ContactForm = () => {
  const [form, setForm] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const set =
    (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value }))

  const validate = (): Errors => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!EMAIL_RE.test(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.'
    if (!form.location.trim()) next.location = 'Please enter the project location.'
    if (!form.overview.trim()) next.overview = 'Please tell us about your project.'
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('failed')
      setSent(true)
    } catch {
      setErrors({
        form: `Something went wrong. Please try again or contact us directly at ${CONTACT.email}`,
      })
    } finally {
      setSubmitting(false)
    }
  }

  // Spec §8.3: on success the form is replaced by the confirmation message.
  if (sent) {
    return (
      <div className="rounded-brand border-brand-line flex min-h-[320px] flex-col items-center justify-center gap-4 border px-8 py-16 text-center">
        <p className="h2-display text-brand-brown">
          Thank you for connecting with Epasero. We have received your submission and will be in
          touch within 24 hours.
        </p>
      </div>
    )
  }

  const field =
    'w-full rounded-brand border border-brand-line px-4 py-3 text-sm outline-none transition-colors duration-300 focus:border-brand-brown'
  const labelClass = 'mb-2 block text-xs font-semibold tracking-[0.08em] uppercase text-brand-black'

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="h2-display text-brand-black">Share Your Requirements</h3>
        <p className="text-brand-muted text-sm leading-relaxed">
          Fill out the form below and we will get back to you within 24 hours. Your information is
          treated with complete care and confidentiality.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={set('name')}
            className={field}
          />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={set('email')}
            className={field}
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="+971 XX XXX XXXX"
            value={form.phone}
            onChange={set('phone')}
            className={field}
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="location" className={labelClass}>
            Project Location
          </label>
          <input
            id="location"
            type="text"
            required
            placeholder="e.g. Dubai Marina, Villa"
            value={form.location}
            onChange={set('location')}
            className={field}
          />
          {errors.location ? <p className="mt-1 text-xs text-red-600">{errors.location}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="overview" className={labelClass}>
          Brief Overview
        </label>
        <textarea
          id="overview"
          required
          rows={5}
          placeholder="Tell us about your project…"
          value={form.overview}
          onChange={set('overview')}
          className={`${field} min-h-[120px] resize-y`}
        />
        {errors.overview ? <p className="mt-1 text-xs text-red-600">{errors.overview}</p> : null}
      </div>

      {errors.form ? <p className="text-xs text-red-600">{errors.form}</p> : null}

      <Button type="submit" disabled={submitting} className="w-full py-4">
        {submitting ? 'Sending…' : 'Submit'}
      </Button>
    </form>
  )
}

export default ContactForm
