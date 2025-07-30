import { supabase } from "@/lib/supabaseClient";

export async function GET() {
const base = 'https://lmnp-conseils.immo';

const {data, error} = await supabase.rpc('get_distinct_months');
if (error)
    return new Response(`Error fetching from database`, {status: error.code})

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const dates = data.filter((d) => (d.year <= year) && (d.month <= month))

const xml = `<?xml version="1.0" encoding="UTF-8"?> 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> ${dates.map( ({ year, month }) =>
    `<sitemap>
        <loc>${base}/actualites-sitemap-${year}-${month}.xml</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </sitemap>`).join('')} 
</urlset>`;

return new Response(xml, {
headers: {
'Content-Type': 'application/xml',
},
});
}