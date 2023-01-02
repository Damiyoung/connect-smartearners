import { BsArrowRightCircle } from "react-icons/bs";
import img1 from "../Assests/img1.png";
import instagram from "../Assests/bginstagram.png";
import twitter from "../Assests/bgtwitter.png";
import { Link } from "react-router-dom";

import Testimonials from "../Components/Testimonials";
import { motion } from "framer-motion";
import {
  staggerContainer,
  textVariant,
  slideIn,
  planetVariants,
} from "../utils/motion";
import { TitleText } from "../Components/CustomTexts";

const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` overflow-hidden`}
      >
        <div className=" max-w-[100%] bg-cover w-full lg:h-[70vh] bg-bg-img  ">
          <div className="md:text-4xl text-3xl ml-6 text-white  lg:p-[px]  pt-12 pb-5 space-y-3 lg:space-y-10 max-w-xl lg:px-10">
            <div className="font-bold">
              <motion.p variants={textVariant(1.1)} className=" text-[#FF9933]">
                Find, connect and <br />
                sell
              </motion.p>

              <motion.p variants={textVariant(1.2)} className=" text-xl">
                {" "}
                to the right people on Whatsapp, <br />
                Twitter and Instagram
              </motion.p>
            </div>
            <motion.p
              variants={textVariant(1.3)}
              className="text-xl pb-3 lg:max-w-none max-w-sm "
            >
              Connect you with followers on your favorite social media{" "}
            </motion.p>

            <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
              <div className="flex  gap-3 pb-2  ">
                <Link to="/signup">
                  <button className="flex items-center gap-3 border border-white rounded-xl p-2 hover:bg-[#FF9933] hover:scale-90 ring-2 ring-white ">
                    <p className=" text-white text-lg pl-3 min-w-fit ">
                      Register Now
                    </p>

                    <BsArrowRightCircle className="w-[20%]" />
                  </button>
                </Link>

                <Link to="/login">
                  <button className="flex items-center gap-3 border border-white rounded-xl p-2 hover:bg-[#FF9933] hover:scale-90 ring-2 ring-white ">
                    <p className=" text-white text-lg pl-3 ">Login</p>

                    <BsArrowRightCircle className="w-[20%]" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <TitleText
          title={<>Smartconnect for Whatsapp</>}
          textStyles=" font-bold text-4xl lg:hidden mt-6 text-center"
        />

        <div className="flex flex-col lg:flex-row items-center mt-10 justify-center  ">
        <motion.div variants={slideIn("left", "tween", 0.3, 1)}>
            <img src={img1} alt="" className="w-[300px] mr-5  " />
          </motion.div>
          <div className=" flex flex-col text-center gap-4">
            <TitleText
              title={<>Smartconnect for Whatsapp</>}
              textStyles="hidden lg:inline font-bold lg:text-4xl "
            />

            <p className=" max-w-3xl lg:text-xl p-7">
              Whatsapp shouldn’t be for just families and friends, especially
              when you are a business owner looking to boost sales and increase
              your brand awareness. With Smartconnect you can bulk add new
              targeted contacts, boost views, and find buyers all in one place.
            </p>
          </div>
        </div>
        <TitleText
          title={<> Smartconnect for Twitter</>}
          textStyles=" font-bold text-4xl lg:hidden mt-6 text-center mb-3 "
        />

        <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-[200px]   ">
          <motion.div variants={slideIn("right", "tween", 0.5, 1)}>
            <img src={twitter} alt="" className=" lg:hidden w-[300px]   " />
          </motion.div>
          <div className=" flex flex-col text-center gap-4">
            <TitleText
              title={<>Smartconnect for Twitter</>}
              textStyles="hidden lg:inline font-bold lg:text-4xl "
            />

            <p className=" max-w-3xl lg:text-xl p-7">
              Growing your account on twitter can be challenging when you are
              new to the app, and not exactly sure how the app works. With smart
              connect, you get bulk real and active followers who can grow your
              community
            </p>
          </div>
          <img
            src={twitter}
            alt=""
            className=" hidden  lg:inline w-[300px]   "
          />
        </div>
        <TitleText
          title={<> Smartconnect for Instagram</>}
          textStyles=" font-bold text-4xl lg:hidden mt-6 text-center mb-3 "
        />
        <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-[200px]   ">
          <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
            <img src={instagram} alt="" className="w-[300px] mr-5  " />
          </motion.div>
          <div className=" flex flex-col text-center gap-4">
            <TitleText
              title={<>Smartconnect for Instagram</>}
              textStyles="hidden lg:inline font-bold lg:text-4xl "
            />
            <p className=" max-w-3xl lg:text-xl p-7 ">
              We've created $mart Earners Team as we saw a huge gap in the
              availability of tech services for startups. Give us a chance to
              prove to you that quality, accuracy and speed of delivery are as
              important to us as they are to you and your project.
            </p>
          </div>
        </div>

        <TitleText
          title={
            <>
              {" "}
              It’s contact gain, but with a{" "}
              <br className="text-center text-[#FF9933]" /> degree
            </>
          }
          textStyles=" text-center font-medium lg:text-4xl text-2xl lg:mt-[100px]  italic  "
        />
      </motion.div>
      {/* Members */}
      <div className=" mx-auto font-medium lg:text-4xl text-md lg:mt-[200px]  lg:max-w-2xl p-5 text-center text-gray-600 ">
        Meet the team dedicated to helping
        <br /> you become financially stable
      </div>
      \{/* SIDEBAR */}
      <Testimonials />
      {/* End */}
      <div className="flex flex-col items-center justify-center">
        <TitleText
          title={
            <>
              {" "}
              Ready to grow your contacts
              <br />
              while making insane sales?
            </>
          }
          textStyles="text-center font-medium lg:text-4xl text-3xl 
          lg:mt-[100px] mt-20"
        />

        <Link to="/signup">
          <button
            className="flex items-center  lg:w-[100%] w-[100%] border
          border-white rounded-xl  bg-[#FF9933] hover:scale-90 mt-6 p-3  ring-2 ring-white"
          >
            <p className=" text-white text-sm mx-auto min-w-fit p-2  ">
              Register Now
            </p>
            <BsArrowRightCircle className="w-[20%] space-x-6" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
