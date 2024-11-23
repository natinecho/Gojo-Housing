import React, { useState } from "react";
import House from "../asset/house.jpg";
import FAQList from "../component/FAQList";
import MostViewed from "../component/MostViewed";
import RecentUsed from "../component/recentUsed";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import card from "../data";

import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TbHomeSearch } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { RiUserForbidLine } from "react-icons/ri";

const FeatureCard = ({ item }) => {
  return (
    <div className="flex gap-5 p-2 md:pb-16 md:flex-col md:w-1/3 lg:w-1/4 items-center md:justify-center bg-white  rounded-xl hover:bg-[#fffffff2]">
      <div className="bg-[#ff593c43] p-3 rounded-full text-3xl lg:text-6xl ">
        {item.icon}
      </div>

      <div className="flex flex-col gap-3 md:items-center md:justify-center md:text-center">
        <div className=" font-semibold md:text-lg ">{item.title}</div>
        <div className=" font-thin text-sm md:text-base  ">
          {item.disctiption}
        </div>
      </div>
    </div>
  );
};

function Home() {
  const [selectedCity, setSelectedCity] = useState("addis_abeba");
  const features = [
    {
      icon: <VscWorkspaceTrusted />,
      title: "Trusted By Thousands",
      disctiption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ",
    },
    {
      icon: <TbHomeSearch />,
      title: "Wide Range Of Properties",
      disctiption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ",
    },
    {
      icon: <FiPhoneCall />,
      title: "Direct  Communication with owner",
      disctiption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ",
    },
    {
      icon: <RiUserForbidLine />,
      title: "No middle person",
      disctiption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="z-0 w-full h-1/4 mt-20 ">
        <div className="relative">
          <img
            src={House}
            alt="gojo housing"
            className="w-full h-96 sm:h-[500px] "
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-0 left-0 w-full bg-[#1901016d]  flex flex-col justify-end z-30 h-96 sm:h-[500px]">
            <div className="text-white flex  flex-col gap-5 ml-10 mb-10">
              <h1 className="text-5xl font-bold">Join us</h1>
              <p className="w-4/5 sm:w-2/5 md:w-1/4  text-xl">
                subscribe <span className="font-bold">Gojo package </span> and
                post your home
              </p>
              <button className="w-1/3 sm:w-1/12 py-2  bg-[#0E2865] text-white border border-[#ffffff2e] rounded-xl font-bold  hover:bg-[#0e2865de]  hover:text-white">
                {" "}
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-[35px] font-bold mt-2 ml-2">Recently Viewed</h1>
        <div className="sm:py-8 sm:px-7">
          <RecentUsed />
        </div>
      </div>

      <div className="bg-[#0E2865] p-5  pb-10 gap-5 flex flex-col items-center justify-center">
        <h3 className="text-red-600">Our Feature</h3>
        <h1 className="text-white text-2xl">Why Choose Us ?</h1>

        <div className="flex flex-col gap-3 lg:gap-6 justify-between w-full md:flex-row">
          {features.map((item) => (
            <FeatureCard item={item} />
          ))}
        </div>
      </div>

      <div>
        <div className="text-5xl font-bold text-center mt-6">
          Most Popular Homes
        </div>
        <div className="text-xl font-light text-center mt-6">
          Discover the best renting houses near top cities
        </div>
        <div className=" flex flex-wrap lg:w-3/5 sm:p-10 sm:font-bold sm:text-2xl items-center justify-center sm:justify-start">
          <button
            className={`p-2  bg-white ${
              selectedCity == "addis_abeba"
                ? "text-[#0E2865] font-bold"
                : "text-black font-normal"
            } hover:text-[#0E2865]`}
            onClick={() => setSelectedCity("addis_abeba")}
          >
            addis ababa
          </button>
          <button
            className={`p-2  bg-white ${
              selectedCity == "bahirdar"
                ? "text-[#0E2865] font-bold"
                : "text-black font-normal"
            } hover:text-[#0E2865]`}
            onClick={() => setSelectedCity("bahirdar")}
          >
            bahirdar
          </button>
          <button
            className={`p-2  bg-white ${
              selectedCity == "mekele"
                ? "text-[#0E2865] font-bold"
                : "text-black font-normal"
            } hover:text-[#0E2865]`}
            onClick={() => setSelectedCity("mekele")}
          >
            mekele
          </button>
          <button
            className={`p-2  bg-white ${
              selectedCity == "adama"
                ? "text-[#0E2865] font-bold"
                : "text-black font-normal"
            } hover:text-[#0E2865]`}
            onClick={() => setSelectedCity("adama")}
          >
            adama
          </button>
          <button
            className={`p-2  bg-white ${
              selectedCity == "hawassa"
                ? "text-[#0E2865] font-bold"
                : "text-black font-normal"
            } hover:text-[#0E2865]`}
            onClick={() => setSelectedCity("hawassa")}
          >
            hawassa
          </button>
        </div>
        {selectedCity && <MostViewed homes={card[selectedCity]} />}
      </div>

      {/* <div className="mt-12">
        <h1 className="text-[35px] font-bold m-3">How it works ?</h1>
        <div className="flex flex-col sm:flex-row bg-[#374dcb4a] p-10 items-center justify-center">
          <div className="flex gap-3 items-center justify-around border border-black rounded-[60px]  py-16 text-[#305bc1]">
            <PersonAddIcon style={{ fontSize: "70" }} />
            <div className="flex flex-col w-3/5">
              <h1 className="text-3xl">Register</h1>
              <p className=" text-black">sign up and create your account</p>
            </div>
          </div>
          <ArrowForwardIcon style={{ fontSize: "70" }}  className="rotate-90 md:rotate-0 font-semibold"/>
          <div className="flex gap-3 items-center justify-around border border-black rounded-[60px]  py-16 text-[#305bc1]">
            <ReceiptIcon style={{ fontSize: "70" }} />
            <div className="flex flex-col w-3/5">
              <h1 className="text-3xl">Subscribe</h1>
              <p className=" text-black">subscribe to our pakage</p>
            </div>
          </div>
          <ArrowForwardIcon style={{ fontSize: "70" }}  className="rotate-90 md:rotate-0 font-semibold"/>
          <div className="flex gap-3 items-center justify-around border border-black rounded-[60px]  py-16 text-[#305bc1]">
            <DownloadIcon style={{ fontSize: "70" }} />
            <div className="flex flex-col w-3/5">
              <h1 className="text-3xl">Upload</h1>
              <p className=" text-black">upload your propertie</p>
            </div>
          </div>
        </div> 
      </div> */}

      <FAQList />

      <Footer />
    </>
  );
}

export default Home;
