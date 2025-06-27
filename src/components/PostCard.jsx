import PostCardHeader from "./PostCardHeader"
import Image from "next/image"
import styles from "@/styles/components/PostCard.module.scss"
import Illustration from "../../public/images/annonce_13.png"

function PostCard({date, image, text}) {
  return (
    <div className={`${styles.postCard}`}>
        <PostCardHeader />
        <Image src={Illustration} alt="illustration" className={`${styles.illustr}`} />
        <div className={`${styles.postContainer}`}>
          <span className={`${styles.post}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, error doloremque vitae nostrum nisi quisquam consequuntur nemo officia expedita vero, dolorum in cupiditate accusamus perspiciatis? Quo, neque omnis. Modi, soluta.
          Nisi inventore obcaecati, animi totam quibusdam sequi dolore quas asperiores magni atque, earum optio distinctio dicta voluptatem ducimus possimus tempore repellendus facilis sed cupiditate saepe illo molestias aliquid! Excepturi, soluta!
          Mollitia recusandae vero reprehenderit, odit vitae iure aperiam fugiat doloremque ipsam aliquam incidunt, maxime nemo provident, unde voluptatem consequatur exercitationem minus. Excepturi est, esse sequi sunt libero ratione modi! Reprehenderit.
          Aspernatur odio impedit tenetur rerum reprehenderit consequuntur nam, quasi aut hic voluptas sequi dolorem libero, nihil obcaecati labore perspiciatis. Libero culpa itaque veritatis placeat magni accusantium dolore sapiente sed sunt?
          Id quos vel iste, at voluptatibus dolores quasi, distinctio iusto odit impedit adipisci officiis quae fugiat ea recusandae architecto! Maiores autem vitae incidunt delectus similique beatae dolorum, voluptate repellat adipisci.
          Possimus esse tenetur id natus, provident eaque perspiciatis. Ullam omnis quam provident quia, aperiam molestias accusamus facere suscipit minus, vero nobis odio, excepturi natus. Voluptas doloribus numquam veniam quo dignissimos!
          Quis numquam neque quaerat sunt totam recusandae sapiente dolor, temporibus cumque blanditiis sed aperiam voluptatibus corporis? Tempore voluptatibus adipisci nisi nihil! Hic animi ea illo illum ratione nostrum. Ratione, aliquid!
          Corrupti molestias atque provident autem iure ratione illum eum velit, pariatur distinctio, nulla quasi quo odit reiciendis consectetur, odio magni rerum quibusdam ipsa voluptate. Architecto vel totam maxime accusantium tempore!
          Modi dolor sapiente fugiat beatae cum minima ab nihil repellat ratione possimus. Accusamus eum vitae vero cupiditate. Aspernatur placeat est in accusantium odio, quia corrupti amet distinctio optio maiores! Explicabo.
          Quidem eligendi porro officiis, neque molestiae suscipit soluta vitae quibusdam libero labore, quia similique! Voluptas, aperiam! Voluptatibus quis necessitatibus, consequuntur voluptate ex nobis iure similique nemo nisi eaque assumenda itaque!
          Maiores atque dolores magnam, laudantium cumque nisi commodi quibusdam eligendi cum quod numquam animi rem facilis tenetur adipisci exercitationem voluptatum magni itaque ipsam impedit? Qui odio ratione quaerat molestiae magni.
          Quidem, laboriosam? Veniam sequi tempore adipisci, animi commodi aspernatur dolorem nam laudantium maiores ab iusto voluptas cupiditate vel recusandae illum quia repudiandae eum placeat architecto iure suscipit voluptates expedita excepturi.
          Dignissimos voluptates, cum rerum eveniet dolor corporis molestias soluta quos et aliquam nihil veniam temporibus harum totam exercitationem sequi voluptatum neque. Ut aliquid dicta aliquam cum mollitia consequuntur, id laborum!
          Expedita totam molestiae laudantium at quasi, rem, necessitatibus et iusto, voluptatem sunt illo accusamus tenetur nulla repellendus impedit officia doloribus vero maxime atque cum repudiandae ratione! Quos dignissimos laudantium maxime.
          Perferendis exercitationem quo quia fugiat quos ullam reiciendis doloremque ut ex officiis, quis voluptatem animi quibusdam, dolorum impedit veniam enim quisquam harum error fuga pariatur. Sed esse inventore adipisci. Magni.
          Ut tenetur harum numquam dolore consectetur molestias tempore consequatur voluptatibus repudiandae. Quos hic, laborum, ut iste, aut quaerat accusantium odit officiis enim quia distinctio doloremque consectetur impedit dolorum repudiandae voluptas?
          Doloribus omnis unde, fugiat, voluptatibus ad dicta sed voluptas non officia, repudiandae iure nostrum. Esse hic delectus reprehenderit recusandae, eos nesciunt illo explicabo assumenda quae exercitationem. Aliquam, dolor non. Ipsam.
          Optio quaerat corrupti aliquid accusamus ipsum aspernatur expedita iure temporibus pariatur, voluptas tenetur nulla incidunt esse, exercitationem quod saepe perferendis nam quibusdam? Dignissimos, distinctio repellendus provident blanditiis quasi mollitia perferendis.
          Quia, exercitationem numquam iure doloremque repellat voluptates ducimus molestiae minus distinctio doloribus, architecto suscipit eaque totam aliquid, ea debitis eligendi. Velit, adipisci consequatur. Sapiente facere amet tempore excepturi necessitatibus? Explicabo!
          Ut magnam sit optio quia consectetur dolorum. Libero nam ipsa ex facilis debitis pariatur laborum labore provident similique esse, corporis, omnis accusantium inventore fuga. Est repellendus error distinctio quia facere.</span>
          <a href="">more</a>
        </div>
    </div>
  )
}
export default PostCard