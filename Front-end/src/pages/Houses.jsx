import React, { useState } from "react";

import card from "../data";
import HouseCard from "../component/HouseCard";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import MostViewed from "../component/MostViewed";
import HeroImage from "../asset/HousesPageHeroImage.png";

import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { RiFilter3Line } from "react-icons/ri";

import { Box, Rating } from "@mui/material";
import { Slider } from "@mui/material";
// import Typography from "@mui/material/Typography";

const Houses = () => {
  const [value, setValue] = useState([1000, 10000]);
  const [filterBar, setFilterBar] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleMenu = () => {
    setFilterBar(!filterBar);
  };

  return (
    <>
      <Navbar />
      <div className="z-0 w-full mt-20 ">
        <div className="relative">
          <img
            src={HeroImage}
            alt="gojo housing"
            className="w-full h-40 sm:h-[300px] "
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-0 left-0 w-full h-40 sm:h-[300px]  flex flex-col justify-center z-30">
            <div className="text-white flex  flex-col items-center justify-center gap-5 ml-10 mb-10">
              <h1 className="text-3xl sm:text-5xl font-bold">
                Find Your Dream Home
              </h1>
              <div className=" flex rounded-lg text-black items-center justify-center p-1 text-xl bg-[#c5c0c06d]">
                <div className="flex rounded-lg gap-10 p-2 items-center bg-white">
                  <div className="flex gap-2 items-center p-1 border-2 rounded-full ">
                    <FaSearch className="text-gray-300" />
                    <input
                      type="text"
                      className=" outline-none"
                      placeholder="Search here"
                    />
                  </div>
                  <select
                    name="Location"
                    id=""
                    className="p-1 border-2 rounded-full outline-none text-gray-400 hidden sm:block"
                  >
                    <option value="">Location</option>
                    <option value="">Adiss Abeba</option>
                    <option value="">Bahirdar</option>
                    <option value="">Adama</option>
                    <option value="">Hawassa</option>
                    <option value="">Mekelle</option>
                  </select>
                  <button className="hidden sm:block px-4 py-2  bg-[#0E2865] text-white border border-[#ffffff2e] rounded-lg font-bold  hover:bg-[#0e2865de]  hover:text-white">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full overflow-hidden flex p-2  gap-6 ">
        {/* {!filterBar && window.innerWidth < 640 && (
          <RiFilter3Line onClick={toggleMenu} className="absolute" />
        )} */}

        {(filterBar || window.innerWidth > 640) && (
          <div
            className={`flex flex-col w-72 gap-3 border-r-2 min-h-screen p-5 absolute left-0 sm:relative transform transition-transform duration-1000 ease-in-out z-30 bg-white ${
              filterBar || window.innerWidth > 640
                ? "translate-x-3"
                : "-translate-x-full"
            }`}
          >
            <div
              className="absolute top-0 right-3 hover:bg-[#b5b1b144] py-2 px-4 text-center sm:hidden rounded-full"
              onClick={toggleMenu}
            >
              X
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="pl-2">
                location
              </label>
              <div className="flex p-2 border-2 gap-3 rounded-lg w-60 items-center">
                <CiLocationOn />
                <select
                  name="Location"
                  id=""
                  className=" outline-none  w-52 block"
                >
                  <option value="">Location</option>
                  <option value="">Adiss Abeba</option>
                  <option value="">Bahirdar</option>
                  <option value="">Adama</option>
                  <option value="">Hawassa</option>
                  <option value="">Mekelle</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="" className="pl-2">
                Type of Place
              </label>
              <div className="flex justify-between gap-2">
                <div className="flex gap-3 w-1/2 items-center ">
                  <input type="checkbox" />
                  <label htmlFor="">All</label>
                </div>
                <div className="flex gap-3 w-1/2 items-center ">
                  <input type="checkbox" />
                  <label htmlFor="">Shop</label>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="flex gap-3 w-1/2 items-center ">
                  <input type="checkbox" />
                  <label htmlFor="">Office</label>
                </div>
                <div className="flex gap-3 w-1/2 items-center ">
                  <input type="checkbox" />
                  <label htmlFor="">Apartment</label>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="flex gap-3 w-1/2 items-center ">
                  <input type="checkbox" />
                  <label htmlFor="">House</label>
                </div>
                <div className="flex gap-3 w-1/2 items-center ">
                  <input type="checkbox" />
                  <label htmlFor="">condominium</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="pl-2">
                price Range
              </label>
              <Box sx={{ width: "auto", padding: 2 }}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={1000}
                  max={10000}
                />
                <div className="flex justify-between w-full">
                  <div>1000 birr</div>
                  <div>100,000 birr</div>
                </div>
              </Box>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="pl-2">
                size
              </label>
              <div>
                <div className=" flex w-full justify-between gap-3">
                  <div className="flex gap-2 items-center p-3 border-2 rounded-xl ">
                    <input
                      type="text"
                      className=" outline-none w-8"
                      placeholder="min"
                    />
                    msq
                  </div>
                  <div className="flex gap-2 items-center p-3 border-2 rounded-xl ">
                    <input
                      type="text"
                      className=" outline-none w-8"
                      placeholder="max"
                    />
                    msq
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="" className="pl-2">
                Number of bed
              </label>
              <div className="flex justify-between gap-2">
                <div className="flex gap-3 w-1/2 items-center ">
                  <input type="checkbox" />
                  <label htmlFor="">3 bed</label>
                </div>
                <div className="flex gap-3 w-1/2 items-center ">
                  <input type="checkbox" />
                  <label htmlFor="">2 bed</label>
                </div>
                <div className="flex gap-3 w-1/2 items-center ">
                  <input type="checkbox" />
                  <label htmlFor="">1 bed</label>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col w-full sm:w-4/5 ">
          <div className="flex items-center gap-8">
            {!filterBar && window.innerWidth < 640 && (
              <RiFilter3Line onClick={toggleMenu} className="w-1/12" />
            )}
            <h1>
              {" "}
              <span className="font-bold text-2xl">
                {card["all"].length}results
              </span>{" "}
              in Addis Abeba
            </h1>
          </div>

          <div className="flex flex-wrap w-full items-center justify-center  sm:justify-start">
            {/* <div className="flex flex-wrap items-center justify-center sm:items-start sm:justify-normal gap-5 m-4"> */}
            {card["all"]?.map((item) => (
              <div key={item.id} className="w-[90%] sm:w-[39%] lg:w-[32%] p-2">
                <HouseCard item={item} />
              </div>
            ))}
            {/* </div> */}

            {/* <MostViewed homes={card["all"]} /> */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Houses;
