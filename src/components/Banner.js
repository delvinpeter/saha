import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination, Mousewheel, Keyboard  } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./Slider.css"

function SlidingBanner() {
  return (
    <div className='ban'>
    <Swiper
      className="banner-slider"
      
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="slide one">
            <div className='slide-text'>
            <h2>best courses</h2>
            <h1>The best education center</h1>
            <p>dfgdfgefg fgege freeerergw</p>
            <button>contact us</button>
            </div>
            
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide two">
            <div className='slide-text'>
            <h2>best courses</h2>
            <h1>The best education center</h1>
            <p>dfgdfgefg fgege freeerergw</p>
            <button>contact us</button>
            </div>
            
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide three">
            <div className='slide-text'>
            <h2>best courses</h2>
            <h1>The best education center</h1>
            <p>dfgdfgefg fgege freeerergw</p>
            <button>contact us</button>
            </div>
            
        </div>
      </SwiperSlide>
      
    </Swiper>
    </div>
  );
}

export default SlidingBanner;
