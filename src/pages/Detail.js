import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dayjs from "dayjs";
import axios from "axios";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useParams, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import Modal from 'react-modal';
import './style.css'



function Detail() {
  const [valueDate, setValueDate] = useState(dayjs());
  const { journalId } = useParams();
  const [value, setValue] = useState('');
  const userId = useSelector(state => state.auth.user?._id);
  const [valueHeader, setValueHeader] = useState('')
  const [valueTemplate, setValueTemplate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    // Fetch journal details when component mounts
    fetchJournalDetails();
  }, []);

  const fetchJournalDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/get-journal-by-id/${journalId}`, {
        params: {
          user_id: userId
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}` // or get token from redux store
        }
      });
      const { text, date, header, template_id } = response.data; // Assuming response has 'text' and 'date' fields
      setValue(text);
      setValueDate(dayjs(date));
      setValueHeader(header);
      setValueTemplate(template_id.name)
    } catch (error) {
      console.error('Error fetching journal details:', error);
    }
  };

  const handleSave = async () => {
    history(`/edit/${journalId}`);
  };

  const handleDelete = async () => {
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/delete-journal/${journalId}`, {
        params: {
          user_id: userId
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}` // or get token from redux store
        }
      });
      console.log('Journal entry deleted successfully');
      setIsModalOpen(false);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error('Error deleting journal:', error);
    }
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    history('/user');
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
                  <label htmlFor="default-input" className="block text-xs font-medium text-gray-900 dark:text-white">Tiêu đề</label>
                  <h6 className="underline text-lg mb-5 font-semibold">{valueHeader}</h6>
                </div>
                <div className="text-base">
                  {parse(value)}
                </div>
              </div>
              <div className=" mt-16 mx-7">
                <button type="button" className=" text-black font-text bg-secondary cursor-pointer transition-all duration-300 hover:text-white hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleSave}>
                  Sửa
                </button>
                <button type="button" className="ml-7 text-black font-text bg-secondary cursor-pointer transition-all duration-300 hover:text-white hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleDelete}>
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-800 text-white text-center py-4"/>
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
        contentLabel="Xóa thành công"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Nhật ký đã được xóa thành công!</h2>
        <button onClick={closeSuccessModal}>Đóng</button>
      </Modal>
    </div>
  );
}

export default Detail;
