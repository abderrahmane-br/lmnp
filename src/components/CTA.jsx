import { Icon } from "@iconify/react";
import styles from "@/styles/components/CTA.module.scss"

function CTA({type, icon, children}) {
  return (
    <a href="tel:+334 85 69 64 07" className={`${styles.cta} ${type ? styles[type] : ""}`}>
        <Icon icon={icon} />
        <span>{children}</span>
    </a>
  )
}
export default CTA