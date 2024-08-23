import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
import { Link } from "react-router-dom";

function NavbarHome() {
  return (
    // <div className="bg-yellow-100 h-16 items-center flex">
    //   <div className="ml-7 w-1/5">
    //     <a
    //       href="/"
    //       className="block cursor-pointer py-1.5 font-brand leading-relaxed tracking-normal text-inherit antialiased text-3xl"
    //     >
    //       MiNook
    //     </a>
    //   </div>
    //   <div className="w-3/5 relative py-2.5 leading-relaxed font-sans text-right">
    //     {/* <input
    //       type="search"
    //       name="serch"
    //       placeholder="Search. . . "
    //       className="bg-white font-text w-64 h-10 px-4 rounded-full text-sm focus:outline-none  tracking-wider"
    //     ></input>
    //     <button type="submit" className="ml-3">
    //       <FontAwesomeIcon className="fa-xl" icon={faSearch} />
    //     </button> */}
    //   </div>
    //   <div className="mr-7 w-1/5 text-right">
    //   <button type="button" className="focus:outline-none text-black bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
    //     <Link to="/signup" >Sign up</Link></button>
    //   <button type="button" className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
    //     <Link to="/signin">Sign in</Link>
    //   </button>
    //   </div>
    // </div>
    <div className="bg-white md:px-8 p-4 max-w-screen-2xl mx-auto text-primary">
      <div className=" items-center container mx-auto flex justify-between font-medium">
        <div>
          <a
            href="/"
            className="text-3xl cursor-pointer font-brand font-semibold flex items-center space-x-3 text-primary"
          >
            MiNook
          </a>
        </div>

        <div className="md:space-x-6  font-text md:flex items-center">
          <button className="text-[15px] bg-secondary cursor-pointer md:py-2 md:px-2 py-2 px-1 transition-all duration-300 rounded hover:text-white hover:bg-primary">
            <Link to="/signin">Đăng nhập</Link>
          </button>
          <button className="text-[15px] bg-secondary cursor-pointer py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-primary">
            <Link to="/signup">Đăng ký</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarHome;
