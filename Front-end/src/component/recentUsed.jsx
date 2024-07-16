// src/components/recentUsed.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules"; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import card from "../data"; 

const recentUsed = () => {

  const [activeSlide, setActiveSlide] = useState(0); 

  return (
    <div className="flex sm:w-full">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="w-full"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)} 
      >

        {card["addis_abeba"].map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex flex-col items-center justify-center bg-[#374dcb4a] rounded-lg shadow-lg p-4 mb-8"
          >
            <Link to={`/property_detail?id=${item.id}`}>
              <div className="flex flex-col items-start justify-between items-between">
                <img src={item.cover_image} alt="image_" className="h-[200px]" />
                <h3 className="text-black font-bold text-xl">
                  {item.title}
                </h3>
                <div className="space-x-4 items-center">
                  <h3 className="text-black font-bold">{item.price}</h3>
                </div>
                <div>
                  <h3 className="text-2xs">{item.location}</h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default recentUsed;
