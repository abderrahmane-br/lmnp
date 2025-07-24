"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Subheader from "@/components/Subheader";
import PostCard from "@/components/PostCard";
import PostCardRich from "@/components/PostCardRich";
import { supabase } from "@/lib/supabaseClient";
import styles from "@/styles/components/PostCard.module.scss";

export default function PostPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isArticleSite, setIsArticleSite] = useState(false)

  useEffect(() => {
    // Try to get post from navigation state
    const nav = window.history.state?.usr;
    if (nav && nav.post) {
      setPost(nav.post);
      setLoading(false);
    } else {
      // Fallback: fetch from supabase
      const fetchPost = async () => {
        const [articleSite, post ]= await Promise.all([
          supabase
            .schema("gmb_ads")
            .from("articles_site_revises")
            .select("*")
            .eq("id", id)
            .single(),
          supabase
            .schema("gmb_ads")
            .from("annonces")
            .select("*")
            .eq("id", id)
            .single()            
        ])

        
        if (!articleSite.error) {
          setPost(articleSite.data);
          setIsArticleSite(true);
        }
        else {
          setPost(post.data);
          setIsArticleSite(false);
        }

        setLoading(false);
      };
      fetchPost();
    }
  }, [id]);


  return (
    <div className={`${styles.postPage}`}>
      <Subheader />
        {loading && <div>Loading...</div>}
        {!loading && post &&
         (isArticleSite ? <PostCardRich {...post} /> : <PostCard {...post} />)
        }
        {!loading && !post && <div>Post not found.</div>}
    </div>
  );
}