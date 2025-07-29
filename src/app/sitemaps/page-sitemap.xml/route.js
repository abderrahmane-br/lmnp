export async function GET() {
const base = 'https://lmnp-conseils.immo';

const pages = [
{ path: '', priority: '1.0', freq: 'daily' },
{ path: 'actualites', priority: '0.8', freq: 'daily' },
// { path: 'annonces-lmnp', priority: '0.7', freq: 'weekly' },
{path: 'mentions-legales', priority: '0.8', freq: 'yearly' }
];

const xml = `<?xml version="1.0" encoding="UTF-8"?> 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> ${pages .map( ({ path, priority, freq }) =>
    `<url>
        <loc>${base}/${path}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>${freq}</changefreq>
        <priority>${priority}</priority>
    </url>`).join('')} 
</urlset>`;

return new Response(xml, {
headers: {
'Content-Type': 'application/xml',
},
});
}