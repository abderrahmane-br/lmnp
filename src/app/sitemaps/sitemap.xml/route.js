import { NextResponse } from 'next/server';
import { supabase } from "@/lib/supabaseClient";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const base = 'https://lmnp-conseils.immo';
  const {data, error} = await supabase.rpc('get_distinct_months');

  let dates = []
  if (!error) {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const filteredDates = data.filter((d) => (d.year <= year) && (d.month <= month));
    dates = filteredDates;
  }



  // Exemple statique ; ou générez dynamiquement via Supabase si besoin
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>${base}/page-sitemap.xml</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    </sitemap>
    ${dates.map( ({ year, month }) =>
    `<sitemap>
            <loc>${base}/sitemap-posts-${year}-${month}.xml</loc>
            <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      </sitemap>`).join('')
}
</sitemapindex>`;

  return new NextResponse(sitemapIndex, {
    headers: { 'Content-Type': 'text/xml' }
  });
}