import styles from "@/styles/components/Service.module.scss";
import ReachOut from "./ReachOut";

function Service({title, description}) {
  return (
    <div className={`${styles.service}`}>
        <span>{title}</span>
        <p>{description}</p>
        <ReachOut />
    </div>
  )
}
export default Service