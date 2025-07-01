import React, { useState } from "react";
import styles from "@/styles/components/ContactForm.module.scss";

export default function ContactForm({ open, onClose }) {
  const [fields, setFields] = useState({
    nom: "",
    prenom: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [focus, setFocus] = useState({});
  const [errors, setErrors] = useState({});

  if (!open) return null;

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleFocus = (e) => setFocus({ ...focus, [e.target.name]: true });
  const handleBlur = (e) => setFocus({ ...focus, [e.target.name]: false });

  const validate = () => {
    const errs = {};
    if (!fields.nom.trim()) errs.nom = "Le nom est requis.";
    if (!fields.prenom.trim()) errs.prenom = "Le prénom est requis.";
    if (!fields.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
      errs.email = "Adresse e-mail invalide.";
    if (!fields.mobile.match(/^\+?\d{8,15}$/))
      errs.mobile = "Numéro de mobile invalide.";
    if (!fields.message.trim()) errs.message = "Le message est requis.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {nom, prenom, message, mobile} = e.target;

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    fetch("https://formsubmit.co/ajax/contact@impots-reduc.fr", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "Nom": nom.value,
            "Prénom": prenom.value,
            "Message": message.value,
            "Numéro de téléphone": mobile.value
        })
    })
    alert("Message envoyé !");
    setFields({ nom: "", prenom: "", email: "", mobile: "", message: "" });
    onClose && onClose();
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <div className={styles.header}>
          <span>Nous contacter</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Fermer">
            &times;
          </button>
        </div>
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <input type="hidden" name="_subject" value="LMNP Conseil: Nouveau message!"></input>
          <div>
            <label className={styles.label} htmlFor="nom">Nom</label>
            <input
              className={`${styles.input} ${focus.nom ? styles.inputFocus : ""}`}
              type="text"
              id="nom"
              name="nom"
              value={fields.nom}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {errors.nom && <div className={styles.error}>{errors.nom}</div>}
          </div>
          <div>
            <label className={styles.label} htmlFor="prenom">Prénom</label>
            <input
              className={`${styles.input} ${focus.prenom ? styles.inputFocus : ""}`}
              type="text"
              id="prenom"
              name="prenom"
              value={fields.prenom}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {errors.prenom && <div className={styles.error}>{errors.prenom}</div>}
          </div>
          <div>
            <label className={styles.label} htmlFor="email">E-mail</label>
            <input
              className={`${styles.input} ${focus.email ? styles.inputFocus : ""}`}
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="off"
            />
            {/* <div className={styles.helper}>
              * Veuillez fournir une adresse e-mail valide.
            </div> */}
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>
          <div>
            <label className={styles.label} htmlFor="mobile">N° mobile</label>
            <input
              className={`${styles.input} ${focus.mobile ? styles.inputFocus : ""}`}
              type="tel"
              id="mobile"
              name="mobile"
              value={fields.mobile}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="off"
              placeholder=""
            />
            {errors.mobile && <div className={styles.error}>{errors.mobile}</div>}
          </div>
          <div>
            <label className={styles.label} htmlFor="message">
              En quoi pouvons-nous vous aider ?
            </label>
            <textarea
              className={`${styles.textarea} ${focus.message ? styles.inputFocus : ""}`}
              id="message"
              name="message"
              value={fields.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={1000}
              placeholder="Je souhaiterais en savoir plus sur vos disponibilités et tarifs pour les services"
            />
            <div className={styles.counter}>
              {fields.message.length}/1,000
            </div>
            {errors.message && <div className={styles.error}>{errors.message}</div>}
          </div>
          <button type="submit" className={styles.submitBtn}>
            Envoyer
          </button>
        </form>
        {/* <div className={styles.footer}>
          Évitez d'inclure des informations sensibles que vous ne souhaitez pas partager avec cet établissement.
        </div> */}
      </div>
    </>
  );
}