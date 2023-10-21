import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row-reverse justify-between lg:h-[804px]">
        <div className="m-0 p-0">
          <div className="hidden lg:block absolute right-0">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="752"
              height="839"
              viewBox="0 0 752 839"
              fill="none"
            >
              <path
                d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
                fill="#E23744"
              />
            </svg>
          </div>
          <button
            className="absolute text-white border border-1 rounded-full w-[122px] h-[42px] top-[32px] left-[1300px]"
            alt="Group"
          >
            Get in Touch
          </button>
          <div className="absolute lg:hidden right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="375"
              height="426"
              viewBox="0 0 375 426"
              fill="none"
            >
              <path
                d="M55.6077 18.45C20.4129 22.9359 3.87142 8.01914 0 0L375 0.723531V424.17C241.499 440.429 273.111 343.496 279.27 325.046C285.429 306.596 328.015 185.405 273.111 96.7723C218.207 8.13972 99.6011 12.8427 55.6077 18.45Z"
                fill="#E23744"
              />
            </svg>
          </div>
          <img
            className="w-[378.213px] h-[413.718px] lg:w-[735px] lg:h-[804px]"
            alt="Group"
            src="https://c.animaapp.com/Q86HZWJJ/img/group-289.png"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start mt-[75.28px] lg:mt-[33px] lg:ml-[100px]">
          <img
            className="hidden lg:block w-[107px] h-[83px] top-[33px]"
            alt="Screenshot"
            src="https://c.animaapp.com/Q86HZWJJ/img/screenshot-669-1@2x.png"
          />
          <p className="w-[240px] mx-[67px] text-[38px] leading-[46px] font-bold [font-family:'Source_Sans_Pro',Helvetica] lg:w-[400px] lg:mt-[111px] lg:font-bold text-transparent lg:text-[62px] tracking-[0] lg:leading-[69px] lg:mx-[0] ">
            <span className="text-[#0d2268]">
              Discover the <br />
            </span>
            <span className="text-[#e23744]">Best</span>
            <span className="text-[#0d2268]"> Food and Drinks</span>
          </p>
          <p className=" mt-[21px] mx-[63px] text-[11px] [font-family:'Open_Sans',Helvetica] font-normal text-body lg:text-[16.4px] tracking-[0] lg:w-[345px] lg:mt-[26px] lg:leading-[27.4px] lg:mx-[0]">
            Naturally made Healthcare Products for the better care &amp; support
            of your body.
          </p>
          <button className="px-[30px] py-[12px]  lg:px-[34px] lg:py-[14px] bg-[#E23744] lg:w-[190px] mt-[41px] rounded-full text-white font-bold font-[12px] lg:font-[18px]">
            Explore Now!
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
