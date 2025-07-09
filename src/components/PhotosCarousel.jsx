"use client"
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import CarouselArrow from "./CarouselArrow";
import Image from "next/image";
import styles from "@/styles/components/PhotosCarousel.module.scss"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhotosCarousel() {
  const [photos, setPhotos] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true)
      const { data, error } = await supabase.schema('gmb_ads').from('annonces').select('id, img_url').is("publié", false)
      if (error) {
        console.error(error)
      } else {
        setPhotos(data)
        setCurrentSlide(0)
      }
      setIsLoading(false)
    }

    fetchPhotos()
  }, [])

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    // arrows: true,
    // centerMode: true,
    centerPadding: '0px',
    initialSlide: currentSlide,
    nextArrow: <CarouselArrow right={true} css={{left: "98%"}} />,
    prevArrow: <CarouselArrow css={{left: "-1%"}} />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            swipeToSlide: true,
            touchThreshold: 10,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 565,
        settings: {
            slidesToShow: 1,
            swipeToSlide: true,
            touchThreshold: 10,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false
        }
      }
    ]
  }

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <>
      <div className={`${styles.carousel}`}>
        <Slider {...sliderSettings} key={`slider-${photos.length}`}>
          {photos.map((post) => (
            <div key={post.id} >
              <Image src={post.img_url} width={400} height={400} className={`${styles.photo}`}/>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default PhotosCarousel;