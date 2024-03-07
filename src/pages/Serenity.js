import React, { useState } from "react";
import "../components/Navbar.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Common from "../components/Common.js";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Serenity() {
  const [value, setValue] = useState('');
  return (
    <div className="bg-yellow-100 min-h-screen">
      <Navbar />
      <div className="mx-9 mt-7 flex ">
        <Common />
        <div className="w-3/4 ml-14 mb-7 bg-white rounded-3xl shadow-lg overflow-auto">
          <div className="mt-5 mx-7 font-text">
            <div>
              <p className="mb-2 text-xl font-bold">Yên bình</p>
            </div>
            <div className="bg-yellow-50 mb-3 ml-4">
                <ul className="list-disc text-sm">
                    <li>Những việc đã làm trong ngày bình yên?</li>
                    <li>Bình yên đến từ đâu?</li>
                    <li>Người giúp bạn cảm thấy an yên trong tâm hồn là ai?</li>
                    <li>Bạn cảm thấy bình yên khi ở đâu?</li>
                </ul>
            </div>
            <div className="">
              <label for="default-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Tiêu đề</label>
              <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
            <ReactQuill style={{height: "28rem"}} className="" theme="snow" value={value} onChange={setValue} />
            </div>
            
          </div>
          <div className="absolute mt-16 mx-7 ">
            <button type="button" className=" text-black font-text bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Serenity