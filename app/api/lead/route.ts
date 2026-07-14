import { NextResponse } from 'next/server'
import { HUBSPOT } from '@/lib/site'

/**
 * Spec §3.4 — forward lead-capture submissions to HubSpot.
 *
 * Proxied through the server rather than posted from the browser so that a
 * HubSpot outage surfaces as a clean error we control, and so the payload shape
 * lives in one place.
 */

const HUBSPOT_ENDPOINT = `https://api-${HUBSPOT.region}.hsforms.com/submissions/v3/integration/submit/${HUBSPOT.portalId}/${HUBSPOT.formId}`

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: { name?: string; email?: string; phone?: string; consent?: boolean }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const phone = body.phone?.trim() ?? ''

  // Spec §3.2: all four are mandatory. Re-checked here because client-side
  // validation is a convenience, not a guarantee.
  if (!name || !email || !phone || !body.consent) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const res = await fetch(HUBSPOT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: [
        { name: 'firstname', value: name },
        { name: 'email', value: email },
        { name: 'phone', value: phone },
      ],
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: 'I agree to receive communications and marketing materials from Epasero Contracting.',
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: 'I agree to receive marketing communications from Epasero Contracting.',
            },
          ],
        },
      },
    }),
  }).catch(() => null)

  if (!res || !res.ok) {
    const detail = res ? await res.text().catch(() => '') : 'network error'
    console.error('HubSpot lead submission failed:', res?.status, detail)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
