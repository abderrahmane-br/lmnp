import PostCard from "@/components/PostCard";
import styles from "@/styles/components/PostCard.module.scss"


function PostsList() {
  return (
    <div className={`${styles.postsList}`}>
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
  )
}
export default PostsList