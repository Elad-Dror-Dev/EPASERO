import { NextResponse } from 'next/server'

/**
 * Spec §4.7 — pull live Google reviews for the Client Stories section.
 *
 * Requires two environment variables, both server-only:
 *   GOOGLE_PLACES_API_KEY — a Google Cloud key with the Places API (New) enabled
 *   GOOGLE_PLACE_ID       — the Place ID for Epasero Contracting
 *
 * The key must never be exposed to the browser: anyone who has it can bill your
 * Google Cloud account.
 *
 * Spec §4.7 also asks that the section disappear rather than break if this
 * fails, so every failure path returns an empty list and the section unmounts.
 */

export const revalidate = 3600 // refresh hourly rather than on every request

export type Review = {
  author: string
  rating: number
  text: string
  time: string
  profilePhoto?: string
}

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!key || !placeId) {
    // Not configured yet — the section hides itself. Not an error state.
    return NextResponse.json({ reviews: [] })
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'reviews',
      },
      next: { revalidate },
    })

    if (!res.ok) throw new Error(`Places API returned ${res.status}`)

    const data = await res.json()

    const reviews: Review[] = (data.reviews ?? []).map(
      (r: {
        authorAttribution?: { displayName?: string; photoUri?: string }
        rating?: number
        originalText?: { text?: string }
        text?: { text?: string }
        publishTime?: string
      }) => ({
        author: r.authorAttribution?.displayName ?? 'Google user',
        profilePhoto: r.authorAttribution?.photoUri,
        rating: r.rating ?? 5,
        text: r.originalText?.text ?? r.text?.text ?? '',
        time: r.publishTime ?? '',
      }),
    )

    return NextResponse.json({ reviews: reviews.filter(r => r.text) })
  } catch (err) {
    console.error('Google Reviews fetch failed:', err)
    return NextResponse.json({ reviews: [] })
  }
}
