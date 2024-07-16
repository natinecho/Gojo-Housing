import React, { useState } from "react";
import House from "../asset/house.jpg";
import { FaSearch } from "react-icons/fa";
import FAQItem from "../component/FAQitem";
import MostViewed from "../component/MostViewed";
import RecentUsed from "../component/recentUsed";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DownloadIcon from "@mui/icons-material/Download";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import faq from "../asset/faq.jpg";
import card from "../data";

const Dropdown = ({ options }) => {
  return (
    <div className="mb-4">
      <select className="outline-none bg-[#E9E7E7] py-2 px-5 rounded-full w-full">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

function Home() {
  const [selectedCity, setSelectedCity] = useState("addis_abeba");
  // console.log(card)

  const handleClick = (city) => {
    setSelectedCity(city);
  };

  const options = [
    ["Type", "appartment", "condominium", "commercial", "regular"],
    ["city", "addis abeba", "bahirdar", "mekele", "adama", "hawassa"],
    ["subcity", "bole", "kality", "summit", "lideta"],
    ["max price", "100,000 birr", "50,000 birr", "10,000 birr", "5,000 birr"],
    ["min price", "100,000 birr", "50,000 birr", "10,000 birr", "5,000 birr"],
  ];

  return (
    <>
      <Navbar />

      <div className="">
        <div className="relative ">
          <img
            src={House}
            alt="gojo housing"
            className="w-1/7 absolute"
            style={{ height: "600px" }}
          />
          <div
            className="absolute w-full bg-[#19010193]  flex flex-col justify-around"
            style={{ height: "600px", zIndex: 1 }}
          >
            <div className="flex items-center justify-center mt-2 ml-1/3 mr-1/3   w-1/3 py-2 px-20 rounded-full bg-white">
              <input
                type="text"
                placeholder="search here"
                className="outline-none"
              />
              <FaSearch />
            </div>
            <div className="text-white flex  flex-col gap-10 ml-10">
              <h1 className="text-5xl font-bold">Join us</h1>
              <p className="w-1/4 text-xl">
                subscribe <span className="font-bold">Gojo package </span> and
                post your home
              </p>
              <button className=" w-1/6 py-2 bg-[#0E2865] text-white hover:bg-white hover:text-[#0E2865] border  border-[#0E2865] rounded-3xl font-bold">
                {" "}
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1/2">f</div>

      <div className="mt-10">
        <h1 className="text-[35px] font-bold ml-2">Browse your dream house</h1>
        <div className="flex justify-around m-4 ">
          {options.map((optionArray, index) => (
            <Dropdown key={index} options={optionArray} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-[35px] font-bold mt-2 ml-2">Recently Viewed</h1>
        <div className="sm:py-8 sm:px-7">
          <RecentUsed />
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-[35px] font-bold m-3">How it works ?</h1>
        <div className="flex bg-[#374dcb4a] p-10  items-center justify-center">
          <div className="flex gap-3 w-1/4 h-[170px] p-3 border border-black rounded-3xl items-center justify-center text-[#0E2865]">
            <PersonAddIcon style={{ fontSize: "70" }} />
            <div className="flex flex-col jusify-between">
              <h1 className="text-3xl">Register</h1>
              <p className="w-3/5">sign up and create your account</p>
            </div>
          </div>
          <ArrowForwardIcon style={{ fontSize: "70" }} />
          <div className="flex gap-3 h-[170px] p-3 border border-black rounded-3xl items-center justify-center text-[#0E2865]">
            <ReceiptIcon style={{ fontSize: "70" }} />
            <div className="flex flex-col jusify-between">
              <h1 className="text-3xl">Subscribe</h1>
              <p className="w-3/4">subscribe to our pakage</p>
            </div>
          </div>
          <ArrowForwardIcon style={{ fontSize: "70" }} />

          <div className="flex gap-3 h-[170px] p-3 border border-black rounded-3xl  text-[#0E2865] items-center justify-center">
            <DownloadIcon style={{ fontSize: "70" }} />
            <div className="flex flex-col jusify-between">
              <h1 className="text-3xl">Upload</h1>
              <p className="w-3/4">upload your propertie</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-5xl font-bold text-center mt-6">
          Most Popular Homes
        </div>
        <div className="text-xl font-light text-center mt-6">
          Discover the best renting houses near top cities
        </div>
        <div className="flex justify-between w-3/5 p-10 font-bold text-2xl">
          <button
            className="p-2 border bg-white border-[#0E2865] hover:bg-[#0E2865] hover:text-white"
            onClick={() => handleClick("addis_abeba")}
          >
            addis ababa
          </button>
          <button
            className="p-2 border bg-white border-[#0E2865] hover:bg-[#0E2865] hover:text-white"
            onClick={() => handleClick("bahirdar")}
          >
            bahirdar
          </button>
          <button
            className="p-2 border bg-white border-[#0E2865] hover:bg-[#0E2865] hover:text-white"
            onClick={() => handleClick("mekele")}
          >
            mekele
          </button>
          <button
            className="p-2 border bg-white border-[#0E2865] hover:bg-[#0E2865] hover:text-white"
            onClick={() => handleClick("adama")}
          >
            adama
          </button>
          <button
            className="p-2 border bg-white border-[#0E2865] hover:bg-[#0E2865] hover:text-white"
            onClick={() => handleClick("hawassa")}
          >
            hawassa
          </button>
        </div>
        {selectedCity && <MostViewed homes={card[selectedCity]} />}
      </div>

      <div className=" flex  bg-white m-4 w-full ">
        <div className=" mt-5 flex overflow-hidden w-full ax-md:p-10">
          <div className="w-4/5">
            <h1 className="font-bold text-5xl mb-3 text-[#4a154b]">FAQ</h1>
            <FAQItem
              question="What is gojo ? "
              answer="Gojo is a premier house renting website designed to simplify 
                    your search for the perfect home. Whether you're looking for a cozy apartment in the city 
                    or a spacious house in the suburbs, Gojo offers an extensive and diverse
                    selection of rental properties to suit your needs."
            />

            <FAQItem
              question=" Why is gojo ?"
              answer="Gojo is your premier destination for 
                    house rentals, offering an extensive selection of properties to fit every budget and lifestyle.
                    With its user-friendly interface and advanced search filters, Gojo makes finding your next home 
                    effortless. Each listing provides detailed information, high-quality photos, virtual tours, and reviews,"
            />

            <FAQItem
              question="How can i rent a house ?"
              answer="To rent a house with Gojo, start by registering on 
                    our website to become a user. Once registered, browse our extensive listings of homes tailored to your preferences.
                     When you find a property you like, contact the owner directly through our platform to express your interest. 
                     Engage in negotiations to agree on terms, and once both parties are satisfied, finalize the rental agreement. 
                     Gojo makes the process straightforward, from search to securing your new home"
            />

            <FAQItem
              question="How much is the subscription fee ?"
              answer="At Gojo, we offer three subscription packages to suit your needs:
                     a monthly package for $10, a 6-month package for $20, and a yearly package for $40. Choose the plan that works best 
                     for you and start posting your rental properties with ease."
            />

            <FAQItem
              question=" How can i post a house ?"
              answer="To post a house on Gojo, first register on our website to
                     create an account. Once registered, subscribe to one of our listing packages that best fits your needs. After subscribing,
                    you can post your house by providing detailed information and high-quality photos. When potential tenants show interest,
                    you can communicate with them directly through our platform. Negotiate the rental terms and finalize the agreement to 
                    rent your home quickly and efficiently with Gojo."
            />
          </div>
          <img
            className="lg:w-1/2 md:block hidden m-5 h-[400px]"
            src={faq}
            alt="question marks"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
