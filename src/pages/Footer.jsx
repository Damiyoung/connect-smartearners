import React from "react";

import { BsDiscord, BsGithub, BsMedium, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import logo from "../Assests/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#02024D] w-full  mt-10 overflow-x-hidden">
      <div className="flex  flex-col items-center  justify-around  ">
        <div className=" flex flex-col p-10 ">
          <img src={logo} alt="" className=" w-[30%] lg:ml-28" />
          <p className=" max-w-sm text-white ">
            We've created $mart Earners Team as we saw a huge gap in the
            availability of tech services for startups. Give us a chance to
            prove to you that quality, accuracy and speed of delivery are as
            important to us as they are to you and your project.
          </p>
          <div className=" ">
            <ul className=" flex mx-auto text-white gap-5 mt-8 lg:text-3xl text-2xl
             md:pr-5 mr-2">
              <a
                href="https://discord.gg/an84txCDE8"
                rel="noreferrer"
                target="_blank"
              >
                <li className=" text-[#410093]">
                  <BsDiscord />
                </li>
              </a>

              <a
                href="https://medium.com/@smartearnersteam"
                alt=""
                rel="noreferrer"
                target="_blank"
              >
                <li className=" text-black font-extrabold">
                  <BsMedium />
                </li>
              </a>
              <a
                href="mailto:smartearnersteam@gmail.com"
                alt=""
                rel="noreferrer"
                target="_blank"
              >
                <li className=" text-[#ea4335]">
                  <ImMail4 />
                </li>
              </a>

              <a
                href="https://twitter.com/WeEarnAsWeLearn"
                rel="noreferrer"
                target="_blank"
              >
                <li className=" text-[#55acee]">
                  <BsTwitter />
                </li>
              </a>
              <a
                href="https://github.com/Smart-Earners-Team"
                alt=""
                rel="noreferrer"
                target="_blank"
              >
                <li className=" text-[#00405d]">
                  <BsGithub />
                </li>
              </a>

              <a
                href="https://t.me/SmartEarnersTeam"
                rel="noreferrer"
                target="_blank"
              >
                <li className=" text-[#0061FF]">
                  <FaTelegramPlane />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="  h-2 w-[90%] text-white border-t-2  border-t-white mt-4 mx-auto" />
        <div className="text-white text-center mt-5 mb-3">
          <p> $mart Earners Team™ &copy; 2022 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
