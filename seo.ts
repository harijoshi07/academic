import type { Metadata } from 'next'

const SITE = 'https://harijoshi07.github.io/academic'
const OG_IMAGE = `${SITE}/og.png`

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE}${path.endsWith('/') ? path : `${path}/`}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Hari Krishna Joshi',
      type: 'website',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Hari Krishna Joshi' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}
