import React from "react";
import "../components/Navbar.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Templates from "../components/Templates.js";
import Common from "../components/Common.js";

function User() {
  return (
    <div className="bg-yellow-50 min-h-screen">
      <Navbar />
      <div className="mx-9 mt-7 flex ">
        <Common />
        <div className="w-3/4 ml-14 mb-7 bg-white rounded-3xl shadow-lg overflow-auto">
          <Templates />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default User;
