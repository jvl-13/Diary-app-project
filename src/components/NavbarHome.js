import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
import { Link } from "react-router-dom";

function NavbarHome() {
  return (
    <div className="bg-yellow-100 h-16 items-center flex">
      <div className="ml-7 w-1/5">
        <a
          href="/"
          className="block cursor-pointer py-1.5 font-brand leading-relaxed tracking-normal text-inherit antialiased text-3xl"
        >
          DEARDIARY
        </a>
      </div>
      <div className="w-3/5 relative py-2.5 leading-relaxed font-sans text-right">
        <input
          type="search"
          name="serch"
          placeholder="Search. . . "
          className="bg-white font-text w-64 h-10 px-4 rounded-full text-sm focus:outline-none  tracking-wider"
        ></input>
        <button type="submit" className="ml-3">
          <FontAwesomeIcon className="fa-xl" icon={faSearch} />
        </button>
      </div>
      <div className="mr-7 w-1/5 text-right">
      <button type="button" class="focus:outline-none text-black bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
        <Link to="/signup" >Sign up</Link></button>
      <button type="button" class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
        <Link to="/signin">Sign in</Link>
      </button>
      </div>
    </div>
  );
}

export default NavbarHome;
