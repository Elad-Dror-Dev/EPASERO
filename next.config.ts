import type { NextConfig } from 'next'

/**
 * The site previously used `output: 'export'` (a fully static build). That is
 * incompatible with the contact form, the HubSpot lead proxy, and the Google
 * Reviews integration — all of which need a server so API keys stay off the
 * client. On Vercel these run as serverless functions.
 *
 * Dropping the export also re-enables Next's image optimizer, so `unoptimized`
 * is no longer needed either.
 */
const nextConfig: NextConfig = {
  trailingSlash: true,
}

export default nextConfig
