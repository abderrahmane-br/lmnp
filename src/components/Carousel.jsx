"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/Carousel.module.scss";

const images = [
  "/images/background1.png",
  "/images/background2.png",
];

const intervalSeconds = 7;

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, intervalSeconds * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="carousel" className={styles.carousel}>
      {images.map((src, index) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: index === current ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            priority={index === 0}
            width={900}
            height={500}
          />
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            priority={index === 0}
            width={900}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}

export default Carousel;