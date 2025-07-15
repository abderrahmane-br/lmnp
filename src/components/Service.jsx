import styles from "@/styles/components/Service.module.scss";
import CTA from "./CTA";
import { PHONE, COMMENT } from "./icons";

function Service({title, description}) {
  return (
    <div className={`${styles.service}`}>
        <span>{title}</span>
        <p>{description}</p>
        <div className={`${styles.reachOut}`}>
          <span>Nous contacter</span>
          <CTA icon={PHONE} type={'round-blue'}></CTA>
          <CTA icon={COMMENT} type={'round-blue'}></CTA>
        </div>
    </div>
  )
}
export default Service