import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import personone from "../asset/Gojo-logo.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SignUp = () => {
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = {
      full_name: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      password: document.getElementById("cpassword").value,
    };

    try {
      let res = await axios.post(
        "http://localhost:80/Udemy-clone/Backend/signup.php",
        formData
      );
      console.log(res.data);
      if (res.data.status === "success") {
        navigate("/login");
      } else {
        setErrors(res.data.detail);
      }
    } catch (err) {
      console.log(err);
      setErrors("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-white h-screen font-family-karla flex flex-col justify-center items-center">
        <div className="bg-[#0E2865] w-3/5 flex  items-center  gap-[150px] h-11/12 p-5 ">
          <div className="text-white hover:bg-[ #7e82898e] hover:text-black  ">
            <Link to={"/"}>
            <ArrowBackIosIcon fontSize="large" />
            </Link>
          </div>
          <p className="text-center text-white text-4xl">welcome back </p>
        </div>

        <div className="flex flex-row justify-center items-center w-3/5">
          <div className="w-1/2 flex flex-col">
            <form className="w-3/4 flex flex-col pt-1 md:pt-3" onSubmit={handleSubmit}>
              <div className="flex flex-col pt-1">
                <label className="text-sm">Fulname</label>
                <div className="border border-[#a2a6ab8e] rounded-xl">
                 <input type="text"
                  id="name"
                  placeholder="Full name"
                  className="p-1 bg-white rounded-full focus:outline-none"
                />
                </div>
              </div>
              <div className="flex flex-col pt-1">
                <label className="text-sm">Email</label>
                <div className="border border-[#a2a6ab8e] rounded-xl">
                 <input type="email"
                  id="email"
                  placeholder="Email"
                  className="p-1 bg-white rounded-full focus:outline-none"
                />
                </div>
              </div>
             

              <div className="flex flex-col pt-1">
                <label className="text-sm m-2">Password</label>
                <div className="border border-[#a2a6ab8e] rounded-xl ">
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="p-1 bg-white rounded-full  focus:outline-none"/>
              </div>
              </div>
              <div className="flex flex-col pt-1">
                <label className="text-sm m-2">confirm password</label>
                <div className="border border-[#a2a6ab8e] rounded-xl ">
                <input
                  type="password"
                  id="cpassword"
                  placeholder="********"
                  className="p-1 bg-white rounded-full  focus:outline-none"/>

              </div>
              </div>

   

              <div className=" flex justify-center">

              <input
                type="submit"
                value="Sign Up"
                className="bg-[#0E2865] text-white font-bold text-lg rounded-full w-1/2 p-2 mt-8"
              />
              </div>
            </form>
            <div className="flex justify-between text-sm w-3/4">
                <p> Already have account?</p>
              <Link to="/login">
                <button className="underline text-blue-500">
                  login
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex justify-center ">
            <div>
              <img src={personone} alt="people" className="h-[300px] rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
