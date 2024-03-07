import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
import { Link } from "react-router-dom";

function Navbar() {
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
        <button>
          <Link to='/'>
          <span className="font-text mr-2">@email </span><FontAwesomeIcon className="fa-xl text-right" icon={faSignOutAlt} />
          
          </Link>
          
        </button>
      </div>
    </div>
  );
}

export default Navbar;
