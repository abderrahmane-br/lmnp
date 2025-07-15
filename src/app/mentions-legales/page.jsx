import styles from '@/styles/components/MentionsLegales.module.scss';
import Subheader from '@/components/Subheader';

function MentionsLegales() {
  return (
    <>
      <Subheader />
      <main className={styles.container}>
        <h1 className={styles.title}>Mentions Légales</h1>
        <p className={styles.date}>En vigueur au 01/01/2020</p>
        
        <div className={styles.article}>
          <p>
            Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 
            pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance 
            des Utilisateurs du site LMNP Conseils les présentes mentions légales.
          </p>
          <p>
            La connexion et la navigation sur le site LMNP Conseils par l'Utilisateur implique acceptation 
            intégrale et sans réserve des présentes mentions légales.
          </p>
          <p>
            Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».
          </p>
        </div>

        <div className={styles.article}>
          <h2>ARTICLE 1 : L'éditeur</h2>
          <p>
            L'édition et la direction de la publication du site LMNP Conseils est assurée par la société 
            SASU LEADS AND CO – Siren : 889460374 – domiciliée au 23 RUE CREPET, 69007 LYON, dont le 
            numéro de téléphone est le 04.85.69.64.07, et l'adresse e-mail est contact@impots-reduc.fr.
          </p>
        </div>

        <div className={styles.article}>
          <h2>ARTICLE 2 : L'hébergeur</h2>
          <p>
            L'hébergeur du site LMNP Conseils est la société OVH, dont le siège social est situé au 
            2 rue Kellermann, 59100 Roubaix, avec le numéro de téléphone : 1070.
          </p>
        </div>

        <div className={styles.article}>
          <h2>ARTICLE 3 : Accès au site</h2>
          <p>
            Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption 
            programmée ou non et pouvant découler d'une nécessité de maintenance.
          </p>
          <p>
            En cas de modification, interruption ou suspension des services, le site LMNP Conseils ne 
            saurait être tenu responsable.
          </p>
        </div>

        <div className={styles.article}>
          <h2>ARTICLE 4 : Collecte des données</h2>
          <p>
            Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans 
            le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à 
            l'informatique, aux fichiers et aux libertés. Le site est soumis à la Réglementation générale 
            sur la protection des données aux nouvelles dispositions européennes relatives à la RGPD en 
            vigueur depuis le 25 mai 2018.
          </p>
          <p>
            Les données personnelles collectées sur le site et/ou par téléphone sont transmises exclusivement 
            aux Partenaires de LMNP Conseils, dans le cadre de sa mission de mise en relation gratuite et 
            sans engagement.
          </p>
          <p>
            Dans le cadre de notre charte Qualité : comme convenu avec l'Utilisateur, ses données personnelles 
            qui ont été collectées par voie électronique, postale ou par téléphone, sont transmises à un seul 
            Partenaire du site LMNP Conseils, et ce de façon exclusive.
          </p>
          <p>
            Le Partenaire n'a en aucun cas le droit de transmettre les données personnelles de l'Utilisateur 
            à un tiers, sauf s'il obtient l'accord express de l'Utilisateur. Cette mise en relation est faite 
            d'un commun accord avec l'Utilisateur, exprimé par un support numérique ou par téléphone.
          </p>
          <p>
            En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose 
            d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles.
          </p>
          <p>
            L'Utilisateur exerce ce droit par e-mail, qui doit porter la mention « Données personnelles » 
            à l'adresse suivante : contact@impots-reduc.fr
          </p>
        </div>

        <div className={styles.article}>
          <h2>ARTICLE 5 : Cookies</h2>
          <p>
            L'Utilisateur est informé que lors de ses visites sur le site, un cookie peut s'installer 
            automatiquement sur son logiciel de navigation. En naviguant sur le site, il les accepte.
          </p>
          <p>
            Un cookie est un élément qui ne permet pas d'identifier l'Utilisateur mais sert à enregistrer 
            des informations relatives à la navigation de celui-ci sur le site Internet.
          </p>
          <p>
            L'Utilisateur pourra désactiver ce cookie par l'intermédiaire des paramètres figurant au sein 
            de son logiciel de navigation.
          </p>
        </div>

        <div className={styles.article}>
          <h2>ARTICLE 6 : Propriété intellectuelle</h2>
          <p>
            Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie 
            du site LMNP Conseils, sans autorisation de l'Editeur est prohibée et pourra entraîner des 
            actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété 
            intellectuelle et le Code civil.
          </p>
        </div>
      </main>
    </>
  );
}

export default MentionsLegales;