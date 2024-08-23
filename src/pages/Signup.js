import React, { useState } from "react";
import axios from "axios";
import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
import Modal from "react-modal";
Modal.setAppElement("#root");

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Thêm state để lưu trữ thông báo
  const [isError, setIsError] = useState(false); // Thêm state để lưu trữ trạng thái thông báo
  const [isChecked, setIsChecked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      openModal("Vui lòng click vào ô điều khoản và chính sách.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/api/register", 
      JSON.stringify({
        email: email,
        password: password,
      }), {
        headers: {'Content-Type' : 'application/json'}
      });

      if (response.data.success) {
        setMessage(response.data.msg); // Lưu thông báo đăng ký thành công vào state
        setIsError(false); // Đặt trạng thái thông báo thành công
      }
      console.log(response.data);
      // Xử lý kết quả trả về từ backend, ví dụ: hiển thị thông báo đăng ký thành công, chuyển hướng đến trang đăng nhập, v.v.
    } catch (error) {
      console.error(error.response.data);
      setMessage(error.response.data.msg || "Đăng ký thất bại. Vui lòng thử lại."); // Lưu thông báo lỗi vào state
      setIsError(true); // Đặt trạng thái thông báo lỗi
    }
  };

  return (
    <div>
      <NavbarHome />
      <section className=" dark:bg-gray-900">
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
                Đăng ký tài khoản
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
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
                    required=""
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
                    required=""
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="ml-3 text-sm">
                <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        (*) Điều khoản và chính sách
                      </label>
                    </div>
                <button
                  type="submit"
                  className="w-full text-black font-medium rounded-lg text-base px-5 py-2.5 text-center bg-secondary cursor-pointer transition-all duration-300 hover:text-white hover:bg-primary"
                >
                  Đăng ký
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Bạn đã có tài khoản?{" "}
                  <a
                    href="/"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Đăng nhập
                  </a>
                </p>
              </form>
              {message && (
                <p
                  className={`text-sm font-medium ${
                    isError ? "text-red-500 dark:text-red-400" : "text-green-500 dark:text-green-400"
                  }`}
                >
                  {message}
                </p>
              )}
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

export default Signup;
