import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import personone from "../asset/loginImage.svg";
// import Navbar from "../component/Navbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Login = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:w-2/3 xl:w-1/2   ">

          {/* Illustration Image */}
          <img
            src={personone}
            alt="Login illustration"
            className="hidden lg:block lg:w-[45%]"
          />

          {/* Login Form */}
          <div className="w-full lg:w-1/2 rounded-2xl shadow-lg p-6 pb-10 border ">
            <div className="text-center font-bold text-3xl text-gray-800 mb-6">
              Login
            </div>

            {/* Email Input */}
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
                Email
              </label>
              <input
                type="email"
                className="border border-gray-300 p-3 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef]"
                placeholder="example@gojo.com"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col mb-6">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-gray-600 pl-3 mb-1">
                  Password
                </label>
                <Link to="/forgot-password" className="text-blue-600 text-sm hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                className="border border-gray-300 p-3 rounded-3xl outline-none focus:ring-2 focus:ring-[#0e2865ef]"
                placeholder="**********"
              />
            </div>

            {/* Login Button */}
            <div className="flex items-center justify-center mb-4">
              <button className="p-3 w-1/2 rounded-3xl bg-[#0e2865ef] hover:bg-[#0e2865d1] text-white font-medium transition">
                Login
              </button>
            </div>

            {/* Signup Redirect */}
            <div className="flex justify-between gap-2 text-sm text-gray-700">
              <span>Don't have an account?</span>
              <Link to="/signup" className="text-blue-600 hover:underline">
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" flex gap-3 items-center">
          <Link to={"/"}>
            <ArrowBackIosIcon />
          </Link>
          <div className="text-center w-4/5 font-semibold text-3xl">
            WellCome Back{" "}
          </div>
        </div>
      <div className="flex  justify-center mt-10  ">
        <div className="flex">
          <img src={personone} alt="" className="hidden lg:block" />
        </div>

        <div className=" flex flex-col gap-5 md:w-1/2 lg:w-1/4  border p-5 pb-8 rounded-2xl shadow-lg">
          <div className="text-center font-bold text-2xl">Login</div>
          <div className="flex flex-col ">
            <label className="text-sm pl-3">Email</label>
            <input
              type="email"
              className="border p-2 rounded-3xl outline-none"
              placeholder="exaple@gojo.com"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label className="text-sm pl-3">Password</label>
              <div className="text-blue-600 text-sm hover:underline">
                Forgot Password ?
              </div>
            </div>
            <input
              type="password"
              className="border p-2 rounded-3xl outline-none"
              placeholder="**********"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="p-2 border w-1/3 rounded-3xl bg-[#0e2865ef] hover:bg-[#0e2865d1] text-white">
              login
            </button>
          </div>
          <div className="flex justify-between pb-16">
            <div className="text-sm">Don't have account?</div>
            <div className="text-blue-600 text-sm hover:underline">
              <Link to="/signup">create new account</Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Login;
