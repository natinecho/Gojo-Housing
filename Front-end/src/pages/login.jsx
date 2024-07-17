import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import personone from "../asset/personone.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });

      let data = response.data
      console.log(data)
      if(data.user !== undefined){
          localStorage.setItem('full_name',data.user.full_name)
          localStorage.setItem('email',data.user.email)
          localStorage.setItem('id',data.user.id)
          localStorage.setItem('phone',data.user.phone)
          localStorage.setItem('posts',data.user.posts)
          navigate('/')
      }

    } catch (error) {
      console.error("There was an error logging in!", error);
      setError("An error occurred. Please try again.");
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
            <form className="w-3/4 flex flex-col pt-3 md:pt-8" onSubmit={handleLogin}>
              <div className="flex flex-col pt-4">
                <label className="text-sm m-2">Email</label>
                <div className="border border-[#a2a6ab8e] rounded-full">
                 <input type="email"
                  id="email"
                  placeholder="Email"
                  className="p-2 bg-white rounded-full focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                </div>
              </div>


              <div className="flex flex-col pt-4">
                <div className="flex justify-between ">
                <label className="text-sm m-2">Password</label>
                <Link
                    to="/forgot"
                    className="text-center text-blue-500"
                >
                    Forget password?
                </Link>
                </div>
                <div className="border border-[#a2a6ab8e] rounded-full ">
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="p-2 bg-white rounded-full  focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /></div>
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <div className=" flex justify-center">

              <input
                type="submit"
                value="Log In"
                className="bg-[#0E2865] text-white font-bold text-lg rounded-full w-1/2 p-2 mt-8"
              />
              </div>
            </form>
            <div className="flex justify-between text-sm w-3/4 pt-6 pb-8">
                <p>Don't have account?</p>
              <Link to="/signup">
                <button className="underline text-blue-500">
                  Create new account
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

export default Login;
