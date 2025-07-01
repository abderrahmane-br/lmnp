"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Subheader from "@/components/Subheader";
import PostCard from "@/components/PostCard";
import { supabase } from "@/lib/supabaseClient";
import styles from "@/styles/components/PostCard.module.scss";

export default function PostsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to get post from navigation state
    const nav = window.history.state?.usr;
    if (nav && nav.posts) {
      setPosts(nav.posts);
      setLoading(false);
    } else {
      // Fallback: fetch from supabase
      const fetchPosts = async () => {
        const { data, error } = await supabase
          .schema("gmb_ads")
          .from("annonces")
          .select("*")
          .is('publié', true);
        setPosts(data);
        setLoading(false);
      };
      fetchPosts();
    }
  }, [id]);

  return (
    <div className={`${styles.postsList}`}>
        <Subheader />
        {loading && <div>Loading...</div>}
        {!loading && !posts && <div>Post not found.</div>}
        {!loading && posts && posts.map((post) => (
            <PostCard key={post.id} {...post} />
        ))}
    </div>
  );
}