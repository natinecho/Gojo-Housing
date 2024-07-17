import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import personone from "../asset/Gojo-logo.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    console.log(username)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // const cpassword = document.getElementById("cpassword").value;

    // Clear previous errors
    setErrors({});

    // Form validation
    let newErrors = {};
    if (!username) newErrors.username = "Full name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    // if (password !== cpassword) newErrors.cpassword = "Passwords do not match.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    let formData = {
      username,
      email,
      password,
      // cpassword: cpassword,
    };

    console.log(formData);
    try {
      let res = await axios.post("/api/auth/register", formData, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      console.log(res.data);
      if (res.data.status === "success") {
        navigate("/login");
      } else {
        setErrors({ server: res.data.detail });
      }
    } catch (err) {
      console.log(err);
      setErrors({ server: "An error occurred. Please try again." });
    }
  };

  return (
    <>
      <div className="bg-white h-screen font-family-karla flex flex-col justify-center items-center">
        <div className="bg-[#0E2865] w-3/5 flex items-center gap-[150px] h-11/12 p-5">
          <div className="text-white hover:bg-[ #7e82898e] hover:text-black">
            <Link to={"/"}>
              <ArrowBackIosIcon fontSize="large" />
            </Link>
          </div>
          <p className="text-center text-white text-4xl">Welcome back</p>
        </div>

        <div className="flex flex-row justify-center items-center w-3/5">
          <div className="w-1/2 flex flex-col">
            <form className="w-3/4 flex flex-col pt-1 md:pt-3" onSubmit={handleSubmit}>
              <div className="flex flex-col pt-1">
                <label className="text-sm">Full name</label>
                <div className="border border-[#a2a6ab8e] rounded-xl">
                  <input
                    type="text"
                    id="username"
                    placeholder="Full name"
                    className="p-1 bg-white rounded-full focus:outline-none"
                  />
                </div>
                {errors.username && <span className="text-red-500 text-sm">{errors.full_name}</span>}
              </div>
              <div className="flex flex-col pt-1">
                <label className="text-sm">Email</label>
                <div className="border border-[#a2a6ab8e] rounded-xl">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="p-1 bg-white rounded-full focus:outline-none"
                  />
                </div>
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>
              <div className="flex flex-col pt-1">
                <label className="text-sm m-2">Password</label>
                <div className="border border-[#a2a6ab8e] rounded-xl">
                  <input
                    type="password"
                    id="password"
                    placeholder="********"
                    className="p-1 bg-white rounded-full focus:outline-none"
                  />
                </div>
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
              </div>
              <div className="flex flex-col pt-1">
                <label className="text-sm m-2">Confirm password</label>
                <div className="border border-[#a2a6ab8e] rounded-xl">
                  <input
                    type="password"
                    id="cpassword"
                    placeholder="********"
                    className="p-1 bg-white rounded-full focus:outline-none"
                  />
                </div>
                {errors.cpassword && <span className="text-red-500 text-sm">{errors.cpassword}</span>}
              </div>

              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Sign Up"
                  className="bg-[#0E2865] text-white font-bold text-lg rounded-full w-1/2 p-2 mt-8"
                />
              </div>
              {errors.server && <span className="text-red-500 text-sm text-center mt-2">{errors.server}</span>}
            </form>
            <div className="flex justify-between text-sm w-3/4">
              <p>Already have an account?</p>
              <Link to="/login">
                <button className="underline text-blue-500">Login</button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
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
