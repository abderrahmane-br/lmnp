import { supabase } from "@/lib/supabaseClient";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req, {params}) {

    const base = 'https://lmnp-conseils.immo';
    const {date} = await params;
    const {data, error} = await supabase
    .schema("gmb_ads")
    .from("articles_site_revises")
    .select("url_slug, date_prevue")
    
    if (error)
        return new Response('Error fetching data from database', {status: 500})
    
    
    const posts = data.filter((post) => 
        post.date_prevue.startsWith(date)
    && (post.date_prevue.slice(0, 10) <= new Date().toISOString().slice(0, 10))
).reverse()


    const xml = `<?xml version="1.0" encoding="UTF-8"?> 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> ${posts.map((post) =>
    `<url>
        <loc>${base}/actualites/${post.url_slug}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    </url>`).join('')} 
</urlset>`;

    return new Response(xml, {
        headers: {
        'Content-Type': 'application/xml',
        },
    });
}