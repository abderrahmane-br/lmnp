import Image from "next/image";

function SectionHeader({icon, title}) {
  return (
    <div>
        {/* <Image /> */}
        <span>{title}</span>
    </div>
  )
}
export default SectionHeader