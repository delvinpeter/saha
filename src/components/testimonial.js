import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "./main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { SlidesPerView } from './slidesize';

function Industries() {
  const slidesPerView = SlidesPerView();
  return (
    <div className='testimonial-main'>
        <h2>TESTIMONIAL</h2>
        <h1>Our Students Say!</h1>
        <div className='testimonial-swiper'>
        <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="testimonial-mySwiper Swiper1280"
      >
        <SwiperSlide>
          <div className='testimonial'>
            <div className='dbl-fqut'><FontAwesomeIcon icon={faQuoteLeft} /></div>
            
            <p>student need  fgdfgdgdfg  g gdfgdfg g g gdgdgdg dgto say</p>
            <div className='dbl-lqut'><FontAwesomeIcon icon={faQuoteRight} /></div>
          </div>
          <div className='testimonial-all'>
            <div className='testimonial-img ins-1'></div>
            <div className='testimonial-con'>
            <h2>student Name</h2>
            <h4>subject</h4>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='testimonial'>
        <div className='dbl-fqut'><FontAwesomeIcon icon={faQuoteLeft} /></div>
            
            <p>student need  fgdfgdgdfg  g gdfgdfg g g gdgdgdg dgto say</p>
            <div className='dbl-lqut'><FontAwesomeIcon icon={faQuoteRight} /></div>
          </div>
          <div className='testimonial-all'>
            <div className='testimonial-img ins-2'></div>
            <div className='testimonial-con'>
            <h2>student Name</h2>
            <h4>subject</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonial'>
        <div className='dbl-fqut'><FontAwesomeIcon icon={faQuoteLeft} /></div>
            
            <p>student need  fgdfgdgdfg  g gdfgdfg g g gdgdgdg dgto say</p>
            <div className='dbl-lqut'><FontAwesomeIcon icon={faQuoteRight} /></div>
          </div>
          <div className='testimonial-all'>
            <div className='testimonial-img ins-3'></div>
            <div className='testimonial-con'>
            <h2>student Name</h2>
            <h4>subject</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonial'>
        <div className='dbl-fqut'><FontAwesomeIcon icon={faQuoteLeft} /></div>
            
            <p>student need  fgdfgdgdfg  g gdfgdfg g g gdgdgdg dgto say</p>
            <div className='dbl-lqut'><FontAwesomeIcon icon={faQuoteRight} /></div>
          </div>
          <div className='testimonial-all'>
            <div className='testimonial-img ins-4'></div>
            <div className='testimonial-con'>
            <h2>student Name</h2>
            <h4>subject</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonial'>
        <div className='dbl-fqut'><FontAwesomeIcon icon={faQuoteLeft} /></div>
            
            <p>student need  fgdfgdgdfg  g gdfgdfg g g gdgdgdg dgto say</p>
            <div className='dbl-lqut'><FontAwesomeIcon icon={faQuoteRight} /></div>
          </div>
          <div className='testimonial-all'>
            <div className='testimonial-img ins-5'></div>
            <div className='testimonial-con'>
            <h2>student Name</h2>
            <h4>subject</h4>
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