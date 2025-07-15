import Section from "@/components/Section";
import styles from "@/styles/components/main.module.scss";
import PostsList from "@/components/PostsList";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import ServicesList from "@/components/ServicesList";
import SectionHeader from "@/components/SectionHeader"
import PhotosCarousel from "@/components/PhotosCarousel";
import { PICTURE, LIST, POSTS, STORE } from "@/components/icons";



export default function Home() {
  return (
    <div>
      <Carousel />
      <div id="a-propos"></div>
      <Header />
      <section className={`${styles.main}`}>
        <Section >
          <SectionHeader icon={STORE} title={'À propos'} />
          <div className={`${styles.preWrap}`}>{`✅ Spécialiste en `}<b>investissements locatifs meublés (LMNP)</b>{` depuis plus de 20 ans.

Notre cabinet vous accompagne `}<b>de A à Z</b>{` dans votre projet de `}<b>location meublée non professionnelle, qu'il s'agisse de biens neufs ou en revente</b>{`.

📞 `}<b>Appel et diagnostic patrimonial 100 % gratuit et sans engagement</b>{`

---

🔎 Ce que nous proposons :
- Étude personnalisée de votre situation fiscale et patrimoniale
- Accès à des programmes rigoureusement sélectionnés
- Optimisation de la `}<b>rentabilité locative et fiscale</b>{`
- Accompagnement complet jusqu'à la mise en location

---

💡 Nos clients choisissent LMNP Conseils pour :
- Notre `}<b>expertise en montages financiers et fiscaux</b>{`
- Une `}<b>sélection pointue des meilleures opportunités LMNP</b>{`
- Des conseils impartiaux et orientés `}<b>rentabilité à long terme</b>{`

➡ `}<b>Appelez dès maintenant</b>{` pour bénéficier d'un premier échange avec un expert.`}
          </div>
        </Section>
        {/* <Section id="photos">
          <SectionHeader icon={PICTURE} title={'Photos'} />
          <PhotosCarousel />
        </Section> */}
        <Section id="services">
          <SectionHeader icon={LIST} title={'Services'} />
          <ServicesList />
        </Section>
        <Section id="posts">
          <SectionHeader icon={POSTS} title={'Actualités'} />
          <PostsList />
        </Section>
      </section>
      
    </div>
  );
}
