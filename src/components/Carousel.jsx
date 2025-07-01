"use client"
import { useEffect, useState } from "react";
import styles from "@/styles/components/Carousel.module.scss";

const images = [
  "/images/background1.png",
  "/images/background2.png",
];

const intervalSeconds = 7; // Change image every 3 seconds

function Carousel() {
  const [current, setCurrent] = useState(0);

  // Preload the next image
  useEffect(() => {
    const nextIndex = (current + 1) % images.length;
    const img = new window.Image();
    img.src = images[nextIndex];
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, intervalSeconds * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="carousel"
      className={styles.carousel}
      style={{
        backgroundImage: `url(${images[current]})`,
        transition: "background-image 0.5s ease-in-out",
      }}
    >
    </div>
  );
}

export default Carousel;