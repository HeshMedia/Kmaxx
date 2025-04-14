import { NextResponse } from 'next/server'

export async function GET() {
  // Redirect to the XML sitemap
  return NextResponse.redirect(new URL('/sitemap.xml', 'https://kmaxx.in'))
}

// Needed for static exports
export const dynamic = 'force-dynamic' 