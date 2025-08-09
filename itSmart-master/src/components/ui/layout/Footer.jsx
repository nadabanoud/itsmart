import React from "react";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <footer className="h-fit p-16 pb-0 w-full relative  bg-primary rounded-t-4xl lg:grid lg:grid-cols-4 lg:justify-center lg:items-center gap-3 font-display md:grid md:grid-cols-2 md:gap-3 md:justify-center md:items-center sm:grid sm:grid-cols-1 sm:gap-6 sm:justify-start sm:items-start">
      <div className="flex flex-col gap-1 ">
        <div className="flex flex-row items-center justify-start cursor-pointer mt-2.5">
          <span>
            <img
              className="rounded-full aspect-auto mt-1.5"
              src="../../../../public/images/logo-removebg-preview.png"
              alt=""
              width="90px"
              height="90px"
            />
          </span>
          <h1 className="text-xl font-semibold "> IT SMART</h1>
        </div>
        <div className="  mb-8">
          This project aims to facilitate the testing process at the College of
          Information Engineering by creating a website that allows students to
          apply for exams and track their results easily and effectively.
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="font-semibold text-background">Quick links </h1>
        <p>Home</p>
        <p>About</p>
        <p>Contact us</p>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="font-semibold text-background">Support </h1>
        <p>Report a bug</p>
        <p>Privacy policy</p>
        <p>Terms & conditions</p>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center mb-10">
        <h1 className="font-semibold text-background">Social Media </h1>
        <div className="flex flex-row gap-6 text-2xl border-2 border-background rounded-3xl p-4 mt-4">
          {" "}
          <FaTelegram />
          <FaFacebook />
          <IoLogoYoutube />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
