import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import bpic1 from "../../assets/banner/banner1.png";
import bpic2 from "../../assets/banner/banner2.png";
import bpic3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto rounded-3xl overflow-hidden shadow-lg">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
        transitionTime={800}
        swipeable={true}
        emulateTouch={true}
      >
        {[bpic1, bpic2, bpic3].map((pic, index) => (
          <div key={index}>
            <img
              src={pic}
              className="w-full h-[420px] object-cover"
              alt={`banner-${index}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
