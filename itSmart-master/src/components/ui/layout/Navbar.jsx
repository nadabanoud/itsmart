import React, { useState } from 'react'
import {Link} from "react-scroll";
import {AiOutlineClose} from 'react-icons/ai';
import{AiOutlineMenuUnfold} from 'react-icons/ai'
import { Button } from '../button';
import logo from "@/assets/logo-bg-2.png"
import { useNavigate } from 'react-router';
function Navbar() {
  const [menu , setMenu]=useState(false);

  const handleChange=()=>{
    setMenu(!menu);
  };
  const navigate=useNavigate();
  return (
    <div className=" w-full ">
      <div>
        <div className="navbar z-50 font-display rounded-xs backdrop-blur-3xl  fixed top-0 flex flex-row justify-between w-full h-18 p-5 md:px-32 bg-primary ">
          <div className="flex flex-row items-center justify-center cursor-pointer">
            <span>
              <img
                className="rounded-full aspect-auto mt-1.5"
                src={logo}
                alt=""
                width="90px"
                height="90px"
              />
            </span>
            <h1 className="text-xl font-semibold"> IT SMART</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-semibold gap-8">
            <Link
              to="home"
              spy={true}
              offset={-80}
              smooth={true}
              duration={500}
              className="hover:text-background transition-all cursor-pointer font-normal"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              offset={-80}
              smooth={true}
              duration={500}
              className="hover:text-background transition-all cursor-pointer font-normal"
            >
              About
            </Link>
            <Link
              to="contact"
              spy={true}
              offset={-80}
              smooth={true}
              duration={500}
              className="hover:text-background transition-all cursor-pointer font-normal"
            >
              Contact us
            </Link>
            <Button
              className="font-medium text-[15px] px-5 py-2 border-2 border-background text-background  cursor-pointer hover:bg-background hover:text-text transition-all rounded-full"
              onClick={() => navigate("/auth/login")}
            >
              login
            </Button>
          </nav>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col justify-center items-center absolute bg-text text-background left-0 top-18 font-semibold text-2xl text-center pt-8 pb-4 gap-6 w-full h-fit transition-transform duration-300 z-[100]`}
        >
          <Link
            to="home"
            spy={true}
            offset={-80}
            smooth={true}
            duration={500}
            className="hover:text-background transition-all cursor-pointer font-normal text-primary"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            offset={-80}
            smooth={true}
            duration={500}
            className="hover:text-background transition-all cursor-pointer font-normal text-primary"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            offset={-80}
            smooth={true}
            duration={500}
            className="hover:text-background transition-all cursor-pointer font-normal text-primary"
          >
            Contact us
          </Link>
          <Button
            className="w-fit flex justify-center items-center font-medium text-[20px] px-8 py-5 border-2 border-background text-background  cursor-pointer hover:bg-background hover:text-text transition-all rounded-full"
            onClick={() => navigate("/auth/login")}
          >
            login
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Navbar
