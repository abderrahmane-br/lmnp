import styles from '@/styles/components/MentionsLegales.module.scss';
import Subheader from '@/components/Subheader';

export const metadata = {
  title: 'Mentions légales | LMNP Conseils',
  description:
    "Mentions légales de LMNP Conseils : identité de l’éditeur, hébergeur, propriété intellectuelle, données personnelles (RGPD) et contact.",
  robots: 'index, follow',
  alternates: { canonical: 'https://lmnp-conseils.immo/mentions-legales' }
};

export default function MentionsLegales() {
  const titleStyle = { color: '#d4a017' }; // accent discret

  return (
    <>
      <Subheader />
      <main className={styles.container}>
        <h1 className={styles.title}>Mentions légales</h1>
        <p className={styles.date}>Dernière mise à jour : août 2025</p>

        {/* Intro LCEN */}
        <div className={styles.article}>
          <p>
            Bienvenue sur <strong>LMNP Conseils</strong>, site d’information et de conseils dédiés au
            statut de Loueur Meublé Non Professionnel (LMNP). Les informations ci‑après sont fournies
            conformément à la loi n°2004‑575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN).
            Cette page présente l’identité de l’éditeur, les informations d’hébergement, la protection des données
            et les règles d’utilisation du site.
          </p>
          <p>
            Pour toute demande, merci d’utiliser le <a href="#contact-form">formulaire de contact</a> ci‑dessous.
          </p>
        </div>

        {/* Éditeur */}
        <div className={styles.article}>
          <h2 style={titleStyle}>1. Éditeur du site</h2>
          <p>
            Le site est édité par <strong>LMNP Conseils</strong>, domicilié au{' '}
            <strong>8 rue Jean Gay, 69007 Lyon, France</strong>. 
          </p>
        </div>

        {/* Responsable de publication */}
        <div className={styles.article}>
          <h2 style={titleStyle}>2. Responsable de la publication</h2>
          <p>
            <strong>A. Djaballah</strong>, en qualité d’éditeur du site.
          </p>
        </div>

        {/* Hébergeur */}
        <div className={styles.article}>
          <h2 style={titleStyle}>3. Hébergeur</h2>
          <p>
            OVHcloud – 2 rue Kellermann, 59100 Roubaix, France. Site :{' '}
            <a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer">
              ovhcloud.com
            </a>
          </p>
        </div>

        {/* Accès */}
        <div className={styles.article}>
          <h2 style={titleStyle}>4. Accès au site</h2>
          <p>
            Accès 7j/7 et 24h/24 (hors maintenance ou force majeure). En cas d’interruption temporaire,
            la responsabilité de LMNP Conseils ne saurait être engagée.
          </p>
        </div>

        {/* Données personnelles (RGPD) */}
        <div className={styles.article}>
          <h2 style={titleStyle}>5. Données personnelles</h2>
          <p>
            Les données transmises via nos formulaires (nom, email, message) sont utilisées uniquement pour
            répondre à votre demande et ne sont pas cédées à des tiers sans votre consentement. Le traitement
            s’effectue conformément au <strong>Règlement (UE) 2016/679 (RGPD)</strong> et à la
            <strong> loi n°78‑17 modifiée “Informatique et Libertés”</strong>.
          </p>
          <p>
            Vos droits (accès, rectification, suppression) peuvent être exercés via le{' '}
            <a href="#contact-form">formulaire de contact</a>. Pour plus de détails, consultez notre
            page <a href="/politique-confidentialite">Politique de confidentialité</a>.
          </p>
        </div>

        {/* Cookies (récapitulatif minimal) */}
        <div className={styles.article}>
          <h2 style={titleStyle}>6. Cookies</h2>
          <p>
            Des cookies techniques et, le cas échéant, de mesure d’audience peuvent être déposés pour assurer
            le bon fonctionnement du site et améliorer l’expérience. Vous pouvez gérer vos préférences à tout
            moment depuis votre navigateur et, si disponible, via notre gestionnaire de consentement.
          </p>
          <p>
            En savoir plus (finalités, durée, gestion) : <a href="/politique-confidentialite#cookies">Politique de confidentialité – Cookies</a>.
            {/* Si vous avez une CMP, remplacez par un lien qui ouvre le panneau : <a href="#" onClick={() => window.__cmp?.('showConsentTool')}>Gérer mes cookies</a> */}
          </p>
        </div>

        {/* Propriété intellectuelle */}
        <div className={styles.article}>
          <h2 style={titleStyle}>7. Propriété intellectuelle</h2>
          <p>
            Les contenus du site (textes, visuels, logos) sont protégés par la législation applicable.
            Toute reproduction, diffusion ou modification, totale ou partielle, sans autorisation écrite,
            est interdite.
          </p>
        </div>

        {/* Contact (mailto, simple) */}
        <div className={styles.article}>
          <h2 id="contact-form" style={titleStyle}>Nous contacter</h2>
          <form
            className={styles.contactForm}
            method="post"
            action="mailto:contact@lmnp-conseils.immo"
            encType="text/plain"
          >
            <label>
              Nom :
              <input type="text" name="Nom" required />
            </label>
            <label>
              Email :
              <input type="email" name="Email" required />
            </label>
            <label>
              Message :
              <textarea name="Message" required />
            </label>
            <button type="submit">Envoyer</button>
            <p className={styles.note}>
              Si votre client mail ne s’ouvre pas, écrivez‑nous à <strong>contact@lmnp-conseils.immo</strong>.
            </p>
          </form>
        </div>

        {/* JSON-LD complet : WebSite -> Person -> LegalWebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://lmnp-conseils.immo/#website",
                  "url": "https://lmnp-conseils.immo/",
                  "name": "LMNP Conseils",
                  "inLanguage": "fr-FR",
                  "publisher": { "@id": "https://lmnp-conseils.immo/#person" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://lmnp-conseils.immo/recherche?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://lmnp-conseils.immo/#person",
                  "name": "A. Djaballah",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "8 rue Jean Gay",
                    "postalCode": "69007",
                    "addressLocality": "Lyon",
                    "addressCountry": "FR"
                  }
                },
                {
                  "@type": "LegalWebPage",
                  "@id": "https://lmnp-conseils.immo/mentions-legales/#webpage",
                  "url": "https://lmnp-conseils.immo/mentions-legales",
                  "name": "Mentions légales | LMNP Conseils",
                  "isPartOf": { "@id": "https://lmnp-conseils.immo/#website" },
                  "inLanguage": "fr-FR",
                  "about": "Informations légales, éditeur, hébergement, données personnelles (RGPD), cookies et conditions d’utilisation du site LMNP Conseils.",
                  "dateModified": "2025-08-13",
                  "publisher": { "@id": "https://lmnp-conseils.immo/#person" },
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://lmnp-conseils.immo/" },
                      { "@type": "ListItem", "position": 2, "name": "Mentions légales", "item": "https://lmnp-conseils.immo/mentions-legales" }
                    ]
                  }
                }
              ]
            })
          }}
        />
      </main>
    </>
  );
}
