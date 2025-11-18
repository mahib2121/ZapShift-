import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ReviewCard from '../components/ReviewCard';

const ReviewPage = ({ reviewPromis }) => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        reviewPromis.then(data => setReview(data));
    }, [reviewPromis]);

    return (
        <div>
            <div>
                <h3 className="text-3xl text-center">What Our Coustomer says </h3>
                <p className='text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {review.map(review => (
                    <SwiperSlide key={review.id}>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
};

export default ReviewPage;
