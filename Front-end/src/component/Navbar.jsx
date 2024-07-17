import Logo from "../asset/Gojo-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <div className="flex h-20 bg-[#716b6b] justify-between items-center"> */}
      <div className="flex h-20 justify-between items-center">
        <Link to={"/"}>
          <img src={Logo} alt="gojo housing" className="w-1/7 h-20" />
        </Link>

        <div className="flex gap-8 justify-center items-center">
          <div className="flex text-l sm:text-3xl gap-7">
            <Link to={"/"}>
              <button> home</button>
            </Link>
            <Link to={"/howitworks"}>
              <p>How it works?</p>
            </Link>
          </div>
          <div className="flex gap-3">
            <Link
              to={"/login"}
              className="w-4/5 sm:w-1/2  m-2 py-3 px-7 bg-[#0E2865] text-white hover:bg-white hover:text-[#0E2865] border  border-[#0E2865] rounded-3xl font-bold"
            >
              <button> login</button>
            </Link>
            <Link
              to={"/signup"}
              className="w-4/5 sm:w-1/2 m-2 py-3 px-7  hover:bg-[#0E2865]  hover:text-white  border border-[#0E2865] rounded-3xl font-bold"
            >
              <button> SignUp</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
