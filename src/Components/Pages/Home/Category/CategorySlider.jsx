import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from 'swiper';

import image1 from '../../../../assets/home/slide1.jpg'
import image2 from '../../../../assets/home/slide2.jpg'
import image3 from '../../../../assets/home/slide3.jpg'
import image4 from '../../../../assets/home/slide4.jpg'
import image5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Shared/SectionTitle';


const CategorySlider = () => {
    return (
        <section>
            <SectionTitle heading="ORDER ONLINE" subtitle="From 11:00am to 10:00pm" />
            <div className="w-6/12 mx-auto">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true} 
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='w-full' src={image1} alt="" />
                        <h2 className='text-center text-5xl font-bold -mt-16 text-white'>Salad</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={image2} alt="" />
                        <h2 className='text-center text-5xl font-bold -mt-16 text-white'>Pizzas</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={image3} alt="" />
                        <h2 className='text-center text-5xl font-bold -mt-16 text-white'>Soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={image4} alt="" />
                        <h2 className='text-center text-5xl font-bold -mt-16 text-white'>Cakes</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src={image5} alt="" />
                        <h2 className='text-center text-5xl font-bold -mt-16 text-white'>Salad</h2>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default CategorySlider;