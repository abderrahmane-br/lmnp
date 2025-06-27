"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/components/Header.module.scss";
import CTA from "./CTA";

function Header() {
  const [stuck, setStuck] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: [1] }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} style={{ height: 1 }} />
      <header className={`${styles.header} ${stuck ? styles.stuck : ""}`}>
        <div>
            <span>LMNP Conseils - Conseils en investissements locatifs</span>
            <CTA />
        </div>
      </header>
      <div className={`${styles.placeholder} ${stuck ? styles.stuck : ""}`}>sticky header</div>
    </>
  );
}

export default Header;