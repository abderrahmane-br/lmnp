import { supabase } from "./supabaseClient";
import slugify from "slugify";

export function get_now(){
    let date = new Date();
    date = date.toISOString().replace('Z', '').replace('T', ' ')
    return date;
  }


export async function slugify_url() {
  console.log("slugify")
  const {data, error} = await supabase
  .schema("gmb_ads")
  .from('articles_site_revises')
  .select('id, titre, url_slug')
  .is('url_slug', null)

  for(let post of data) {
    const slug = slugify(post.titre, { lower: true, strict: true })
    await supabase
    .schema("gmb_ads")
    .from("articles_site_revises")
    .update({"url_slug": slug})
    .eq('id', post.id)
  }
}

