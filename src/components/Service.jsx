import styles from "@/styles/components/Service.module.scss";
import CTA from "./CTA";
import ContactCTA from "./ContactCTA";
import { PHONE, COMMENT } from "./icons";
import Markdown from "react-markdown";

function Service({title, description}) {
  return (
    <div className={`${styles.service}`}>
        <span>{title}</span>
        <pre style={{whiteSpace: "pre-wrap", lineHeight: 1.5}}><Markdown >{description}</Markdown></pre>
        
        <div className={`${styles.reachOut}`}>
          <span>Nous contacter :</span>
          <CTA icon={PHONE} type={'round-blue'}></CTA>
          <ContactCTA />
        </div>
    </div>
  )
}
export default Service