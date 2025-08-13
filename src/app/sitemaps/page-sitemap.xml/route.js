// src/app/sitemaps/page-sitemap.xml/route.js
import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BASE = 'https://lmnp-conseils.immo';
const fmt = (d) => new Date(d).toISOString().slice(0, 10);

async function lastPostDateAll() {
  const { data, error } = await supabase
    .schema('gmb_ads')
    .from('articles_site_revises')
    .select('date_prevue')
    .lte('date_prevue', fmt(new Date()))
    .order('date_prevue', { ascending: false })
    .limit(1);
  return (!error && data?.length) ? fmt(data[0].date_prevue) : fmt(new Date());
}

export async function GET() {
  const last = await lastPostDateAll();

  const pages = [
    { loc: `${BASE}/`,               lastmod: last,        changefreq: 'daily',  priority: '1.0' },
    { loc: `${BASE}/actualites`,     lastmod: last,        changefreq: 'daily',  priority: '0.8' },
    { loc: `${BASE}/mentions-legales`, lastmod: '2025-08-13', changefreq: 'yearly', priority: '0.3' },
  ];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    pages
      .map(
        (p) =>
          `<url><loc>${p.loc}</loc><lastmod>${p.lastmod}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`
      )
      .join('') +
    `</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
