import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import logo1 from '../../src/assets/brands/amazon.png';
import logo2 from '../../src/assets/brands/casio.png';
import logo3 from '../../src/assets/brands/moonstar.png';
import logo4 from '../../src/assets/brands/randstad.png';
import logo5 from '../../src/assets/brands/start_people.png';
import logo6 from '../../src/assets/brands/amazon.png';
import logo7 from '../../src/assets/brands/star.png';

const Brands = () => {
    const logos = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo7,
    ];

    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={2}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
        >
            {logos.map((logo, idx) => (
                <SwiperSlide key={idx}>
                    <img src={logo} alt={`Brand ${idx + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Brands;
