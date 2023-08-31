import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './main.css';
import { SlidesPerView } from './slidesize';

function Courses() {
  const slidesPerView = SlidesPerView();

// function Courses() {
  return (
    <>
   
    <div className='courses-main'>
        <h2>COURSES</h2>
        <h1>Popular Courses</h1>
        <div className='courses-swiper'>
        <Swiper
        slidesPerView={slidesPerView}
        
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper Swiper1280"
      >
        <SwiperSlide>
          <div className='cour-all'>
          <div className='courses-img img-one'>
          </div>
          <div className='courses-cont'>
            <h3>Rs.45k</h3>
            <h4>Web Design & Development Course for Beginners</h4>
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='cour-all'>
        <div className='courses-img img-two'>
          </div>
          <div className='courses-cont'>
            <h3>Rs.45k</h3>
            <h4>Web Design & Development Course for Beginners</h4>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cour-all'>
        <div className='courses-img img-three'>
          </div>
          <div className='courses-cont'>
            <h3>Rs.45k</h3>
            <h4>Web Design & Development Course for Beginners</h4>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cour-all'>
        <div className='courses-img img-four'>
          </div>
          <div className='courses-cont'>
            <h3>Rs.45k</h3>
            <h4>Web Design & Development Course for Beginners</h4>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div></div>
        </>
  )
}

export default Courses