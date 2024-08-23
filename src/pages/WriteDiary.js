import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const WriteDiary = () => {
  const { templateId } = useParams();
  const accessToken = useSelector(state => state.auth.accessToken);
  const userId = useSelector(state => state.auth.user?._id);
  const history = useNavigate();

  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const [valueDate, setValueDate] = useState(dayjs());

  const [templateName, setTemplateName] = useState("");
  const [templateColor, setTemplateColor] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/get-template-by-id/${templateId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}` // or get token from redux store
              }
        });
        const { name, color } = response.data;
        setTemplateName(name);
        setTemplateColor(color);
      } catch (error) {
        console.error("Error fetching template:", error);
      }
    };

    fetchTemplate();
  }, [templateId, accessToken]);

  const handleSave = async () => {
    try {
      const formattedDate = valueDate.format('YYYY-MM-DD'); // Format the date as needed

      const postData = {
        user_id: userId,
        header: header,
        text: text,
        template_id: templateId,
        date: formattedDate
      };

      const response = await axios.post('http://localhost:8000/api/create-journal', postData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}` // or get token from redux store
          }
      });

      console.log('Post diary response:', response.data);

      // Show success modal
      setShowSuccessModal(true);

      // Redirect to user page after successful post
      setTimeout(() => {
        history('/user'); // Change the path as per your project setup
      }, 2000); // Redirect after 2 seconds (adjust as needed)

    } catch (error) {
      console.error('Error posting diary:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-9 mt-7 flex">
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem>
                <DateCalendar
                  className=""
                  value={valueDate}
                  onChange={(newValue) => setValueDate(newValue)}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className={`w-3/4 ml-14 mb-24 bg-white rounded-3xl shadow-lg`}>
          <div className="mt-5 mx-7 font-text">
            <div>
              <p className="mb-2 text-xl font-bold">{templateName}</p>
            </div>
            <div className={` ${templateColor} mb-3 ml-4 `}>
              <ul className="list-disc text-sm">
                <li>Những việc đã làm trong ngày bình yên?</li>
                <li>Bình yên đến từ đâu?</li>
                <li>Người giúp bạn cảm thấy an yên trong tâm hồn là ai?</li>
                <li>Bạn cảm thấy bình yên khi ở đâu?</li>
              </ul>
            </div>
            <div className="">
              <label
                htmlFor="default-input"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Tiêu đề
              </label>
              <input
                type="text"
                id="default-input"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <ReactQuill
                style={{ height: "30rem" }}
                className=""
                theme="snow"
                value={text}
                onChange={setText}
              />
            </div>
          </div>
          <div className="relative mt-14 mx-7 mb-1">
            <button
              type="button"
              onClick={handleSave}
              className="text-black font-text bg-secondary cursor-pointer transition-all duration-300 hover:text-white hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
      <Footer />
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-xl font-semibold mb-4">Tạo nhật ký thành công!</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteDiary;
