import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 items-center justify-center grid-rows-4 px-[41px] pt-[51px] lg:grid-cols-4 lg:grid-rows-1 lg:pt-[84px] lg:pb-[92px] lg:pl-[104px] lg:pr-[102px] lg:h-[362px] bg-[#f8f8f8]">
        <div className="justify-self-center lg:justify-self-start lg:items-center">
          <img
            className="w-[75px] lg:w-[161px]"
            alt="Screenshot"
            src="https://c.animaapp.com/Q86HZWJJ/img/screenshot-669-2@2x.png"
          />
        </div>

        <div className="">
          <div className="lg:mb-[14px] font-semibold text-primary text-[15.771px] lg:text-[18.8px] tracking-[0.57px] leading-[14.2px] text-[#0d2268]">
            Contact Us
          </div>
          <div className="flex flex-col lg:justify-between text-[8.762px] lg:text-[14.7px] lg:leading-[23.0px]">
            <p className="w-[217px]  mt-[14px] font-normal text-[#646874]   tracking-[0] ">
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <div className="lg:mt-[14px] font-normal text-[#646874]  tracking-[0] leading-[23.0px] ">
              example2020@gmail.com
            </div>
            <div className="w-[91px] lg:mt-[14px] font-normal text-[#646874]  text-left tracking-[0] leading-[23.0px] whitespace-nowrap">
              (904) 443-0343
            </div>
          </div>
        </div>

        <div className="lg:ml-[130px] text-[8.762px] lg:text-[15px]">
          <div className=" lg:mb-[14px] font-semibold text-primary text-[15.771px] lg:text-[18.8px] tracking-[0.57px] leading-[14.2px] text-[#0d2268]">
            More
          </div>

          <div className="w-[161px] h-[129px] lg:h-[145px] flex flex-col lg:justify-between">
            <div className="w-[153px]  mt-[14px] font-normal text-[#646874]  tracking-[0] leading-[14px] ">
              Products
            </div>
            <div className="w-[86px]  mt-[14px] font-normal text-[#646874]  tracking-[0] leading-[14px] ">
              Career
            </div>
            <div className="w-[94px]  mt-[14px] font-normal text-[#646874]  tracking-[0] leading-[14px] ">
              Contact Us
            </div>
            <div className="w-[75px] mt-[14px] font-normal text-[#646874]  tracking-[0] leading-[14.2px] ">
              About Us
            </div>
          </div>
        </div>

        <div className="w-[198px] h-full flex flex-col-reverse justify-center place-self-center items-center lg:flex-col lg:justify-between">
          <div className=" place-self-center lg:place-self-end font-semibold text-[#0d2268] text-[19px] tracking-[0.57px] leading-[14px] ">
            <div className="hidden lg:block"> Social Links</div>
            <div className="flex w-[76px] justify-between items-center mt-[17px]">
              <img
                className="w-[21px] h-[21px] "
                alt="Component"
                src="https://c.animaapp.com/Q86HZWJJ/img/component-1@2x.png"
              />
              <img
                className="w-[21px] h-[17px] lg:ml-[36.59px] "
                alt="Path"
                src="https://c.animaapp.com/Q86HZWJJ/img/path-2.svg"
              />
              <img
                className="w-[21px] h-[21px] lg:ml-[30.22px]"
                alt="Component"
                src="https://c.animaapp.com/Q86HZWJJ/img/component@2x.png"
              />
            </div>
          </div>
          <div className="lg:place-self-start">
            <p className=" [font-family:'Roboto',Helvetica] font-normal text-x-82-8b-9c text-[14.7px] text-center tracking-[0] leading-[25.1px] ">
              © 2022 Food Truck Example
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
