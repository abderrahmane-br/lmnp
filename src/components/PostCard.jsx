import PostCardHeader from "./PostCardHeader"
import Image from "next/image"
import styles from "@/styles/components/PostCard.module.scss"
import { useRouter } from "next/navigation";
import Illustration from "../../public/images/annonce_13.png"

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
          <a href="">more</a>
        </div>
    </div>
  )
}
export default PostCard