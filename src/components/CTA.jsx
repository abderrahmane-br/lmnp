import { Icon } from "@iconify/react";
import { PHONE } from "./icons";
import styles from "@/styles/components/CTA.module.scss";

function CTA({type}) {
  return (
    <a href="tel:+334 85 69 64 07" classname={`${styles.cta} ${type ? type : ""}`}>
        <Icon icon={PHONE} />
        <span>Appeler maintenant</span>
    </a>
  )
}
export default CTA