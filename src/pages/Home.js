import React from "react";
import "../components/Navbar.js";
import Footer from "../components/Footer.js";
import NavbarHome from "../components/NavbarHome.js";
import logo1 from "../components/images/diarylogo.jpg";
function Home() {
  return (
    <div className="bg-yellow-50 min-h-screen">
      <NavbarHome />
      <div className="font-text">
        <div className="flex items-center justify-center">
            <div className="float-left">
            <img src={logo1} alt="" />
            </div>
            <div className="float-left p">
            <p>Create your Diary here!</p>
            <button>Get started</button>
            </div>
        </div>
        
      </div>
      <div >
      <Footer />
      </div>
      
    </div>
  );
}

export default Home;
