import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/styles";
import logo from "../Assests/logo.png";
import { countries } from ".././data";

const SignUp = () => {
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
    <>
      <div className=" flex items-center justify-center my-auto mt-10">
        <form className={`${styles.form} blue-glassmorphism`}>
          <img
            src={logo}
            alt=""
            className=" flex items-center justify-center mx-auto w-[30%] "
          />
          <div className="mb-4">
            <label className={`${styles.label}`} htmlFor="name">
              Name
            </label>
            <Input id="name" type="text" placeholder="Enter your name" />

            <label className={`${styles.label}`} htmlFor="country">
              Country:
            </label>
            <select
              name="county"
              id="county"
              className={`${styles.select} text-gray-600 text-sm font-mono`}
            >
              {countries.map((county) => (
                <option key={county.value} value={county.value}>
                  {county.label}
                </option>
              ))}
            </select>

            <label className={`${styles.label}`} htmlFor="phone">
              Phone
            </label>
            <Input id="phone" type="number" placeholder="Enter your Number" />
            <label className={`${styles.label}`} htmlFor="password">
              Password
            </label>

            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 ">
            <button
              className="bg-[#FF9933] w-[90%] h-fit text-sm hover:bg-[#FF9933] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <Link to="/login">
              <p className="text-sm text-gray-700">
                Already have an account{" "}
                <p className="text-[#FF9933] text-center">Login</p>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
