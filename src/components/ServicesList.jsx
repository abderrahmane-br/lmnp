import styles from "@/styles/components/Service.module.scss";
import Service from "@/components/Service";
import {services} from "../../public/data/services";

function ServicesList() {
      const serviceList = services.map(ser => (
        <Service {...ser} />
    ))

    return (
        <div className={`${styles.servicesList}`}>{serviceList}</div>
    )
}
export default ServicesList