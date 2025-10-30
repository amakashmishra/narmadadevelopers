import React from "react";
// import Heading from "../../common/Heading";`
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";

import Images1 from "../../../assets/Icons/Banner2.jpeg";
import Images2 from "../../../assets/Icons/Banner1.jpeg";
import Images3 from "../../../assets/Icons/Banner.jpeg";

const images = [Images1, Images2, Images3];

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop
        className="hero-slider"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <img src={img} alt={`Slide ${index + 1}`} className="hero-img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Over the Slider */}
      {/* <div className="hero-content">
        <Heading
          title="Search Your Next Home"
          subtitle="Find new & featured property located in your local city."
        />
        <a href={brochure} className="hero-btn" download>
          Download Brochure
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
