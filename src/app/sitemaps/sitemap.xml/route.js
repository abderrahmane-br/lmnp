// src/app/sitemaps/sitemap.xml/route.js
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BASE = 'https://lmnp-conseils.immo';
const fmt = (d) => new Date(d).toISOString().slice(0, 10);

// Dernière actu tout confondu
async function lastPostDateAll() {
  const { data, error } = await supabase
    .schema('gmb_ads')
    .from('articles_site_revises')
    .select('date_prevue')
    .lte('date_prevue', fmt(new Date()))
    .order('date_prevue', { ascending: false })
    .limit(1);

  if (error || !data?.length) return fmt(new Date());
  return fmt(data[0].date_prevue);
}

// Dernière actu pour un mois donné
async function lastPostDateByMonth(year, month) {
  const mm = String(month).padStart(2, '0');
  const start = `${year}-${mm}-01`;
  const today = fmt(new Date());

  const { data, error } = await supabase
    .schema('gmb_ads')
    .from('articles_site_revises')
    .select('date_prevue')
    .gte('date_prevue', start)
    .lte('date_prevue', today)
    .order('date_prevue', { ascending: false })
    .limit(1);

  // S’il n’y a rien pour ce mois, on met le 1er du mois (ne dépassera pas aujourd’hui)
  return (!error && data?.length) ? fmt(data[0].date_prevue) : start;
}

export async function GET() {
  // Liste des mois disponibles (RPC déjà en place chez toi)
  const { data: months, error } = await supabase.rpc('get_distinct_months');

  const items = [];

  // page-sitemap.xml : date = dernière actu globale (car Accueil + Actualités bougent avec les posts)
  const lastPages = await lastPostDateAll();
  items.push({ loc: `${BASE}/page-sitemap.xml`, lastmod: lastPages });

  if (!error && months?.length) {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const eligible = months.filter(
      (t) => t.year < y || (t.year === y && t.month <= m)
    );

    for (const t of eligible) {
      const last = await lastPostDateByMonth(t.year, t.month);
      const mm = String(t.month).padStart(2, '0');
      items.push({
        loc: `${BASE}/actualites-sitemap-${t.year}-${mm}.xml`,
        lastmod: last,
      });
    }
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    items
      .map(
        (i) =>
          `<sitemap><loc>${i.loc}</loc><lastmod>${i.lastmod}</lastmod></sitemap>`
      )
      .join('') +
    `</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
