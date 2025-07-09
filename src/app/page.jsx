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
          Spécialiste des montages financiers et fiscaux en Loueur meublé non professionnel (LMNP) neuf et de seconde main, le cabinet LMNP Conseils vous accompagne dans votre projet de A à Z. Appelez LMNP Conseils pour échanger avec des experts depuis plus de 20 ans. Appel et consultation patrimoniale et fiscale gratuits et sans engagement. 📍 Accès à toutes les opportunités en LMNP 📦 Programmes neufs et revente ✅ Sélection rigoureuse et conseils d’experts
        </Section>
        <Section id="photos">
          <SectionHeader icon={PICTURE} title={'Photos'} />
          <PhotosCarousel />
        </Section>
        <Section id="services">
          <SectionHeader icon={LIST} title={'Services'} />
          <ServicesList />
        </Section>
        <Section id="posts">
          <SectionHeader icon={POSTS} title={'Posts'} />
          <PostsList />
        </Section>
      </section>
      
    </div>
  );
}
