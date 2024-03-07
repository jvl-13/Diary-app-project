import React from 'react'

function Footer() {
  return (
    <div className=''>
        

<footer className=" bg-yellow-100 rounded-lg shadow dark:bg-gray-900 ">
    <div className="w-full max-w-screen-xl mx-auto p-7 md:py-4">
        <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="#"
          className="block cursor-pointer py-1.5 font-brand leading-relaxed tracking-normal text-inherit antialiased text-3xl"
        >
          DEARDIARY
        </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-2 md:me-8">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-2 md:me-8">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-2 md:me-8">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://onejournal.com/" className="hover:underline">OneJournal™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer