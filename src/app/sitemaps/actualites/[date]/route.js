import { supabase } from "@/lib/supabaseClient";

export async function GET(req, {params}) {

    const base = 'https://lmnp-conseils.immo';

    const {data, error} = await supabase
    .schema("gmb_ads")
    .from("articles_site_revises")
    .select("url_slug, date_prevue")

    if (error)
        return new Response('Error fetching data from database', {status: 500})

    
    const posts = data.filter((post) => 
        post.date_prevue.startsWith(params.date)
        && (post.date_prevue.slice(8, 10) <= new Date().getDate())
).reverse()

    const xml = `<?xml version="1.0" encoding="UTF-8"?> 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> ${posts.map((post) =>
    `<url>
        <loc>${base}/actualites/${post.url_slug}</loc>
        <datepub>${post.date_prevue.slice(0,10)}</datepub>
    </url>`).join('')} 
</urlset>`;

    return new Response(xml, {
        headers: {
        'Content-Type': 'application/xml',
        },
    });
}