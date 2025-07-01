"use client"
import PostCard from "@/components/PostCard";
import styles from "@/styles/components/PostCard.module.scss";
import ctaStyles from "@/styles/components/CTA.module.scss";
import { supabase } from '../lib/supabaseClient'
import { useEffect, useState } from 'react'
import Link from "next/link";

function PostsList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.schema('gmb_ads').from('annonces').select('*').is("publié", true)
      if (error) console.error(error)
      else setPosts(data)
    }

    fetchPosts()
  }, [])

  const DISPLAY_LIMIT = 4;


  const handleSeeMoreClick = () => {
    router.push(`/posts/`, { state: { posts } });
  };

  return (
    <>
      <div className={styles.postsList}>
        {posts.slice(0, DISPLAY_LIMIT).map((post) => (
            <PostCard key={post.id} {...post} />
        ))}
      </div>
        {posts.length > DISPLAY_LIMIT && (
          <Link 
              href={"/posts"}
              className={`${styles.seeMoreButton} ${ctaStyles.cta} ${ctaStyles.blue}`}
              onClick={handleSeeMoreClick}
          >
            Voir plus
          </Link>
        )}
    </>
  );
}
export default PostsList;