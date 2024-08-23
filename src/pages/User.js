import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Common from "../components/Common.js";
import Modal from 'react-modal'; // Import Modal component
// import StoreCheck from "../components/StoreCheck"; // Đảm bảo đường dẫn này đúng

const User = () => {
  const [templates, setTemplates] = useState([]);
  const [showModal, setShowModal] = useState(false); // State for showing modal

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/get-all-template", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}` // hoặc lấy token từ redux store
          }
        });
        setTemplates(response.data);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchTemplates();
  })
    // Check local storage to see if modal has been shown before
  //   const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");

  //   if (!hasModalBeenShown) {
  //     // Show modal after 10 seconds
  //     const timer = setTimeout(() => {
  //       setShowModal(true);
  //       // Mark modal as shown in localStorage
  //       localStorage.setItem("hasModalBeenShown", "true");
  //     }, 10000);

  //     return () => clearTimeout(timer); // Clean up timer
  //   }
  // }, []);

  // // Function to handle modal close
  // const closeModal = () => {
  //   setShowModal(false);
  // };

  // // Function to handle navigating to DASS21 page
  // const navigateToDass21 = () => {
  //   window.location.href = "/form"; // Replace with your DASS21 page route
  // };

  return (
    <div className="text-primary min-h-screen">
      <Navbar />
      <div className="mx-9 mt-7 flex ">
        <Common />
        <div className="w-3/4 ml-14 mb-7 bg-[#f5f4f4] rounded-3xl shadow-lg overflow-auto">
          <h3 className="mx-7 my-7 font-text font-bold">TEMPLATES</h3>
          <div className=" grid grid-cols-4 gap-5 mx-7 text-center">
            {templates.map(template => (
              <a 
                key={template._id} 
                href={`/post/${template.link}/${template._id}`} // Liên kết đến trang viết nhật ký với ID template
                className={`${template.color} h-24 rounded-xl pt-8 px-1 font-text font-semibold shadow-md`}
              >
                {template.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal for DASS21 survey */}
      {/* <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="DASS21 Survey Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Chào mừng bạn đến với DASS21 Survey</h2>
          <p className="text-lg mb-4">Vui lòng nhấn vào nút dưới để điền form khảo sát.</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            onClick={navigateToDass21}
          >
            Điền khảo sát
          </button>
        </div>
      </Modal> */}
    </div>
  );
};

export default User;
