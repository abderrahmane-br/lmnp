import Image from "next/image";
import Logo from "../../public/images/logo.webp";
import styles from "@/styles/components/PostCard.module.scss"
import { NEWSPAPER } from "./icons";
import { Icon } from "@iconify/react";


function PostCardHeader({header ='LMNP Conseils - Conseils en investissements locatifs', date = '06-2025'}) {
  return (
    <div className={`${styles.postCardHeader}`}>
        {/* <Image src={Logo} alt="Logo" className={`${styles.avatar}`} /> */}
        <div>
          <div>{header}</div>
          {/* {header ? <h2>{header}</h2> : <div>LMNP Conseils - Conseils en investissements locatifs</div>} */}
          {/* <div>{header ? {header} : "LMNP Conseils - Conseils en investissements locatifs"}</div> */}
          <span className={`${styles.date}`}>{date}</span>
        </div>
        <Icon icon={NEWSPAPER} className={`${styles.icon}`}/>
    </div>
  )
}
export default PostCardHeader