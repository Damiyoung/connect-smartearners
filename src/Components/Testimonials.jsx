import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      {/* SIDEBAR */}

      <div className=" mt-5 bg-[#02024D] lg:w-[90%] lg:h-[50vh] mx-auto rounded-md h-full">
        <div className="text-center text-white font-mono p-3 text-3xl">
          What our client/students have to say
        </div>

        <Slider {...settings}>
          <div className="  p-3">
            <div className="  lg:w-[50%] lg:h-[30vh] flex flex-col items-center justify-center gap-2 bg-white lg:p-4 p-12 mx-auto border border-white ring-white ring-4 rounded-lg">
              <p>
                Smart Earners Team always comes through quickly resolving our IT
                issues - including an ongoing problem that several other
                consultants had been unable to fix at our largest operating
                company. You're certainly our go-to IT company of choice!
              </p>
              <div className="flex justify-center items-center gap-3 italic font-mono mt-3">
                <p>Abdul </p>
                <p className="italic">from</p>
                <p>Tanzania</p>
              </div>
            </div>
          </div>

          <div className="  p-3">
            <div className="  lg:w-[50%] lg:h-[30vh] flex flex-col items-center justify-center gap-2 bg-white p-3  mx-auto border border-white ring-white ring-4 rounded-lg">
              <p>
                I would love to tell you that the Exchange project was perfect.
                Thank you for everything!!!
              </p>
              <div className="flex justify-center items-center gap-3 italic font-mono mt-3">
                <p>Bit-Africa Management</p>
              </div>
            </div>
          </div>

          <div className="  p-3">
            <div className="  lg:w-[50%] lg:h-[30vh] flex flex-col items-center justify-center gap-2 bg-white p-3  mx-auto border border-white ring-white ring-4 rounded-lg">
              <p>
                Excellent service. Quick response, efficient troubleshooting and
                resolution with full explanation of the problem. Gotta love
                Smart Earners Team
              </p>
              <div className="flex justify-center items-center gap-3 italic font-mono mt-3">
                <p>Joseph Hills </p>
                <p className="italic">from</p>
                <p>Ghana</p>
              </div>
            </div>
          </div>
          <div className="  p-3">
            <div className="  lg:w-[50%] lg:h-[30vh] flex flex-col items-center justify-center gap-2 bg-white p-3  mx-auto border border-white ring-white ring-4 rounded-lg">
              <p>
                Smart Earners Team delivers what they say they're going to
                deliver. I know that our applications would be working properly,
                you don't have to concern yourself with the day to day stability
                of your IT platform.
              </p>
              <div className="flex justify-center items-center gap-3 italic font-mono mt-3">
                <p>Kohn Alkan </p>
                <p className="italic">from</p>
                <p>Germany</p>
              </div>
            </div>
          </div>
          <div className="  p-3">
            <div className="  lg:w-[50%] lg:h-[30vh] flex flex-col items-center justify-center gap-2 bg-white p-3  mx-auto border border-white ring-white ring-4 rounded-lg">
              <p>
                We use Smart Earners Team services for our business because of
                the reliability and the ability to resolve issues in a timely
                manner.... and my users are happier.
              </p>
              <div className="flex justify-center items-center gap-3 italic font-mono mt-3">
                <p>Frank Mullens </p>
                <p className="italic">from</p>
                <p>Britain</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* End */}
    </div>
  );
};

export default Testimonials;
