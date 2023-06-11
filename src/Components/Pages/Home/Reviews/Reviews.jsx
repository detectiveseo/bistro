import { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import quote from '../../../../assets/icon/quote-left 1.png'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle heading="What Our Clients Say" subtitle="TESTIMONIALS" />

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {reviews.map(review => {
                    return (
                        <SwiperSlide key={review._id}>
                            <div className='flex flex-col justify-center items-center w-4/12 mx-auto text-center gap-6'>
                            <Rating style={{ maxWidth: 250 }} value={review.rating} />
                                <div><img src={quote} alt="" /></div>
                                <h4>{review.details}</h4>
                                <h4 className='text-4xl font-bold'>{review.name}</h4>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default Reviews;