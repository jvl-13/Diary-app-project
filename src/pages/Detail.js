import React, { useState } from "react";
import "../components/Navbar.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Common from "../components/Common.js";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Detail() {
  const [value, setValue] = useState('Vì sao ta có hai mắt, hai tai, hai lỗ mũi, hai tay, hai chân? Nhưng chỉ có một cái đầu, một cái miệng và một trái tim. <p>Có đôi lần rơi vào trạng thái hoang mang, hụt hẫng, chới với, vô định trước tất cả những gì cuộc sống mang đến cho mình, tôi trở nên dè dặt, đắn đo, ngập ngừng và sợ hãi con đường phía trước. Nhưng rồi tôi hiểu, nếu lót dưới bước chân mình một niềm tin mãnh liệt vào cuộc sống thì nỗi sợ hãi sẽ không là gì cả.</p> <p>Chẳng ai trong chúng ta sống mà không có niềm tin, chỉ là niềm tin tồn tại như thế nào thôi. Bởi đây không phải thứ đồ vật có thể nhìn, sờ mó, cầm nắm, và dĩ nhiên càng không thể thấy được nó khi ta bao phủ mình một sự hoài nghi về chính bản thân, cũng như sự hoài nghi về cuộc sống.</p> <div>Diary writing is a personal form of writing where a person maintains a diary to write about his/her personal life or a situation. Writing a diary is quite possibly the closest to home and casual classes of composing. It can be written in any language as per the comfort of the writer, whether English or Hindi. A journal composing can be founded on an encounter, a scene, a portrayal or portrayal of a certain occasion, or some other thing or movement that the author thinks about worth writing in his own journal.</div>');
  return (
    <div className="bg-yellow-50 min-h-screen">
      <Navbar />
      <div className="mx-9 mt-7 flex ">
        <Common />
        <div className="w-3/4 ml-14 mb-7 bg-white rounded-3xl shadow-lg overflow-auto">
          <div className="mt-5 mx-7 font-text">
            <div>
              <p className="mb-2 text-xl font-bold">Freestyle</p>
            </div>
            <div className="">
              <label for="default-input" class="block text-sm font-medium text-gray-900 dark:text-white">Tiêu đề</label>
              <h6 className="underline mb-5 font-semibold">Thắc mắc mới</h6>
            </div>
            <div>
            <ReactQuill style={{height: "34.5rem"}} className="" theme="snow" value={value} onChange={setValue} />
            </div>
            
          </div>
          <div className="absolute mt-16 mx-7 ">
            <button type="button" className=" text-black font-text bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Edit</button>

              <button type="button" className="ml-7 text-black font-text bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Delete</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Detail