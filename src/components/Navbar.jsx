"use client"
import { useState, useEffect } from "react";
import styles from "@/styles/components/Navbar.module.scss";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { label: "À propos", id: "a-propos" },
    // { label: "Photos", id: "photos" },
    { label: "Services", id: "services" },
    { label: "Actualités", id: "posts" },
  ];

  // Scroll tracking effect
  useEffect(() => {
    let timeoutId = null;

    function handleScroll() {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const middle = window.innerHeight / 2 - 80;
        const offsets = navItems.map((item) => {
          const el = document.getElementById(item.id);
          return el ? el.getBoundingClientRect().top : Infinity;
        });

        let active = 0;
        for (let i = 0; i < offsets.length; i++) {
          if (offsets[i] <= middle) {
            active = i;
          }
        }
        setActiveIndex(active);
      }, 50); // 50ms debounce
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  function handleClick(index) {
    setActiveIndex(index);
    const section = document.getElementById(navItems[index].id);
    if (section) {
      let yOffset = -80; // Adjust this value to match your navbar height

      if (index == 0)
        yOffset = -300;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <div className={`${styles.navbar} blue`}>
      {navItems.map((item, idx) => (
        <span
          key={item.id}
          className={`${idx === activeIndex ? styles.active : ""}`}
          onClick={() => handleClick(idx)}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}

export default Navbar;