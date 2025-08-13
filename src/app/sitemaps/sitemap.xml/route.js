// src/app/sitemaps/sitemap.xml/route.js
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const BASE = 'https://lmnp-conseils.immo'

// ⚠️ Mets à jour cette date quand tu modifies réellement la page Mentions légales.
const MENTIONS_LASTMOD = '2025-08-13'

function pad(n) {
  return String(n).padStart(2, '0')
}
function lastDayOfMonthISO(year, month1to12) {
  // new Date(year, month, 0) => dernier jour du mois (month = 1..12)
  return new Date(year, month1to12, 0).toISOString().slice(0, 10)
}

export async function GET() {
  // 1) Date du dernier article (sert pour Accueil & /actualites & mois courant)
  const { data: latest, error: e1 } = await supabase
    .schema('gmb_ads')
    .from('articles_site_revises')
    .select('date_prevue')
    .order('date_prevue', { ascending: false })
    .limit(1)

  const lastArticleISO =
    !e1 && latest?.[0]?.date_prevue
      ? latest[0].date_prevue.slice(0, 10) // yyyy-mm-dd
      : null

  // 2) lastmod réel du page-sitemap = max(lastArticle, mentions légales)
  const pageSitemapLastmod =
    [lastArticleISO, MENTIONS_LASTMOD].filter(Boolean).sort().slice(-1)[0] || null

  // 3) Liste des mois à publier dans l'index (RPC existant)
  const { data: months, error: e2 } = await supabase.rpc('get_distinct_months')

  const now = new Date()
  const nowYM = `${now.getFullYear()}-${pad(now.getMonth() + 1)}`

  // 4) lastmod des sitemaps Actualités :
  //    - Mois courant  => date du dernier article
  //    - Mois passés   => dernier jour du mois
  const newsSitemaps = (!e2 && months ? months : []).map(({ year, month }) => {
    const ym = `${year}-${pad(month)}`
    const lastmod =
      ym === nowYM
        ? (lastArticleISO || lastDayOfMonthISO(year, month))
        : lastDayOfMonthISO(year, month)
    return {
      loc: `${BASE}/actualites-sitemap-${year}-${pad(month)}.xml`,
      lastmod
    }
  })

  const entries = [
    { loc: `${BASE}/page-sitemap.xml`, lastmod: pageSitemapLastmod },
    ...newsSitemaps
  ]

  const xml =
`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `  <sitemap>
    <loc>${e.loc}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}
  </sitemap>`).join('\n')}
</sitemapindex>`

  return new NextResponse(xml, { headers: { 'Content-Type': 'text/xml' } })
}
