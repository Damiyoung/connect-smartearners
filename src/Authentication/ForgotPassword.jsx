import React from "react";
import styles from "../styles/styles";
import { Link } from "react-router-dom";
import logo from "../Assests/logo.png";

const ForgotPassword = () => {
  const Input = ({ placeholder, name, type, handleChange, id }) => (
    <input
      placeholder={placeholder}
      type={type}
      id={id}
      onChange={(e) => handleChange(e, name)}
      className={`${styles.input}`}
    />
  );
  return (
    <div>
      <div className=" flex items-center justify-center mt-10">
        <form className={`${styles.form} `}>
          <img
            src={logo}
            alt=""
            className=" flex items-center justify-center mx-auto w-[30%] "
          />
          <div className=" space-y-5">
            <p className=" text-center text-blue-900 text-2xl">
              {" "}
              Forgot Password?
            </p>
            <p className=" text-gray-900 text-sm font-mono">
              {" "}
              please enter the email associated with your account
            </p>
          </div>
          <div className="mb-4">
            <label className={`${styles.label}`}></label>
            <Input
              id="forgotpassword"
              type="text"
              placeholder="Enter your Email"
              
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-5 ">
            <button
              className="bg-[#FF9933] w-[90%] hover:scale-105 h-fit text-sm hover:bg-[#FF9933] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Continue
            </button>

            <Link to={"/login"}>
              <p className="text-sm text-gray-700 ">
                Remember password?
                <p className="text-[#FF9933] text-center">Login</p>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
