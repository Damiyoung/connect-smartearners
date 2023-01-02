import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { data } from "./service";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <div className=" max-w-[100%] bg-cover w-full lg:h-[60vh] bg-bg-img">
        <div className="md:text-5xl text-4xl ml-6 text-white  lg:p-[150px]  lg:pt-24 pt-20 space-y-3 lg:space-y-10">
          <p className="font-bold pb-5 lg:p-1">Services</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-medium mt-5">
          Price list of sevices offered
        </p>

        <table className=" table-auto  w-[60%] mt-10 border-collapse border border-slate-400">
          <thead className=" bg-[#BABAEE] h-10">
            <tr>
              <th className="border border-r-slate-300  text-center px-5">
                Services
              </th>
              <th className=" border border-r-slate-300  text-center px-5">
                Price
              </th>
            </tr>
          </thead>
          {data.map((data) => (
            <tbody key={data.id} className="bg-white">
              <tr className="  ">
                <td className="border border-slate-300 font-semibold px-5 text-center ">
                  {data.service}
                </td>
                <td className="border border-slate-300 font-semibold px-5 text-center">
                  {data.price}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <div className=" flex flex-col items-center justify-center mt-8 m-5 font-mono italic">
        <p className="pb-5">{"Strike Package (10% discount*). "}</p>
        <p className="  max-w-xl mx-auto ">
          Strike a deal on the purchase of multiple services and receive up to
          10% discount. Terms and conditions apply.
        </p>
        <Link to={"/contactUs"} className=' '>

        <button
        
        className="flex items-center gap-3 lg:w-[52] w-52  border
        border-white rounded-xl p-2 bg-[#FF9933] hover:scale-90 mt-6"
        >
          <p className=" text-white text-lg mx-auto  ">Contact Us</p>
          <BsArrowRightCircle className="w-[20%]" />
        </button>
          </Link>
           
      </div>
    </div>
  );
};

export default Services;
