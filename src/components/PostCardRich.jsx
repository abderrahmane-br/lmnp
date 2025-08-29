import PostCardHeader from "./PostCardHeader"
import Image from "next/image"
import styles from "@/styles/components/PostCard.module.scss"
import { useRouter } from "next/navigation";
import ReachOut from "./ReachOut";
import Markdown from "react-markdown";
import FallbackImg from "../../public/images/background2.png"

function PostCardRich(post) {
  const router = useRouter();
  const handlePostClick = (e, post) => {
    e.preventDefault();
    router.push(`/actualites/${post.url_slug}`, { state: { post } });
};

  return (
    <article className={`${styles.postCard}`} onClick={(e) => handlePostClick(e, post)}>
        <PostCardHeader date={post.date_prevue.slice(0, 10)} header={post.titre}/>
        <Image src={post.img_url ? post.img_url : FallbackImg} alt="illustration" className={`${styles.illustr}`} width={300} height={100}/>

        {/* <img src={post.img_url ? post.img_url : FallbackImg} alt="illustration" className={`${styles.illustr}`} /> */}
        <div className={`${styles.postContainer}`}>
          <div className={`${styles.post}`}>
            {/* <h2>{post.titre}</h2> */}
            <span><Markdown>{post.introduction}</Markdown></span>
            {
                post.contenu.map(el => (
                    <>
                        <h3>{el.heading}</h3>
                        <p><Markdown>{el.paragraph}</Markdown></p>
                    </>
                ))
            }

            <span><Markdown>{post.conclusion}</Markdown></span>
          </div>
          <a href={`https://lmnp-conseils.immo/actualites/${post.url_slug}`} className={`${styles.more}`} onClick={(e) => handlePostClick(e, post)}>en savoir plus</a>
        </div>
        <ReachOut />
    </article>
  )
}
export default PostCardRich