import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination } from "swiper";


import image1 from '../../../assets/home/01.jpg'
import image2 from '../../../assets/home/02.jpg'
import image3 from '../../../assets/home/03.png'
import image4 from '../../../assets/home/04.jpg'
import image5 from '../../../assets/home/05.png'
import image6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={image1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image6} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;