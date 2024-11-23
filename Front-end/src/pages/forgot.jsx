import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Forgot = () => {const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = {
      email: document.getElementById("email").value,
    };

    try {
      let res = await axios.post(
        "http://localhost:80/Udemy-clone/Backend/forgot.php",
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
      <div className="bg-white h-screen w-3/4 font-family-karla flex flex-col justify-center items-center">
        <div className="bg-[#0E2865] w-3/5 flex  items-center  gap-[150px] h-11/12 p-5 ">
          <div className="text-white hover:bg-[ #7e82898e] hover:text-black  ">
            <ArrowBackIosIcon fontSize="large" />
          </div>
          <p className="text-center text-white text-4xl"></p>
        </div>

        <div className="flex flex-row justify-center items-center w-3/5 mt-10">
          <div className="w-3/4 flex flex-col">
            <form className="flex flex-col pt-1 md:pt-3" onSubmit={handleSubmit}>
            <div className="font-light w-full">Please enter the email address linked with your account.</div>
            
              
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
             

   

              <div className=" flex justify-center">

              <input
                type="submit"
                value="send"
                className="bg-[#0E2865] text-white font-bold text-lg rounded-full w-1/2 p-2 mt-8"
              />
              </div>
            </form>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Forgot;
