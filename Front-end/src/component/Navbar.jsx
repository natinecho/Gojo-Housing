import { useState } from "react";
import Logo from "../asset/Gojo-logo.png";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { IoIosNotificationsOutline, IoIosLogOut } from "react-icons/io";

import { AiOutlineMessage } from "react-icons/ai";
import { BsHouseHeart, BsHouseUp } from "react-icons/bs";

import user from "../asset/contactowner.jpg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const TogleMenu = () => {
    setProfileOpen(false);
    setMenuOpen(!isMenuOpen);
  };

  const TogleProfile = () => {
    setMenuOpen(false);
    setProfileOpen(!isProfileOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md px-4 z-50">
        <div className="flex h-20 justify-between items-center">
          <Link to={"/"}>
            <img src={Logo} alt="gojo housing" className="w-1/7 h-20" />
          </Link>

          <div className="hidden md:block">
            <div className="flex gap-8 justify-center items-center">
              <div className="flex sm:text-lg text-[#758694] md:text-xl gap-7">
                <Link to={"/"} className=" hover:text-black">
                  <button> Home</button>
                </Link>
                <Link to={"/houses"} className=" hover:text-black">
                  <p>Houses</p>
                </Link>
                <Link to={"/rent"} className=" hover:text-black">
                  <p>Rent House</p>
                </Link>
              </div>
              <div className="flex gap-3  items-center text-3xl">
                <Link
                  to={"/login"}
                  className=" hover:bg-[#d4d1d134] border p-2 rounded-full "
                >
                  <IoIosNotificationsOutline />
                </Link>
                <div
                  className=" border-2  rounded-full "
                  onClick={TogleProfile}
                >
                  <img
                    src={user}
                    alt=""
                    className="rounded-full object-fill h-[50px] "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden text-3xl flex gap-4 items-center ">
            <div className=" border-2  rounded-full " onClick={TogleProfile}>
              <img
                src={user}
                alt=""
                className="rounded-full object-fill h-[50px] "
              />
            </div>
            <div className="" onClick={TogleMenu}>
              {isMenuOpen ? <IoClose /> : <TiThMenu />}
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col pb-4 gap-8 justify-center items-center">
            <div className="flex flex-col items-center text-xl text-[#758694] md:text-2xl gap-7">
              <Link to={"/"} className=" hover:text-black">
                <button> Home</button>
              </Link>
              <Link to={"/houses"} className=" hover:text-black">
                <p>Houses</p>
              </Link>
              <Link to={"/rent"} className=" hover:text-black">
                <p>Rent House</p>
              </Link>
              <Link to={"/houses"} className=" hover:text-black">
                <p>Notification</p>
              </Link>
            </div>
          </div>
        )}
        {isProfileOpen && (
          <div className="absolute top-20 right-0 z-50 bg-white p-2 rounded-b-xl w-44">
            <div className="border-b-2 pb-3">Natnael Necho</div>
            <div className="flex flex-col gap-3 py-3">
              <Link to={"/message"} className=" flex gap-3 items-center">
                <AiOutlineMessage className="text-xl" />
                <p>Message</p>
              </Link>
              <Link to={"/favorite"} className=" flex gap-3 items-center">
                <BsHouseUp className="text-xl" />
                <p>Posted Homes</p>
              </Link>
              <Link to={"/favorite"} className=" flex gap-3 items-center">
                <BsHouseHeart className="text-xl" />
                <p>Favorite</p>
              </Link>
            </div>
            <Link
              to={"/login"}
              className="flex gap-3 items-center text-[#ef2525] pt-2 "
            >
              <IoIosLogOut className="text-xl" />
              <p>Logout</p>
            </Link>
          </div>
        )}
      </div>
    </>
    // <>
    //   <div className="fixed top-0 left-0 w-full bg-white shadow-md px-4 z-50">
    //     <div className="flex h-20 justify-between items-center">
    //       <Link to={"/"}>
    //         <img src={Logo} alt="gojo housing" className="w-1/7 h-20" />
    //       </Link>

    //       <div className="hidden lg:block">
    //         <div className="flex gap-8 justify-center items-center">
    //           <div className="flex sm:text-lg text-[#758694] md:text-xl gap-7">
    //             <Link to={"/"} className=" hover:text-black">
    //               <button> Home</button>
    //             </Link>
    //             <Link to={"/houses"} className=" hover:text-black">
    //               <p>Houses</p>
    //             </Link>
    //             {/* <Link to={"/howitworks"} className=" hover:text-black">
    //               <p>How it works?</p>
    //             </Link> */}
    //           </div>
    //           <div className="flex gap-3 sm:text-xl md:text-xl">
    //             <Link
    //               to={"/login"}
    //               className="w-4/5 sm:w-1/2 py-2 px-7 text-[#0E2865] border  border-[#0e286546] hover:bg-[#0e286511] rounded-full font-bold"
    //             >
    //               <button> Login</button>
    //             </Link>
    //             <Link
    //               to={"/signup"}
    //               className="w-4/5 sm:w-1/2 py-2 px-7 bg-[#0E2865] text-white border rounded-full font-bold  hover:bg-[#0e2865de]  hover:text-white  "
    //             >
    //               <button> SignUp</button>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="lg:hidden text-3xl" onClick={TogleMenu}>
    //         {isMenuOpen ? <IoClose /> : <TiThMenu />}
    //       </div>
    //     </div>
    //     {isMenuOpen && (
    //       <div className="flex flex-col pb-4 gap-8 justify-center items-center">
    //         <div className="flex flex-col items-center text-xl text-[#758694] md:text-2xl gap-7">
    //           <Link to={"/"} className=" hover:text-black">
    //             <button> Home</button>`
    //           </Link>
    //           <Link to={"/howitworks"} className=" hover:text-black">
    //             <p>Houses</p>
    //           </Link>
    //           {/* <Link to={"/howitworks"} className=" hover:text-black">
    //             <p>How it works?</p>
    //           </Link> */}
    //         </div>
    //         <div className="flex gap-3 sm:text-xl md:text-xl">
    //           <Link
    //             to={"/login"}
    //             className="w-4/5 sm:w-1/2 py-3 px-7 text-[#0E2865] border  border-[#0E2865] hover:bg-[#0e286511] rounded-full font-bold"
    //           >
    //             <button> Login</button>
    //           </Link>
    //           <Link
    //             to={"/signup"}
    //             className="w-4/5 sm:w-1/2 py-3 px-7 bg-[#0E2865] text-white border rounded-full font-bold  hover:bg-[#0e2865de]  hover:text-white  "
    //           >
    //             <button> SignUp</button>
    //           </Link>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </>
  );
};

export default Navbar;
