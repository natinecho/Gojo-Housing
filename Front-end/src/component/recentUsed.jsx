// src/components/RecentUsed.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";

import HouseCard from "./HouseCard";

import "swiper/css";
import "swiper/css/navigation";
import card from "../data";

const RecentUsed = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="flex sm:w-full p-5 bg-white">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1.1,
            spaceBetween: 15,
          },
          440: {
            slidesPerView: 2.05,
            spaceBetween: 15,
          },
          767: {
            slidesPerView: 2.2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4.1,
            spaceBetween: 15,
          },
        }}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="w-full"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {card["addis_abeba"]?.map((item) => {

          return (
            <SwiperSlide
              key={item.id}
              className=" rounded-lg w-full"
            >
              <HouseCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RecentUsed;
