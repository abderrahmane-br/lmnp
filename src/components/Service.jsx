import styles from "@/styles/components/Service.module.scss";

function Service({title, description}) {
  return (
    <div className={`${styles.service}`}>
        <span>{title}</span>
        <p>{description}</p>
    </div>
  )
}
export default Service