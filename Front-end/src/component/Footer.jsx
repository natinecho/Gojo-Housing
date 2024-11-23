import logo from "../asset/Gojo-logo.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-[#0E2865] h-auto  ">
      <div className="flex flex-col sm:flex-row justify-between items-center text-white gap-4 w-full my-6">
        <div className="flex flex-col sm:flex-row text-white gap-4 w-full items-center">
          <Link to="/">
            <img src={logo} alt="" width={80} height={80} className="" />
          </Link>
          <div className="flex flex-wrap items-center justify-center">
            <Link className="hover:underline p-2" to="/">
              Home
            </Link>
            <Link className="hover:underline p-2" to="/about">
              Houses
            </Link>
            <Link className="hover:underline p-2" to="/howitworks">
              How it works?
            </Link>
            <Link className="hover:underline p-2" to="/rent">
              Rent House
            </Link>
            <Link className="hover:underline p-2" to="/faq">
              FAQ
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  w-full sm:w-1/2">
          <div className="flex  gap-3">
            <div className="rounded-xl p-2  bg-[#ffff] text-black">
              <input type="text" name="" id="" className="outline-none " />
            </div>
            <button className="rounded-xl p-2  bg-[#1e408f6d] py-2 px-5 border border-[#ffffff2e] ">Send</button>
          </div>
        </div>
      </div>

      <div className="border-b border-b-[#ffffff6e] mx-5"></div>
      <div className="flex flex-col sm:flex-row w-full justify-between px-6 py-3 gap-3 my-4">
        <div className="flex items-center justify-center text-white font-thin">
          &copy; {new Date().getFullYear()} Gojo Housing, all rights reserved
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-4">
            <Link to={"https://www.linkedin.com/"} target="_blank"  className="bg-[#fff] p-1 rounded-full text-center text-[#0E2865] ">
              <LinkedInIcon />
            </Link>
            <Link to={"https://www.facebook.com/"} target="_blank" className="bg-[#fff] p-1 rounded-full text-center  text-[#0E2865]">
              <FacebookIcon />
            </Link>
            <Link to={"https://www.instagram.com/"} target="_blank" className="bg-[#fff] p-1 rounded-full text-center text-[#0E2865] ">
              <InstagramIcon />
            </Link>
            <Link to={"https://www.youtube.com/"} target="_blank" className="bg-[#fff] p-1 rounded-full text-center text-[#0E2865] ">
              <YouTubeIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
