import SectionHeader from "./SectionHeader"
import styles from "@/styles/components/Section.module.scss"

function Section({icon, title, children}) {
  return (
    <div className={`${styles.section}`}>
        <SectionHeader icon={icon} title={title} />
        {children}
    </div>
  )
}
export default Section