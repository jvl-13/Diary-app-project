import React from 'react'
import DateCalendarValue from "./DateCalendar.js";

function Common() {
  return (
        <div className="w-1/4 ">
          <div className="bg-white  rounded-3xl w-80 shadow-lg">
            <DateCalendarValue />
          </div>
          <div
            style={{ height: "27rem" }}
            className="bg-white font-text rounded-3xl w-80 mt-6 mb-7 shadow-lg overflow-auto"
          >
            <a href="/detail">
              <div className="m-4">
                <hr className="boder-2 border-black h-1"></hr>
                <p className="font-bold bg-violet-500 text-lg">
                  27/02/2024<span> - Lo âu</span>{" "}
                </p>
                <p className="font-semibold underline underline-offset-1">
                  Thắc mắc mới
                </p>
                <p className="mb-3">
                  Vì sao ta có hai mắt, hai tai, hai lỗ mũi, hai tay, hai chân?
                  Nhưng chỉ có một cái đầu, một cái miệng và một trái tim.
                </p>
                <hr className="boder-2 border-black h-1"></hr>
              </div>
            </a>
            <a href="/detail">
              <div className="m-4">
                <hr className="boder-2 border-black h-1"></hr>
                <p className="font-bold bg-slate-200 text-lg">
                  28/02/2024<span> - Freestyle</span>{" "}
                </p>
                <p className="font-semibold underline underline-offset-1">
                  Cuộc sống
                </p>
                <p className="mb-3">
                  Cuộc sống mang đến cho ta tất cả những gì nó muốn, chứ không
                  phải những gì ta muốn, và dù muốn hay
                </p>
                <hr className="boder-2 border-black h-1"></hr>
              </div>
            </a>
            <a href="/detail">
              <div className="m-4">
                <hr className="boder-2 border-black h-1"></hr>
                <p className="font-bold bg-yellow-200 text-lg">
                  29/02/2024<span> - Vui vẻ</span>{" "}
                </p>
                <p className="font-semibold underline underline-offset-1">
                  Niềm tin
                </p>
                <p className="mb-3">
                  Niềm tin là một ngôn từ hết sức đơn giản mà ai cũng có thể nói
                  được, đọc được. Nhưng để có được niềm tin, ta
                </p>
                <hr className="boder-2 border-black h-1"></hr>
              </div>
            </a>
            <a href="/detail">
              <div className="m-4">
                <hr className="boder-2 border-black h-1"></hr>
                <p className="font-bold bg-lime-300 text-lg">
                  01/03/2024<span> - Tình yêu</span>{" "}
                </p>
                <p className="font-semibold underline underline-offset-1">
                  Niềm tin
                </p>
                <p className="mb-3">
                  Niềm tin là một ngôn từ hết sức đơn giản mà ai cũng có thể nói
                  được, đọc được. Nhưng để có được niềm tin, ta
                </p>
                <hr className="boder-2 border-black h-1"></hr>
              </div>
            </a>
          </div>
        </div>
  )
}

export default Common