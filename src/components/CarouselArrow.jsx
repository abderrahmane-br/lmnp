import { LEFT_ARROW } from "./icons" 
import { Icon } from "@iconify/react"
import styles from "@/styles/components/PostCard.module.scss";

function CarouselArrow({right=false, onClick, className, css}) {
    console.log(css)
    const isDisabled = className && className.includes("slick-disabled");
  return (
        <Icon icon={LEFT_ARROW} className={`${styles.arrow} ${right ? styles.right : ""} ${isDisabled ? styles.disabled : ""}`} onClick={onClick} style={css}/>
  )
}
export default CarouselArrow