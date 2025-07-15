"use client" // This directive is important for client-side functionality
import { useState } from 'react'; // Import useState
import styles from '@/styles/components/Footer.module.scss'; // Assuming this path
import { Icon } from "@iconify/react"; // Import Icon from Iconify
import { PHONE, COMMENT } from './icons'; // PHONE and COMMENT are icon names
import ContactForm from './ContactForm'; // Import the ContactForm component

function Footer() {
  const [showContact, setShowContact] = useState(false); // State to control ContactForm visibility

  // Function to handle opening the contact form
  const handleMessageClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowContact(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>LMNP Conseils</h3>
          <p>Spécialiste en investissements locatifs meublés (LMNP) depuis plus de 20 ans. Nous vous accompagnons de A à Z dans votre projet de location meublée non professionnelle.</p>
        </div>

        <div className={styles.section}>
          <h3>Contactez-nous</h3>
          <p>
            <a href="tel:+33123456789"> {/* Replace with your actual phone number */}
              <Icon icon={PHONE} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Appelez-nous
            </a>
          </p>
          <p>
            {/* Replaced the mailto link with a clickable element that opens the form */}
            <a href="#" onClick={handleMessageClick} style={{ cursor: 'pointer' }}>
              <Icon icon={COMMENT} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Envoyez un message
            </a>
          </p>
          {/* <p style={{ marginTop: '1rem' }}>123 Rue de l'Exemple, 75001 Paris, France</p> */}
        </div>

        <div className={styles.section}>
          <h3>Liens rapides</h3>
          <p><a href="#a-propos">À propos</a></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#posts">Actualités</a></p>
          <p><a href="/mentions-legales">Mentions Légales</a></p> {/* Added new link */}
          {/* Add more links as needed */}
        </div>
        {/* The "Suivez-nous" section has been removed */}
      </div>

      <div className={styles.bottomBar}>
        &copy; {new Date().getFullYear()} LMNP Conseils. Tous droits réservés.
      </div>

      {/* ContactForm component, shown when showContact is true */}
      <ContactForm open={showContact} onClose={() => setShowContact(false)} />
    </footer>
  );
}

export default Footer;
