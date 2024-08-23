import React from "react";

function Footer() {
  return (
    <div className="text-white mt-10">
      <footer className=" bg-[#010851]  shadow dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-7 md:py-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="block cursor-pointer py-1.5 font-brand leading-relaxed tracking-normal text-inherit antialiased text-3xl"
            >
              MiNook
            </a>
            <ul className="text-white font-text flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 dark:text-gray-400">
              {/* <li>
                    <a href="/" className="hover:underline me-2 md:me-8">About</a>
                </li> */}
              <li>
                <a href="/" className="hover:underline me-2 md:me-8">
                  Chính sách riêng tư
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline me-2 md:me-8">
                  Chúng tôi
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://.com/" className="hover:underline">
              MiNook™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>

    // <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
    //     <div>
    //         <div className="md:w-1/2 space-y-8">
    //             <a href="/" className="text-4xl mt-3 font-semibold flex items-center font-text space-x-3 text-white">MiNook</a>

    //         </div>
    //     </div>
    // </div>
  );
}

export default Footer;
