"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Subheader from "@/components/Subheader";
import PostCard from "@/components/PostCard";
import { supabase } from "@/lib/supabaseClient";
import styles from "@/styles/components/PostCard.module.scss";

export default function PostPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to get post from navigation state
    const nav = window.history.state?.usr;
    if (nav && nav.post) {
      setPost(nav.post);
      setLoading(false);
    } else {
      // Fallback: fetch from supabase
      const fetchPost = async () => {
        const { data, error } = await supabase
          .schema("gmb_ads")
          .from("annonces")
          .select("*")
          .eq("id", id)
          .single();
        setPost(data);
        setLoading(false);
      };
      fetchPost();
    }
  }, [id]);

  return (
    <div className={`${styles.postPage}`}>
      <Subheader />
        {loading && <div>Loading...</div>}
        {!loading && post && <PostCard {...post} />}
        {!loading && !post && <div>Post not found.</div>}
    </div>
  );
}