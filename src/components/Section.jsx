import SectionHeader from "./SectionHeader"
import styles from "@/styles/components/Section.module.scss"

function Section({id="" ,icon, title, children}) {
  return (
    <div className={`${styles.section}`} id={id}>
        <SectionHeader icon={icon} title={title} />
        {children}
    </div>
  )
}
export default Section