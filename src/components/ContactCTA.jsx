"use client"
import { useState } from 'react';
import CTA from "./CTA";
import ContactForm from "./ContactForm";
import { COMMENT } from "./icons";

function ContactCTA() {
  const [showContact, setShowContact] = useState(false);

  function handleContact(e) {
    e.preventDefault();
    setShowContact(true);
  }

  return (
    <>
      <div onClick={handleContact} >
        <CTA icon={COMMENT}>
          Nous Contacter
        </CTA>
      </div>
      <ContactForm open={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}

export default ContactCTA;