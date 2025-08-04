"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Subheader from "@/components/Subheader";
import PostCardRich from "@/components/PostCardRich";
import styles from "@/styles/components/PostCard.module.scss";
import { fetchPost } from "@/lib/utils";


export default function PostPage() {
  const params = useParams();
  const slug = params.slug;
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
      fetchPost(slug).then(({data, error}) => {
        if (!error)
          setPost(data);
      setLoading(false);
      })      
  };
  }, [slug]);

  return (
    <div className={`${styles.postPage}`}>
      <Subheader />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading && <div>Loading...</div>}
        {!loading && post && <PostCardRich {...post} />}
        {!loading && !post && <div>Post not found.</div>}
      </div>
    </div>
  );
}