import CTA from "./CTA";
import ContactCTA from "./ContactCTA";
import styles from "@/styles/components/CTA.module.scss";
import { PHONE } from "./icons";

function ReachOut() {
  return (
    <div className={`${styles.ctaContainer}`}>
        <CTA type={"blue"} icon={PHONE}>
            Appeler maintenant
        </CTA>
        <ContactCTA />
    </div>
  )
}
export default ReachOut