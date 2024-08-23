import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Modal from "react-modal";
import { loginSuccess, loginFailure } from "../redux/actions/authActions"; // Đảm bảo đường dẫn này đúng
import "./style.css"
import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
// Set the app element for accessibility
Modal.setAppElement("#root");

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modalIsOpen) {
      const timer = setTimeout(() => {
        setModalIsOpen(false);
      }, 3000); // Thời gian hiển thị modal là 3 giây (3000 miliseconds)
      return () => clearTimeout(timer);
    }
  }, [modalIsOpen]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const openModal = (msg) => {
    setMessage(msg);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!isChecked) {
    //   openModal("Vui lòng click vào ô điều khoản và chính sách.");
    //   return;
    // }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        dispatch(loginSuccess(response.data));
        localStorage.setItem("accessToken", response.data.accessToken);
        openModal("Đăng nhập thành công!");
        setTimeout(() => {
          window.location.href = "/user";
        }, 1000); // Redirect sau 1 giây
      } else {
        openModal(response.data.msg);
        dispatch(loginFailure(response.data.msg));
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 402:
            openModal("Email hoặc mật khẩu không đúng");
            break;
          case 403:
            openModal("Vui lòng xác thực email");
            break;
          case 404:
            openModal("Vui lòng nhập đầy đủ thông tin");
            break;
          case 400:
          default:
            openModal("Hệ thống bị lỗi");
            break;
        }
      } else {
        openModal("An unexpected error occurred.");
      }
      dispatch(loginFailure(message));
    }
  };

  return (
    <div className="">
      <NavbarHome />
      <section className="  dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="font-brand flex items-center mb-6 text-4xl font-bold text-gray-900 dark:text-white"
          >
            MiNook
          </a>
          <div className="font-text w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Đăng nhập
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={handleEmailChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      {/* <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      /> */}
                    </div>
                    {/* <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        (*) Điều khoản và chính sách
                      </label>
                    </div> */}
                  </div>
                  <a
                    href="/"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-black font-medium rounded-lg text-base px-5 py-2.5 text-center bg-secondary cursor-pointer transition-all duration-300 hover:text-white hover:bg-primary"
                >
                  Đăng nhập
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Bạn chưa có tài khoản?{" "}
                  <a
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Đăng ký
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Notification Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2 className="modal-message">{message}</h2>
        </div>
      </Modal>
    </div>
  );
}

export default Signin;
