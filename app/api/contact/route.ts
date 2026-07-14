import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { CONTACT } from '@/lib/site'

/**
 * Spec §8.3 — contact form. Delivers the enquiry to contact@epaserocontracting.com.
 *
 * Uses Resend for delivery. Requires two environment variables:
 *   RESEND_API_KEY  — from resend.com
 *   CONTACT_FROM    — a verified sender on your domain, e.g. website@epaserocontracting.com
 *
 * The key is read server-side only and never reaches the browser.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string,
  )

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM

  if (!apiKey || !from) {
    console.error('Contact form is not configured: set RESEND_API_KEY and CONTACT_FROM.')
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }

  let body: Record<string, string>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const phone = body.phone?.trim() ?? ''
  const location = body.location?.trim() ?? ''
  const overview = body.overview?.trim() ?? ''

  if (!name || !email || !phone || !location || !overview) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  try {
    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from,
      to: CONTACT.email,
      replyTo: email,
      subject: `New enquiry from ${name} — ${location}`,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Project location:</strong> ${escapeHtml(location)}</p>
        <p><strong>Brief overview:</strong></p>
        <p>${escapeHtml(overview).replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) throw new Error(error.message)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form delivery failed:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 502 })
  }
}
