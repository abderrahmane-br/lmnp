"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/components/Header.module.scss";
import CTA from "./CTA";
import Navbar from "./Navbar";
import { PHONE } from "./icons";
import { COMMENT } from "./icons";
import ContactForm from "./ContactForm";

function Header() {
  const [stuck, setStuck] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const sentinelRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: [1] }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;

    const updatePlaceholder = () => {
      const headerRect = headerRef.current.getBoundingClientRect();
      const carouselElem = document.getElementById("carousel");
      if (carouselElem) {
        const carouselRect = carouselElem.getBoundingClientRect();
        setPlaceholderHeight(headerRect.bottom - carouselRect.bottom);
      } else {
        setPlaceholderHeight(0);
      }
    };

    const resizeObserver = new window.ResizeObserver(updatePlaceholder);
    resizeObserver.observe(headerRef.current);

    // Optionally observe the carousel as well
    const carouselElem = document.getElementById("carousel");
    let carouselObserver;
    if (carouselElem) {
      carouselObserver = new window.ResizeObserver(updatePlaceholder);
      carouselObserver.observe(carouselElem);
    }

    // Initial set
    updatePlaceholder();

    return () => {
      resizeObserver.disconnect();
      if (carouselObserver) carouselObserver.disconnect();
    };
  }, []);


  function handleContact(e) {
     e.preventDefault();
     setShowContact(true);
  }

  return (
    <>
      <div ref={sentinelRef} style={{ height: 1 }} />
      <header
        ref={headerRef}
        className={`${styles.header} ${stuck ? styles.stuck : ""}`}
      >
        <div>
          <span className={`${styles.title}`}>LMNP Conseils - Conseils en investissements locatifs</span>
          <div className={`${styles.ctaContainer}`}>
            <CTA type={"blue"} icon={PHONE}>
              Consultation gratuite
            </CTA>
            <div 
              onClick={(e) => handleContact(e)} 
              style={{display: "flex", alignItems: "stretch"}}>
              <CTA icon={COMMENT}>
                Nous écrire
              </CTA>

            </div>
          </div>
          <Navbar />
        </div>
      </header>

      <div
        className={`${stuck ? styles.stuck : ""} ${styles.placeholder} `}
        style={{ height: placeholderHeight }}
      />

      <ContactForm open={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}

export default Header;