// src/components/property_detail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import card from "../data";
import Navbar from "../component/Navbar";
import MostViewed from "../component/MostViewed";
import Footer from "../component/Footer";

const Property_detail = () => {
  const params = new URLSearchParams(document.location.search);
  const item = card["addis_abeba"][params.get("id")];

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-between">
        <img src={item.images[0]} alt={item.title} className="w-3/4" />
        <div className="flex flex-col w-1/4 gap-4">
          <img src={item.images[1]} alt={item.title} />
          <img src={item.images[2]} alt={item.title} />
          <img src={item.images[3]} alt={item.title} />
        </div>
      </div>

      <div className="flex items-start m-4 w-full">
        <div className="w-1/2">
            <div className="m-6">
                <h1 className="font-bold text-4xl mt-10">{item.title}</h1>
                <div className="font-light flex gap-2 font-sm">{item.location}
                    <div>{item.subcity}</div>
                </div>
                <div className="font-light flex gap-2 font-sm ">
                    <div>{item.bed} Bedroom</div>
                    <div>{item.room} Room</div>
                </div>

            </div>
        <h1 className="font-bold text-4xl mt-10 ml-6">Discription</h1>
        
          <p className="m-6">{item.discription}</p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 gap-10">
          <p className="w-1/2 py-2 px-3 bg-[#F2F0F2] rounded-2xl font-bold text-center">
            {item.price}
          </p>
          <div className="w-1/2 flex flex-col font-bold items-center justify-center bg-[#F2F0F2] rounded-2xl">
            <p className="m-4 ">Contact Owner</p>

            <div className="w-1/3 py-2">
              <img
                src={item.images[3]}
                alt={item.title}
                className="rounded-full"
              />
            </div>
            <p>{item.owner[0]}</p>
            <p>{item.owner[1]}</p>
            <p>{item.owner[2]}</p>

            <button className="bg-[#0E2865] text-white  rounded-full w-1/2 p-2 m-8">
              chat with owner
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
            <h1 className="font-bold text-4xl mt-10 m-6 text-center">Location</h1>
            <img src={item.images[1]} alt={item.title} className="h-[330px]" />
      </div>

      <div className="m-6">
        <h1 className="font-bold text-xl ml-5">simmilar Properties</h1>
       < MostViewed homes={card["mekele"]}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Property_detail;
