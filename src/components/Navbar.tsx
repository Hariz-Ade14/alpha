import { useState } from "react";
import React from "react";
import Logo from "../../public/Logo.svg";
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <div className="h-[100vh">
      <header
        className={`bg-[#030F33] fixed z-20 md:px-14 px-6 flex items-center justify-between top-0 left-0 right-0 py-3 md:py-5 w-full`}
      >
        <a href="/" className="flex items-center space-x-2 group">
          <img
            src={Logo}
            className="transition-transform md:w-full w-[30px] duration-500 ease-out group-hover:scale-110"
          />
        </a>

        <nav className="hidden md:flex items-center w-[600px] text-[13px] justify-end gap-5 text-white">
          <a
            href="#models"
            className="navbar-item text-white/90 hover:text-white"
          >
            Models
          </a>
          <a
            href="#pricing"
            className="navbar-item text-white/90 hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="navbar-item text-white/90 hover:text-white"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="navbar-item text-white/90 hover:text-white"
          >
            Contact Us
          </a>
          <a
            href="#custom"
            className="navbar-item text-white/90 hover:text-white"
          >
            Custom Models
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <a
            href="/login"
            className="text-[13px] text-white outline-none border border-solid border-white rounded-[5px] px-10 py-[5px]"
          >
            Login
          </a>
          <a
            href="/get-started"
            className="text-[13px] text-[#05152C] bg-white rounded-[5px] px-10 py-1.5"
          >
            Get Started Now
          </a>
        </div>

        <RiMenu4Line
          size={30}
          onClick={() => setMobile(!mobile)}
          className="flex md:hidden"
          color="white"
        />
      </header>
      {mobile && (
        //   <div  className="absolute top-0 left-0 right-0 w-full h-[100%] p-20 bg-green-500">
        //   <nav
        //     data-aos="fade-down"
        //     className=" p-20 top-0 bg[#030F33] left-0 right-0 md:hidden fixed z-50 flex flex-col items-center justify-center gap-6 "
        //   >
        //     <IoMdClose size={40} color="white" onClick={() => setMobile(!mobile)}/>
        //     <a
        //       href="#models"
        //       className="text-white font-bold text-[30px] hover:text-white"
        //     >
        //       Models
        //     </a>
        //     <a
        //       href="#pricing"
        //       className="text-white font-bold text-[30px] hover:text-white"
        //     >
        //       Pricing
        //     </a>
        //     <a
        //       href="#about"
        //       className="text-white font-bold text-[30px] hover:text-white"
        //     >
        //       About Us
        //     </a>
        //     <a
        //       href="#contact"
        //       className="text-white font-bold text-[30px] hover:text-white"
        //     >
        //       Contact Us
        //     </a>
        //     <a
        //       href="#custom"
        //       className="text-white font-bold text-[30px] hover:text-white"
        //     >
        //       Custom Models
        //     </a>
        //   </nav>
        //  </div>
        <div
          data-aos={"slide-down"}
          className="flex flex-col fixed left-0 right-0 bottom-0 items-center justify-start z-50 md:hidden bg-[#030F33] text-black h-full py-10 px-5 w-[100%] fixed top-0"
        >
          <div className="flex w-full items-start justify-end h-[100px] ">
            <IoMdClose
              size={50}
              color="white"
              className="cursor-pointer font-bold "
              onClick={() => setMobile(!mobile)}
            />
          </div>

          <div className="flex h-[300px] items-center justify-center text-[25px] text-blue-400 flex-col font-bold gap-5">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/shop">Shop</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="/login"
              className="text-[15px] text-white outline-none border border-solid border-white rounded-[5px] px-10 py-[11px]"
            >
              Login
            </a>
            <a
              href="/get-started"
              className="text-[15px] text-[#05152C] bg-white rounded-[5px] px-10 py-3"
            >
              Get Started Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
