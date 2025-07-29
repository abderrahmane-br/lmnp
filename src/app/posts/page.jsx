"use client";
import { useEffect, useState } from "react";
import Subheader from "@/components/Subheader";
import PostCard from "@/components/PostCard";
import PostCardRich from "@/components/PostCardRich";
import { supabase } from "@/lib/supabaseClient";
import styles from "@/styles/components/PostCard.module.scss";
import { get_now } from "@/lib/utils";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true);
  console.log(articles)

  useEffect(() => {
    // Try to get post from navigation state
    const nav = window.history.state?.usr;
    console.log(window.history)
    if (nav && nav.posts) {
      setPosts(nav.posts);
      setLoading(false);
    } else {
      const now = get_now();

      const fetchPost = async () => {
        const [postGmb, articleSite ]= await Promise.all([
          supabase
            .schema("gmb_ads")
          .from("annonces")
          .select("*")
          .is('publie', false),
          supabase
            .schema("gmb_ads")
            .from("articles_site_revises")
            .select("*")
            .lte('date_prevue', now)
            .order('date_prevue', {ascending:false})
        ])

        if (!articleSite.error) 
          setArticles(articleSite.data);
        if (!postGmb.error)
          setPosts(postGmb.data);

        console.log(articleSite, postGmb)
      };

      fetchPost();
      setLoading(false);
    }
  }, []);

  return (
    <div className={`${styles.postsList}`}>
        <Subheader />
        {loading && <div>Loading...</div>}
        {!loading && !posts && !articles && <div>Post not found.</div>}
        {!loading && articles && articles.map((art) => (
            <PostCardRich key={art.id} {...art} />
        ))}
        {!loading && posts && posts.map((post) => (
            <PostCard key={post.id} {...post} />
        ))}
    </div>
  );
}