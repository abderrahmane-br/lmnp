import PostCard from "@/components/PostCard";
import styles from "@/styles/components/PostCard.module.scss";
import Link from "next/link";

const posts = [
  { id: 1, title: "Post 1", /* other props */ },
  { id: 2, title: "Post 2", /* other props */ },
  { id: 3, title: "Post 3", /* other props */ },
];

function PostsList() {
  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id} style={{ textDecoration: "none" }}>
          <PostCard {...post} />
        </Link>
      ))}
    </div>
  );
}
export default PostsList;