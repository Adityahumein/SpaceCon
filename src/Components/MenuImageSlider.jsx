import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';

import './MenuImageSlider.css';
import { Autoplay, EffectCreative } from 'swiper/modules';

import SliderImage1 from "../assets/slider_image.jpg"
import SliderImage2 from "../assets/slider_image_2.avif"
import SliderImage3 from "../assets/slider_image_3.jpg"
import SliderImage4 from "../assets/slider_image_4.avif"
import SliderImage5 from "../assets/slider_image_5.jpg"
import SliderImage6 from "../assets/slider_image_6.jpg"


export default function MenuImageSlider(){
    return(
        <div className="SliderGroud">
      <Swiper
        grabCursor={true}
        loop={true}
        autoplay={{
            delay: 2000 , 
            disableOnInteraction:false
        }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
            opacity:0,
          },
        }}
        modules={[EffectCreative , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={SliderImage1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SliderImage4} alt="" /></SwiperSlide>
        
      
       
      </Swiper>
    </div>
    )
}