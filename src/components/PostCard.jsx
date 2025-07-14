import PostCardHeader from "./PostCardHeader"
import Image from "next/image"
import styles from "@/styles/components/PostCard.module.scss"
import { useRouter } from "next/navigation";
import ReachOut from "./ReachOut";

function PostCard(post) {
  const router = useRouter();
  const handlePostClick = (post) => {
    router.push(`/posts/${post.id}`, { state: { post } });
};

  return (
    <div className={`${styles.postCard}`} onClick={() => handlePostClick(post)}>
        <PostCardHeader />
        <Image src={post.img_url} alt="illustration" className={`${styles.illustr}`} width={300} height={100}/>

        {/* <img src={post.img_url} alt="illustration" className={`${styles.illustr}`} /> */}
        <div className={`${styles.postContainer}`}>
          <span className={`${styles.post}`}>{post.contenu}</span>
          <span className={`${styles.more}`}>en savoir plus</span>
        </div>
        <ReachOut />
    </div>
  )
}
export default PostCard