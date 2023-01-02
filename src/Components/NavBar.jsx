import logo from "../Assests/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { BsArrowRightCircle } from "react-icons/bs";
import styles from "../styles/styles";
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const location = useLocation();

  const path = location.pathname;

  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative`}
  >
    <div className=" overflow-hidden">
      <nav className={`${styles.navbar}`}>
        <img src={logo} alt="" className=" lg:ml-10 w-[20%] md:w-[10%]" />
        <div className=" flex items-center gap-20  justify-between ">
          <ul
            className={` hidden md:flex  items-center lg:gap-12 gap-5 text-xl  `}
          >
            <Link to={"/"}>
              <li
                className={` hover:scale-100 ${
                  path === "/" ? `${styles.pathBgColor}` : ""
                }`}
              >
                Home{" "}
              </li>
            </Link>

            <Link to={"/service"}>
              <li
                className={` hover:scale-100 ${
                  path === "/service" ? `${styles.pathBgColor}` : ""
                }`}
              >
                Services
              </li>
            </Link>
            <Link to={"/contactUs"}>
              <li
                className={` hover:scale-100 ${
                  path === "/contactUs" ? `${styles.pathBgColor}` : ""
                }`}
              >
                Contact Us
              </li>
            </Link>
          </ul>
          <div className=" flex justify-center items-center">
            <p className=" text-2xl text-[#FF9933] "> Smartconnect</p>
            <div className=" hidden  md:inline-flex">

            <Link to={"/signup"}>
              <div className="flex justify-center items-center  border border-[#FF9933] rounded-2xl  ml-7 sm:mr-5 p-2 gap-1">
              <button
              className="
              md:text-lg text-sm    "
                >
                  Register Now
                </button>
                <BsArrowRightCircle />
              </div>
            </Link>

            <Link to={"/login"}>
              <div className="flex justify-center items-center  border border-[#FF9933] rounded-2xl  ml-7 sm:mr-5 p-2 gap-1">
                <button
                className="
                md:text-lg text-sm    "
                >
                Login
                </button>
                <BsArrowRightCircle />
                </div>
              </Link>
              </div>
          </div>
        </div>
        <div className=" flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-blue-400 md:hidden cursor-pointer "
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-blue-400 md:hidden cursor-pointer "
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <ul
              onClick={() => setToggleMenu(false)}
              className="z-10 fixed top-10 -right-2 p-3 w-[80%] h-[100vh] shadow-black md:hidden list-none
                        flex flex-col justify-start  rounded-md blue-glassmorphism  text-white animate-slide-in
                        
          "
            >
              <li className="text-2xl mt-4 mx-5 hover:scale-150  ">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              <ul className=" mx-auto mt-[150px] text-3xl animate-pulse">
                <Link to={"/"}>
                  <li className="pb-4 hover:scale-125 ">Home</li>
                </Link>

                <Link to={"/service"}>
                  <li className="pb-4 hover:scale-125">Services</li>
                </Link>
                <Link to={"/contactUs"}>
                  <li className="hover:scale-125">Contact Us</li>
                </Link>
              </ul>
              <div className=" flex mt-[150px] gap-5 justify-center ">
                <Link to="/login">
                  <p className={`${styles.btn} p-5`}>Login</p>
                </Link>

                <Link to="/signup">
                  <p className={`${styles.btn} p-5`}>Register</p>
                </Link>

                
              </div>
            </ul>
          )}
        </div>
      </nav>
      </div>
      </motion.nav>
  );
};

export default NavBar;
