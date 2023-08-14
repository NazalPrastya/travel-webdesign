import React from 'react';
import { BiSolidGrid } from 'react-icons/bi';
import { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toogleMenu = () => {
    setShow(!show);
  };

  return (
    <nav className="nav-box flex flex-row justify-between  fixed bottom-2 md:bottom-[90%] md:top-0 w-full md:w-[40rem ] py-3 items-center px-5 z-[1000] duration-300 ">
      <div className="text-2xl font-bold text-green-500 md:text-center">
        <a href="">LOGO</a>
      </div>
      <ul className={`item-box text-xl absolute md:relative ${show ? 'bottom-16 md:top-0 ' : '-bottom-96 md:top-0'}  bg-slate-600 md:bg-transparent w-full right-0 flex-col flex md:flex-row items-center  justify-end z-20 `}>
        <li className="text-center py-1 md:py-0 text-xl font-medium text-green-500 md:mx-5 ">
          <a href="#">Home</a>
        </li>
        <li className="text-center py-1 md:py-0 text-xl font-medium text-green-500 md:mx-5 ">
          <a href="#">abot</a>
        </li>
        <li className="text-center py-1 md:py-0 text-xl font-medium text-green-500 md:mx-5 ">
          <a href="#">services</a>
        </li>
        <li className="text-center py-1 md:py-0 text-xl font-medium text-green-500 md:mx-5 ">
          <a href="#">contact</a>
        </li>
      </ul>

      <div className="md:hidden">
        <a className="text-4xl text-green-500 hover:text-green-600 shadow-md shadow-green-200" onClick={toogleMenu}>
          <BiSolidGrid />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
