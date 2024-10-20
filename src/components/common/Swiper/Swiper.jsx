import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./Swiper.scss";
import { EffectCube, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import image1 from "../../../assets/images/user-no-photo-svg.svg";
import image2 from "../../../assets/images/user-no-photo.png";

const SwiperComponent = (props) => {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      speed={2000}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[EffectCube, Autoplay]}
      className={"MySwiper"}
      autoplay={{
        delay: 1000, // задержка между слайдами в миллисекундах
        disableOnInteraction: false, // автопроигрывание не останавливается при взаимодействии
      }}
    >
      <SwiperSlide>
        <img src={image1} />
        <h4 className={"name"}>{props.friendsElements[0]}</h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image1} />
        <h4 className={"name"}>{props.friendsElements[1]}</h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image1} />
        <h4 className={"name"}>{props.friendsElements[2]}</h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image1} />
        <h4 className={"name"}>Andrey</h4>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
