import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Logo from "../assets/logo.png";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex-1 backdrop-filter:blur(8px) overflow-hidden flex flex-row items-center justify-center top-0 z-[99] sticky max-w-full text-left text-[1rem] text-white font-text-md-medium  bg-transparent backdrop-blur-md ">
      <div className="flex-1 overflow-hidden flex flex-row items-center justify-center pt-[0rem] px-[0rem] pb-[0.06rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-center justify-center py-[1.31rem] px-[0rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-center justify-center max-w-full">
            <div className="w-[72.5rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[3.75rem] max-w-full mq1125:gap-[1.88rem]  ">
              <div className="w-[25.13rem] flex flex-row items-center justify-start max-w-full">
                <div className="flex flex-row items-center justify-start gap-[0.63rem]">
                  <img
                    className="h-[2.4rem] w-[2.69rem] relative object-contain"
                    loading="eager"
                    alt=""
                    src={Logo}
                  />
                  <div className="relative leading-[1.5rem] font-medium whitespace-nowrap cursor-default">
                    Koios Engineering Solutions
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[2rem] max-w-full font-xl-header-semibold mq750:gap-[1rem]">
                <div className="flex flex-row items-center justify-center gap-[2rem] max-w-full mq750:gap-[1rem]">
                  <div className="flex flex-row items-center justify-center">
                    <div className="relative leading-[1.5rem] font-semibold cursor-pointer hover:text-yellow-400 duration-200 smooth">
                      <div className="group inline-flex items-center">
                        Engineering
                        <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180 ml-2" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <div className="relative leading-[1.5rem] font-semibold cursor-pointer hover:text-yellow-400 duration-200 smooth">
                      <div className="group inline-flex items-center">
                        Software
                        <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180 ml-2" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <div className="relative leading-[1.5rem] font-semibold cursor-pointer hover:text-yellow-400 duration-200 smooth">
                      <div className="group inline-flex items-center">
                        Edu-Tech
                        <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180 ml-2" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                    <div className="flex flex-row items-center justify-center hover:text-yellow-400 duration-200 smooth">
                      <div className="relative leading-[1.5rem] font-semibold whitespace-nowrap cursor-pointer">
                        About Us
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-center">
                    <div className="self-stretch relative leading-[1.5rem] font-semibold whitespace-nowrap"></div>
                  </div>
                </div>
                <div className="group flex flex-row items-start justify-start gap-[0.5rem]">
                  <div className="flex flex-row items-center justify-center">
                    <div className="relative leading-[1.5rem] font-semibold cursor-pointer bg-yellow-400 p-2 rounded-3xl text-black hover:ring-2 hover:scale-110 transition duration-300 hover:shadow-yellow">
                      <div className="inline-flex items-center font-bold">
                        Contact Us{" "}
                        <FaAngleRight className="transition-transform duration-300 group-hover:rotate-90 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[90rem] relative max-h-full hidden max-w-full"
          alt=""
          src="/divider.svg"
        />
      </div>
      <div className="h-[54.34rem] w-[54.34rem] relative rounded-[50%] bg-amber-500-primary [filter:blur(235.23px)] hidden opacity-[0.2] max-w-full" />
    </header>
  );
};

export default Navbar;
