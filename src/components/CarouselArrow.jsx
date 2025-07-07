import { LEFT_ARROW } from "./icons" 
import { Icon } from "@iconify/react"
import styles from "@/styles/components/PostCard.module.scss";

function CarouselArrow({right=false, onClick, className}) {
    const isDisabled = className && className.includes("slick-disabled");
  return (
    <div>
        <Icon icon={LEFT_ARROW} className={`${styles.arrow} ${right ? styles.right : ""} ${isDisabled ? styles.disabled : ""}`} onClick={onClick}/>
    </div>
  )
}
export default CarouselArrow