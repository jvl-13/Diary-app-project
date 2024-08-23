import React from "react";
import "../components/Navbar.js";
import Footer from "../components/Footer.js";
import NavbarHome from "../components/NavbarHome.js";
import "../App.css";
import setting from "../assets/setting.PNG";
import time from "../assets/time.PNG";
import personal from "../assets/private.PNG";
import logo from "../assets/online-diary.png";
import feather from "../assets/feather.PNG";
import {motion} from "framer-motion"
import { fadeIn } from "../variants.js";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="">
      <div>
        <NavbarHome />
      </div>

      <div className="font-text md:px-12 p-4 max-w-screen-2xl mx-auto ">
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-12 px-4 py-9">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            >
              <img src={logo} alt="" className="lg:h-[370px] w-[750px]" />
            </motion.div>
            
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.7}}
            >
            <div className="md:w-3/5 lg:w-3/5">
              <h2 className="md:text-5xl text-4xl font-bold text-white mb-6 leading-[110px]">
                Viết nhật ký theo dõi cảm xúc mỗi ngày với MiNook
              </h2>
              <p className="text-primary text-[17px] mb-8">
                Một nền tảng viết nhật ký với sự đa dạng về template cảm xúc,
                nơi lưu trữ những câu chuyện cá nhân thường nhật của chính bạn.{" "}
                <br></br>
                Trải nghiệm mới mẻ với các tính năng phân tích tâm lý và cảm xúc
                tự động.
              </p>
              <div>
                <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                  Đăng ký ngay!
                </button>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className=" font-text my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <motion.div
           variants={fadeIn("right", 0.1)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}}
           className="lg:w-1/4 ">
            <h3 className="text-4xl text-primary font-bold lg:w-1/2 mb-3">
              Lợi ích khi dùng MiNook
            </h3>
            <p className="text-lg">
              Một nền tảng bảo mật, an toàn, tiện lợi cho mỗi cá nhân để viết
              lại câu chuyện của bản thân theo cách của riêng mình!
            </p>
          </motion.div>
          <motion.div 
           variants={fadeIn("up", 0.1)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}}
           className="w-full lg:w-3/4 ">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-3 items-start md:gap-8 ">
              <div className="bg-[rgba(255, 255,255,0.04)] rounded-[35px] h-80 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300">
                <div>
                  <img src={personal} alt="" ></img>
                  <h5 className="text-xl font-semibold text-primary px-5 text-center mt-2">
                    Thông tin được bảo mật
                  </h5>
                </div>
              </div>
              <div className="bg-[rgba(255, 255,255,0.04)] rounded-[35px] h-80 shadow-3xl p-8  flex justify-center items-center hover:-translate-y-4 transition-all duration-300 md:mt-14">
                <div>
                  <img src={time} alt="" ></img>
                  <h5 className="text-xl font-semibold text-primary px-5 text-center mt-2">
                    Tiện lợi và nhanh chóng
                  </h5>
                </div>
              </div>
              <div className="bg-[rgba(255, 255,255,0.04)] rounded-[35px] h-80 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300">
                <div>
                  <img src={setting} alt=""></img>
                  <h5 className="text-xl font-semibold text-primary px-5 text-center mt-2">
                    Dễ dàng sử dụng
                  </h5>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="font-text md:px-14 p-4 max-w-s mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
           variants={fadeIn("right", 0.1)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}}className="md:w-1/2">
            <img src={feather} alt="" />
          </motion.div>

          <motion.div 
           variants={fadeIn("left", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount:0.7}}
           className="md:w-2/5">
            <h2 className="lg:text-4xl text-3xl font-bold text-primary mb-5 leading-normal">
              Trải nghiệm tính năng <span className="text-secondary">phân tích tâm lý</span> qua bài khảo sát nhanh.
            </h2>
            <p className="text-tartirary text-lg mb-7">
              1 phút khảo sát để kiểm tra tâm lý của bạn...
            </p>
            <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
              
              <Link to="/form">Khảo sát ngay!</Link>
            </button>
          </motion.div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
