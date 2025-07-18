"use client"
import PostCard from "@/components/PostCard";
import styles from "@/styles/components/PostCard.module.scss";
import ctaStyles from "@/styles/components/CTA.module.scss";
import { supabase } from '../lib/supabaseClient'
import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import Link from "next/link";
import CarouselArrow from "./CarouselArrow";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PostsList() {
  const [posts, setPosts] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter();
  const DISPLAY_LIMIT = 4;

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      const { data, error } = await supabase.schema('gmb_ads').from('annonces').select('*').is("publie", false)
      if (error) {
        console.error(error)
      } else {
        setPosts(data)
        setCurrentSlide(0)
      }
      setIsLoading(false)
    }

    fetchPosts()
  }, [])

  const handleSeeMoreClick = () => {
    router.push(`/posts/`, { state: { posts } });
  };

  const handleBeforeChange = (current, next) => {
    // Prevent the slide and redirect immediately if trying to go beyond the limit
    // if (next >=  (DISPLAY_LIMIT - sliderSettings.slidesToShow)) {
    //   // handleSeeMoreClick();
    //   return false;
    // }
    // setCurrentSlide(next);
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    arrows: true,
    // centerMode: true,
    centerPadding: '0px',
    initialSlide: currentSlide,
    nextArrow: <CarouselArrow right={true} />,
    prevArrow: <CarouselArrow  />,
    beforeChange: (current, next) => {
      if (next >= (DISPLAY_LIMIT - sliderSettings.slidesToShow - 0.2)) {
        return false;
      }
      // setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.7,
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        swipeToSlide: true,
        touchThreshold: 10,
        slidesToScroll: 1,
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
      <div className={styles.postsCarousel}>
        <Slider {...sliderSettings} key={`slider-${posts.length}`}>
          {posts.slice(0, DISPLAY_LIMIT).map((post) => (
            <div key={post.id} className={styles.carouselSlide}>
              <PostCard {...post} />
            </div>
          ))}
        </Slider>
      </div>
      {posts.length > DISPLAY_LIMIT && (
        <Link 
          href={"/posts"}
          className={`${styles.seeMoreButton} ${ctaStyles.cta} ${ctaStyles.blue}`}
          onClick={handleSeeMoreClick}
        >
          Toutes les actualités 
        </Link>
      )}
    </>
  );
}

export default PostsList;