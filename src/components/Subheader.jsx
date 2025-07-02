"use client"
import styles from "@/styles/components/Subheader.module.scss";
import CTA from "./CTA";
import { PHONE, LEFT_ARROW } from "./icons";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";


function Subheader() {
    const router = useRouter();

  return (
    <div className={`${styles.subheader}`} >
        <Icon icon={LEFT_ARROW} onClick={() => router.back()} className={`${styles.arrow}`} />
        <span className={`${styles.title}`}>LMNP Conseils - Conseils en investissements locatifs</span>
        <CTA type={"blue"} icon={PHONE} >Appeler maintenant</CTA>
    </div>
  )
}
export default Subheader