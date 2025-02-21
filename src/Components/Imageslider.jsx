
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Imageslider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Imageslider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src = '../src/assets/Imageslider1.jpeg' alt='Slide-1'/>
        <h1 className='text'>OUR STORY</h1></SwiperSlide>
        <SwiperSlide><img src = '../src/assets/Imageslider2.jpg' alt='Slide-1'/>
        <h1 className='text'>OUR STORY</h1></SwiperSlide>
        <SwiperSlide><img src = '../src/assets/Imageslider3.avif' alt='Slide-1'/>
        <h1 className='text'>OUR STORY</h1></SwiperSlide>
        <SwiperSlide><img src = '../src/assets/Imageslider4.jpg' alt='Slide-1'/>
        <h1 className='text'>OUR STORY</h1></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Imageslider