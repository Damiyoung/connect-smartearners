import React from "react";
import styles from "../styles/styles";
import { Link } from "react-router-dom";
import logo from "../Assests/logo.png";

const Login = () => {
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
      <div className=" flex items-center justify-center my-auto mt-10">
        <form className={`${styles.form} white-glassmorphism`}>
          <img
            src={logo}
            alt=""
            className=" flex items-center justify-center mx-auto w-[30%] "
          />
          <div className="mb-4">
            <label className={`${styles.label}`} htmlFor="email">
              Email
            </label>
            <Input id="email" type="text" placeholder="Enter your Email" />

            <label className={`${styles.label}`} htmlFor="name">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-5 ">
            <Link to={"/dashboard"}>
            <button
              className="bg-[#FF9933] w-[90%] hover:scale-105 h-fit text-sm hover:bg-[#FF9933] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
              >
              login
            </button>
              </Link>
            <Link to={"/forgot-password"}>
              <p className="text-sm text-gray-700 hover:text-[#FF9933]  ">Forgot password?</p>
            </Link>
            <Link to={"/signup"}>
              <p className="text-sm text-gray-700 ">
                Don't have an account?{" "}
                <p className="text-[#FF9933] text-center">Register</p>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
