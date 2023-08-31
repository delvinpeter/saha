import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "./main.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import { SlidesPerView } from './slidesize';


function Industries() {
  const slidesPerView = SlidesPerView();
  return (
    <div className='courses-main'>
        <h2>INSTRUCTORS</h2>
        <h1>Expert Instructors</h1>
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
          <div className='instructors-img ins-1'>
          </div>
          <div className='instructors-cont'>
          <h2>Instructor Name</h2>
            <h4>Designation</h4>
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='cour-all'>
        <div className='instructors-img ins-2'>
          </div>
          <div className='instructors-cont'>
          <h2>Instructor Name</h2>
            <h4>Designation</h4>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cour-all'>
        <div className='instructors-img ins-3'>
          </div>
          <div className='instructors-cont'>
          <h2>Instructor Name</h2>
            <h4>Designation</h4>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cour-all'>
        <div className='instructors-img ins-4'>
          </div>
          <div className='instructors-cont'>
            <h2>Instructor Name</h2>
            <h4>Designation</h4>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cour-all'>
        <div className='instructors-img ins-5'>
          </div>
          <div className='instructors-cont'>
            <h2>Instructor Name</h2>
            <h4>Designation</h4>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div></div>
  )
}

export default Industries