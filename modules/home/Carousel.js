import React from 'react';
import Slider from "react-slick";
import Image from 'next/image'


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="z-40 w-3/12 h-full">
      <Slider {...settings}>
        <div className="mr-auto">
          <Image
            src="/phone.png"
            alt="phone"
            width={300}
            height={500}
          />
        </div>
        <div className="mr-auto">
          <Image
            src="/phone.png"
            alt="phone"
            width={300}
            height={500}
          />
        </div>
        <div className="mr-auto">
          <Image
            src="/phone.png"
            alt="phone"
            width={300}
            height={500}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
