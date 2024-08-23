import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-quill/dist/quill.snow.css";
import dayjs from "dayjs";
import axios from "axios";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./style.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Edit() {
  const [valueDate, setValueDate] = useState(dayjs());
  const { journalId } = useParams();
  const [value, setValue] = useState("");
  const userId = useSelector((state) => state.auth.user?._id);
  const [valueHeader, setValueHeader] = useState("");
  const [valueTemplate, setValueTemplate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch journal details when component mounts
    fetchJournalDetails();
  }, []);

  const fetchJournalDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/get-journal-by-id/${journalId}`,
        {
          params: {
            user_id: userId,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // or get token from redux store
          },
        }
      );
      const { text, date, header, template_id } = response.data; // Assuming response has 'text' and 'date' fields
      setValue(text);
      setValueDate(dayjs(date));
      setValueHeader(header);
      setValueTemplate(template_id.name);
    } catch (error) {
      console.error("Error fetching journal details:", error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:8000/api/update-journal/${journalId}`,
        {
          text: value,
          date: valueDate,
          header: valueHeader,
        },
        {
          params: {
            user_id: userId,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // or get token from redux store
          },
        }
      );
      console.log("Journal entry updated successfully");
      setModalMessage("Nhật ký đã được lưu thành công!");
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Error updating journal:", error);
    }
  };

  const handleDelete = async () => {
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8000/api/delete-journal/${journalId}`,
        {
          params: {
            user_id: userId,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // or get token from redux store
          },
        }
      );
      console.log("Journal entry deleted successfully");
      setIsModalOpen(false);
      setModalMessage("Nhật ký đã được xóa thành công!");
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Error deleting journal:", error);
    }
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    if (modalMessage === "Nhật ký đã được xóa thành công!") {
      navigate("/user");
    } else {
      navigate(`/detail/${journalId}`);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
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
            <div className="w-3/4 ml-14 mb-7 bg-white rounded-3xl shadow-lg overflow-auto">
              <div className="mt-5 mx-7 font-text">
                <div>
                  <p className="mb-2 text-xl font-bold">{valueTemplate}</p>
                </div>
                <div className="">
                  <label
                    htmlFor="default-input"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    value={valueHeader}
                    onChange={(e) => setValueHeader(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <ReactQuill
                    style={{ height: "30rem" }}
                    className=""
                    theme="snow"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>
              <div className="mt-16 mx-7">
                <button
                  type="button"
                  className="text-black font-text bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={handleSave}
                >
                  Lưu
                </button>
                
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-800 text-white text-center py-4" />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Xác nhận xóa"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Bạn có chắc chắn muốn xóa nhật ký này không?</h2>
        <button onClick={confirmDelete}>Có</button>
        <button onClick={() => setIsModalOpen(false)}>Không</button>
      </Modal>
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        contentLabel="Thành công"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>{modalMessage}</h2>
        <button onClick={closeSuccessModal}>Đóng</button>
      </Modal>
    </div>
  );
}

export default Edit;
