import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../../../assets/home/01.jpg'
import image2 from '../../../assets/home/02.jpg'
import image3 from '../../../assets/home/03.png'
import image4 from '../../../assets/home/04.jpg'
import image5 from '../../../assets/home/05.png'
import image6 from '../../../assets/home/06.png'

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className=''>
            <Slider {...settings}>
            <div>
                <img src={image1} alt="" />
            </div>
            <div>
                <img src={image2} alt="" />
            </div>
            <div>
                <img src={image3} alt="" />
            </div>
            <div>
                <img src={image4} alt="" />
            </div>
            <div>
                <img src={image5} alt="" />
            </div>
            <div>
                <img src={image6} alt="" />
            </div>
        </Slider>
        </div>
    );
};

export default Banner;