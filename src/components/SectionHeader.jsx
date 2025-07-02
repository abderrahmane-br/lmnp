import { Icon } from "@iconify/react";
import styles from "@/styles/components/Section.module.scss"

function SectionHeader({icon, title}) {
  return (
    <div className={`${styles.header}`}>
        <Icon icon={icon} className={`${styles.headerIcon}`} />
        <span>{title}</span>
    </div>
  )
}
export default SectionHeader