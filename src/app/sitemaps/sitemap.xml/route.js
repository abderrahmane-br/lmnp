import { NextResponse } from 'next/server';

export async function GET() {
  const base = 'https://lmnp-conseils.immo';

  // Exemple statique ; ou générez dynamiquement via Supabase si besoin
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
    <sitemap>
        <loc>${base}/actualites-sitemap.xml</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    </sitemap>
</sitemapindex>`;

  return new NextResponse(sitemapIndex, {
    headers: { 'Content-Type': 'text/xml' }
  });
}