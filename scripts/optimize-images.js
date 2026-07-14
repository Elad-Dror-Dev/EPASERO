/**
 * Re-export source images from _asset-archive/ into public/ as sized, quality WebP.
 *
 * Source images are up to 5760px wide. Shipping them at full width forces the encoder to
 * destroy quality to reach a sane file size — that is what produced the washed-out
 * portfolio header. Resizing first means we can afford a much higher quality setting AND
 * still send fewer bytes.
 *
 * Usage:  node scripts/optimize-images.js <source> <dest> [maxWidth] [quality]
 *   e.g.  node scripts/optimize-images.js _asset-archive/hero-portfolio-bg.jpg public/hero-portfolio-bg.webp
 */
import sharp from 'sharp'
import fs from 'fs'

const MAX_WIDTH = 2560 // no browser renders a full-bleed background above this
const QUALITY = 82

const [, , src, dest, maxWidth = MAX_WIDTH, quality = QUALITY] = process.argv

if (!src || !dest) {
  console.error('Usage: node scripts/optimize-images.js <source> <dest> [maxWidth] [quality]')
  process.exit(1)
}

const before = fs.statSync(src).size

const info = await sharp(src)
  .resize({ width: Number(maxWidth), withoutEnlargement: true })
  .webp({ quality: Number(quality) })
  .toFile(dest)

const after = fs.statSync(dest).size
const kb = (n) => `${Math.round(n / 1024)} KB`

console.log(`${src} → ${dest}`)
console.log(`  ${info.width}×${info.height}  ${kb(before)} → ${kb(after)}  (q${quality})`)
