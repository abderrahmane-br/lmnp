// src/app/sitemaps/page-sitemap.xml/route.js
export async function GET() {
  const base = 'https://lmnp-conseils.immo';

  // Accueil & Actualités changent quotidiennement chez vous
  const todayISO = new Date().toISOString().split('T')[0];

  // Vraie date de mise à jour des mentions légales
  const LASTMOD_MENTIONS = '2025-08-13';

  const pages = [
    { path: '',               lastmod: todayISO },        // /
    { path: 'actualites',     lastmod: todayISO },        // /actualites
    { path: 'mentions-legales', lastmod: LASTMOD_MENTIONS } // /mentions-legales
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ path, lastmod }) => `
  <url>
    <loc>${base}/${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=0, stale-while-revalidate=300'
    }
  });
}
