import React, { useState } from "react";
import Footer from "../components/Footer";
import NavbarHome from "../components/NavbarHome";
import axios from "axios";

const DASS21 = () => {
  const [valueName, setValueName] = useState("");
  const [valueDate, setValueDate] = useState("");
  const [answers, setAnswers] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: parseInt(value, 10),
    }));
  };

  // console.log(valueName);
  // console.log(valueDate);
  // console.log(answers);

  const handleNameChange = (event) => {
    setValueName(event.target.value);
  };

  const handleDateChange = (event) => {
    setValueDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/create-form", {
        name: valueName,
        date: valueDate,
        answers,
      })
      .then((response) => {
        console.log(response.data);
        setResult(response.data.form);
        setShowModal(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="font-text">
      <NavbarHome />
      <form className="" onSubmit={handleSubmit}>
        <div className="mx-24 ">
          <h1 className="text-4xl text-center mt-5 mb-7 font-bold">
            DASS21 SURVEY
          </h1>
          <p>
            DASS-21 (Depression Anxiety and Stress Scales) là thang đánh giá
            được phát triển bởi các nhà khoa học thuộc Đại học New South Wales
            (University of New South Wales), Australia. DASS-21 có thể được dùng
            trong tầm soát và đánh giá mức độ trầm cảm, lo âu và stress.
          </p>
          <div className="my-3">
            <label
              htmlFor="name"
              className=" mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Họ tên :
            </label>
            <input
              className=" w-60 ml-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Họ tên..."
              required
              value={valueName}
              onChange={handleNameChange}
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="date"
              className=" mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Ngày :
            </label>
            <input
              className=" w-60 ml-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
              id="date"
              name="date"
              required
              value={valueDate}
              onChange={handleDateChange}
            />
          </div>
          <p className="text-base  text-gray-900 dark:text-white my-3">
            Hãy đọc mỗi câu và trả lời ứng với tình trạng mà bạn cảm thấy trong
            vòng một tuần qua. Không có câu trả lời đúng hoặc sau, sẽ có 4 đáp
            ứng tương ứng như sau:
          </p>
          <p className="text-base text-gray-900 dark:text-white"></p>
          <ul className="text-base font-bold text-gray-900 dark:text-white mb-4">
            <li>0: KHÔNG ĐÚNG với tôi chút nào cả.</li>
            <li>1: ĐÚNG với tôi PHẦN NÀO hoặc THỈNH THOẢNG mới đúng.</li>
            <li>2: ĐÚNG với tôi PHẦN NHIỀU hoặc PHẦN LỚN THỜI GIAN là đúng.</li>
            <li>3: HOÀN TOÀN ĐÚNG với tôi hoặc HẦU HẾT THỜI GIAN là đúng.</li>
          </ul>
          <p>
            Bạn hãy trả lời đủ 21 câu hỏi và đừng dừng lại quá lâu ở bất kỳ câu
            nào.
          </p>
          <table>
            <tbody>
              <tr>
                <td>1 (s)</td>
                <td>Tôi nhận thấy khó mà nghỉ ngơi</td>
                <td>
                  <input
                    type="radio"
                    id="1s-0"
                    name="1"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="1s-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="1s-1"
                    name="1"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="1s-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="1s-2"
                    name="1"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="1s-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="1s-3"
                    name="1"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="1s-3">3</label>
                </td>
              </tr>
              <tr>
                <td>2 (a)</td>
                <td>Tôi cảm thấy khô miệng</td>
                <td>
                  <input
                    type="radio"
                    id="2a-0"
                    name="2"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="2a-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="2a-1"
                    name="2"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="2a-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="2a-2"
                    name="2"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="2a-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="2a-3"
                    name="2"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="2a-3">3</label>
                </td>
              </tr>
              <tr>
                <td>3 (d)</td>
                <td>Tôi dường như chẳng có chút cảm xúc tích cực nào</td>
                <td>
                  <input
                    type="radio"
                    id="3d-0"
                    name="3"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="3d-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="3d-1"
                    name="3"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="3d-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="3d-2"
                    name="3"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="3d-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="3d-3"
                    name="3"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="3d-3">3</label>
                </td>
              </tr>
              <tr>
                <td>4 (a)</td>
                <td>
                  Tôi cảm thấy khó thở (thở gấp, khó thở dù chẳng làm việc gì
                  nặng)
                </td>
                <td>
                  <input
                    type="radio"
                    id="4a-0"
                    name="4"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="4a-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="4a-1"
                    name="4"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="4a-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="4a-2"
                    name="4"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="4a-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="4a-3"
                    name="4"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="4a-3">3</label>
                </td>
              </tr>
              <tr>
                <td>5 (d)</td>
                <td>Tôi thấy khó bắt tay vào công việc</td>
                <td>
                  <input
                    type="radio"
                    id="5d-0"
                    name="5"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="5d-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="5d-1"
                    name="5"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="5d-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="5d-2"
                    name="5"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="5d-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="5d-3"
                    name="5"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="5d-3">3</label>
                </td>
              </tr>
              <tr>
                <td>6 (s)</td>
                <td>Tôi có xu hướng phản ứng thái quá với các tình huống</td>
                <td>
                  <input
                    type="radio"
                    id="6s-0"
                    name="6"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="6s-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="6s-1"
                    name="6"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="6s-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="6s-2"
                    name="6"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="6s-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="6s-3"
                    name="6"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="6s-3">3</label>
                </td>
              </tr>
              <tr>
                <td>7 (a)</td>
                <td>Tay tôi bị run</td>
                <td>
                  <input
                    type="radio"
                    id="7a-0"
                    name="7"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="7a-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="7a-1"
                    name="7"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="7a-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="7a-2"
                    name="7"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="7a-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="7a-3"
                    name="7"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="7a-3">3</label>
                </td>
              </tr>
              <tr>
                <td>8 (s)</td>
                <td>Tôi thấy mình đang suy nghĩ quá nhiều</td>
                <td>
                  <input
                    type="radio"
                    id="8s-0"
                    name="8"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="8s-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="8s-1"
                    name="8"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="8s-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="8s-2"
                    name="8"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="8s-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="8s-3"
                    name="8"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="8s-3">3</label>
                </td>
              </tr>
              <tr>
                <td>9 (a)</td>
                <td>
                  Tôi lo lắng về những tình huống có thể làm tôi hoảng sợ hoặc
                  biến tôi thành trò cười
                </td>
                <td>
                  <input
                    type="radio"
                    id="9a-0"
                    name="9"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="9a-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="9a-1"
                    name="9"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="9a-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="9a-2"
                    name="9"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="9a-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="9a-3"
                    name="9"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="9a-3">3</label>
                </td>
              </tr>
              <tr>
                <td>10 (d)</td>
                <td>Tôi thấy mình chẳng có gì để mong đợi cả</td>
                <td>
                  <input
                    type="radio"
                    id="10d-0"
                    name="10"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="10d-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="10d-1"
                    name="10"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="10d-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="10d-2"
                    name="10"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="10d-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="10d-3"
                    name="10"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="10d-3">3</label>
                </td>
              </tr>
              <tr>
                <td>11 (s)</td>
                <td>Tôi thấy bản thân dễ bị kích động</td>
                <td>
                  <input
                    type="radio"
                    id="11s-0"
                    name="11"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="11s-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="11s-1"
                    name="11"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="11s-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="11s-2"
                    name="11"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="11s-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="11s-3"
                    name="11"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="11s-3">3</label>
                </td>
              </tr>
              <tr>
                <td>12 (s)</td>
                <td>Tôi thấy khó thư giãn được</td>
                <td>
                  <input
                    type="radio"
                    id="12s-0"
                    name="12"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="12s-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="12s-1"
                    name="12"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="12s-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="12s-2"
                    name="12"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="12s-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="12s-3"
                    name="12"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="12s-3">3</label>
                </td>
              </tr>
              <tr>
                <td>13 (d)</td>
                <td>Tôi cảm thấy chán nản, buồn bã</td>
                <td>
                  <input
                    type="radio"
                    id="13d-0"
                    name="13"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="13d-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="13d-1"
                    name="13"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="13d-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="13d-2"
                    name="13"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="13d-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="13d-3"
                    name="13"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="13d-3">3</label>
                </td>
              </tr>
              <tr>
                <td>14 (s)</td>
                <td>
                  Tôi không chấp nhận được việc có cái gì đó xen vào cản trở
                  việc tôi đang làm
                </td>
                <td>
                  <input
                    type="radio"
                    id="14s-0"
                    name="14"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="14s-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="14s-1"
                    name="14"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="14s-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="14s-2"
                    name="14"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="14s-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="14s-3"
                    name="14"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="14s-3">3</label>
                </td>
              </tr>
              <tr>
                <td>15 (a)</td>
                <td>Tôi thấy mình gần như hoảng loạn</td>
                <td>
                  <input
                    type="radio"
                    id="15a-0"
                    name="15"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="15a-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="15a-1"
                    name="15"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="15a-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="15a-2"
                    name="15"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="15a-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="15a-3"
                    name="15"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="15a-3">3</label>
                </td>
              </tr>
              <tr>
                <td>16 (d)</td>
                <td>Tôi không thể hăng hái với bất kỳ việc gì nữa</td>
                <td>
                  <input
                    type="radio"
                    id="16d-0"
                    name="16"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="16d-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="16d-1"
                    name="16"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="16d-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="16d-2"
                    name="16"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="16d-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="16d-3"
                    name="16"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="16d-3">3</label>
                </td>
              </tr>
              <tr>
                <td>17 (d)</td>
                <td>Tôi thấy mình là người kém giá trị</td>
                <td>
                  <input
                    type="radio"
                    id="17d-0"
                    name="17"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="17d-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="17d-1"
                    name="17"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="17d-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="17d-2"
                    name="17"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="17d-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="17d-3"
                    name="17"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="17d-3">3</label>
                </td>
              </tr>
              <tr>
                <td>18 (s)</td>
                <td>Tôi thấy mình khá dễ phật ý, tự ái</td>
                <td>
                  <input
                    type="radio"
                    id="18s-0"
                    name="18"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="18s-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="18s-1"
                    name="18"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="18s-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="18s-2"
                    name="18"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="18s-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="18s-3"
                    name="18"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="18s-3">3</label>
                </td>
              </tr>
              <tr>
                <td>19 (a)</td>
                <td>
                  Tôi nghe thấy rõ tiếng nhịp tim dù không làm việc gì nặng cả
                  (vd: cảm thấy nhịp tim tăng, tim lỡ nhịp)
                </td>
                <td>
                  <input
                    type="radio"
                    id="19a-0"
                    name="19"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="19a-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="19a-1"
                    name="19"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="19a-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="19a-2"
                    name="19"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="19a-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="19a-3"
                    name="19"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="19a-3">3</label>
                </td>
              </tr>
              <tr>
                <td>20 (a)</td>
                <td>Tôi thấy sợ vô cớ</td>
                <td>
                  <input
                    type="radio"
                    id="20a-0"
                    name="20"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="20a-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="20a-1"
                    name="20"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="20a-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="20a-2"
                    name="20"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="20a-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="20a-3"
                    name="20"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="20a-3">3</label>
                </td>
              </tr>
              <tr>
                <td>21 (d)</td>
                <td>Tôi thấy cuộc sống vô nghĩa</td>
                <td>
                  <input
                    type="radio"
                    id="21d-0"
                    name="21"
                    value="0"
                    onChange={handleChange}
                  />
                  <label htmlFor="21d-0">0</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="21d-1"
                    name="21"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="21d-1">1</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="21d-2"
                    name="21"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="21d-2">2</label>
                </td>
                <td>
                  <input
                    type="radio"
                    id="21d-3"
                    name="21"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="21d-3">3</label>
                </td>
              </tr>
            </tbody>
          </table>

          <button
            type="submit"
            className="mt-8 text-black font-text font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-[15px] bg-secondary cursor-pointer transition-all duration-300 hover:text-white hover:bg-primary"
          >
            Kiểm tra
          </button>
        </div>
      </form>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Kết quả</h2>
            <p><strong>Mức độ Stress:</strong> {result.stressLevel}</p>
            <p><strong>Mức độ trầm cảm:</strong> {result.depressionLevel}</p>
            <p><strong>Mức độ lo lắng:</strong> {result.anxietyLevel}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleClose}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default DASS21;
// import React, { useState } from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import axios from "axios";

// const Survey = () => {
//   // Mảng các câu hỏi khảo sát
//   const [questions, setQuestions] = useState([
//     {
//       id: 1,
//       question: "I found it hard to wind down",
//       options: ["0", "1", "2", "3"],
//       answer: ""
//     },
//     {
//       id: 2,
//       question: "I found it hard to wind down",
//       options: ["0", "1", "2", "3"],
//       answer: ""
//     },
//     // Thêm các câu hỏi khác tương tự ở đây
//   ]);

//   // State cho tên và ngày tháng
//   const [formData, setFormData] = useState({
//     name: "",
//     date: ""
//   });

//   // Xử lý khi người dùng thay đổi câu trả lời
//   const handleAnswerChange = (questionId, answer) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId ? { ...question, answer: answer } : question
//       )
//     );
//   };

//   // Xử lý khi người dùng gửi biểu mẫu
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8000/api/create-form", {
//         name: formData.name,
//         date: formData.date,
//         answers: questions.map((question) => ({ id: question.id, answer: question.answer }))
//       });

//       console.log("Form submitted successfully!", response.data);

//       // Reset form data and answers after successful submission (optional)
//       setFormData({ name: "", date: "" });
//       setQuestions(questions.map((question) => ({ ...question, answer: "" })));

//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Handle errors
//     }
//   };

//   return (
//     <div className="bg-yellow-50">
//       <Navbar />
//       <form className="mx-24" onSubmit={handleSubmit}>
//         <h1 className="text-3xl font-bold">Survey</h1>
//         <div className="my-3">
//           <label htmlFor="name" className="mb-2 text-base font-medium text-gray-900 dark:text-white">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             className="w-60 ml-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Name..."
//             required
//           />
//         </div>
//         <div className="my-3">
//           <label htmlFor="date" className="mb-2 text-base font-medium text-gray-900 dark:text-white">
//             Date:
//           </label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={formData.date}
//             onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//             className="w-60 ml-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//         </div>
//         {questions.map((question) => (
//           <div key={question.id} className="my-3">
//             <p className="text-base text-gray-900 dark:text-white">{question.question}</p>
//             <div>
//               {question.options.map((option, index) => (
//                 <div key={index} className="flex items-center">
//                   <input
//                     type="radio"
//                     id={`${question.id}-${index}`}
//                     name={`${question.id}`}
//                     value={index}
//                     checked={question.answer === index.toString()}
//                     onChange={() => handleAnswerChange(question.id, index.toString())}
//                     className="mr-2"
//                   />
//                   <label htmlFor={`${question.id}-${index}`} className="mr-4">{option}</label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <button
//           type="submit"
//           className="mt-4 mb-10 text-black font-text bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//         >
//           Submit
//         </button>
//       </form>
//       <Footer />
//     </div>
//   );
// };

// export default Survey;
