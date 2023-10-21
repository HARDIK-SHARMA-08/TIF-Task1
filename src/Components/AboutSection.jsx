import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-r from-[rgba(30,42,93,0.04)] via-[rgba(48,62,130,0.04)] to-[rgba(60,80,157,0.04)] lg:flex-row lg:gap-[200px] items-center justify-center mt-[64px] py-[140px] px-[50px] lg:mt-[186px] lg:h-[467px] ">
        <div className="hidden lg:block">
          <img
            className=" w-[384px] h-[468px]"
            alt="About girl lp"
            src="https://c.animaapp.com/Q86HZWJJ/img/about-girl--lp-.png"
          />
        </div>

        <div className="flex gap-[27.41px]  flex-[0_0_auto] flex-col items-center lg:items-start">
          <div className="lg:w-[422px] [font-family:'Poppins',Helvetica] font-semibold text-primary text-[45px] tracking-[0] leading-[27px] whitespace-nowrap text-[#0d2268]">
            About Us
          </div>
          <p className=" lg:w-[447px] text-center lg:text-left text-[11px] leading-[21px] [font-family:'Open_Sans',Helvetica] font-normal text-body lg:text-[15px] tracking-[0] lg:leading-[27px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. t has survived
            not only five centuries.
          </p>
          <button className="px-[26px] py-[10px] bg-[#E23744] w-[160px] mt-[21px] rounded-full text-white font-bold font-[18px]">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
