import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const HouseCard = ({ item }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="flex flex-col pb-10 w-full items-start justify-between border border-[#1c0e0e37] hover:shadow-xl rounded-lg relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[FreeMode, Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full"
      >
        {item.images?.length > 0 ? (
          item.images.map((image, index) => (
            <SwiperSlide key={index} className="w-full">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="h-[200px] w-full object-cover rounded-t-lg"
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="h-[200px] w-full flex items-center justify-center bg-gray-200">
              <span>No Images Available</span>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {/* Custom navigation buttons */}
      <div
        ref={prevRef}
        className="absolute top-[40%] left-2 z-10 bg-gray-600 hover:bg-gray-800 py-1 px-3 rounded-full text-white cursor-pointer"
        onClick={() => prevRef.current?.click()}
      >
        &#10094;
      </div>
      <div
        ref={nextRef}
        className="absolute top-[40%] right-2 z-10 bg-gray-600 hover:bg-gray-800 py-1 px-3 rounded-full text-white cursor-pointer"
        onClick={() => nextRef.current?.click()}
      >
        &#10095;
      </div>

      {/* Item details and Link */}
      <Link
        to={`/property_detail?id=${item.id}`}
        className="w-full mt-2 flex flex-col px-3 gap-3"
      >
        <h3 className="text-black font-semibold text-xl">{item.title}</h3>
        <h3 className="text-black font-semibold">{item.price}</h3>
        <div>
          <h3 className="font-thin">
            {item.bed} Beds . {item.room} Rooms . {item.area}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-thin">
            {item.location}, {item.subcity}
          </h3>
          {item.is_liked ? (
            <GoHeartFill className="text-red-500" />
          ) : (
            <FiHeart />
          )}
        </div>
        <div className="flex items-center justify-end">
          <div className="flex gap-2 text-sm items-center">
            <IoTimeOutline />
            {item.posted_at}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HouseCard;
