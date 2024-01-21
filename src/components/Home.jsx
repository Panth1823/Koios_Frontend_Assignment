import React from "react";
import Background from "../assets/Background.png";
import Turn from "../assets/Turn.png";
import { FaAngleRight } from "react-icons/fa";
import cp1 from "../assets/cp1.png";
import cp2 from "../assets/cp2.png";
import cp3 from "../assets/cp3.png";
import cp4 from "../assets/cp4.png";
import Card from "../assets/card.png";
import Spotlight from "../assets/light.png";
import Engineering from "../assets/eng.png";
import Education from "../assets/edu.png";
import Software from "../assets/soft.png";
import Footer from "../assets/footer.png";
import Call from "../assets/call.png";
import Mail from "../assets/mail.png";
import Logo from "../assets/logo.png";
import Insta from "../assets/insta.png";
import Linkedin from "../assets/linkedin.png";

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url()`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={backgroundImageStyle}>
      <div className="bg-home-background">
        <section
          className="h-screen max-w-full bg-cover bg-center relative pt-4"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>{" "}
          {/* Overlay to darken the background */}
          <div className="flex justify-center items-center mx-auto">
            <h1 className="text-white capitalize font-inherit text-transparent !bg-clip-text [background:linear-gradient(92.31deg,_#ffbf00,_#0d9bbf_44.74%,_#fff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-[1.88rem] mq450:leading-[3rem] mq1050:text-[3.13rem] mq1050:leading-[4.5rem] font-bold pt-0 font-h1 ">
              <p className="m-0 justify-center text-center p-1 pt-28 text-[6rem]">
                implementing
              </p>
              <p className="m-0 text-[6rem] p-1">your ideas to reality</p>
            </h1>
          </div>
          <div className="mt-8 cursor-pointer">
            <h1 className="flex justify-center text-white text-2xl font-xl-header-semibold">
              Endless Solutions, One Destination
            </h1>
            <div className="flex justify-center mt-4">
              <button className=" bg-woodsmoke-bg-950-bg border-2 border-yellow-400 text-white text-sm rounded-3xl px-5 mt-3 py-2 cursor-pointer hover:scale-110 transition duration-300 hover:shadow-yellow">
                <div className="group inline-flex items-center font-xl-header-semibold text-yellow-400 ">
                  Get Started{" "}
                  <FaAngleRight className="transition-transform group-hover:rotate-90 duration-300 p-1" />
                </div>
              </button>
            </div>
          </div>
        </section>
        <section className=" h-60 max-w-full bg-woodsmoke-bg-950-bg">
          <div className="flex justify-between items-center mx-auto  pt-24 p-28 gap-3">
            <div>
              <img src={cp1} alt=" cp1" />
            </div>
            <div>
              <img src={cp2} alt=" cp2" />
            </div>
            <div>
              <img src={cp3} alt=" cp3" />
            </div>
            <div>
              <img src={cp4} alt="cp4 " />
            </div>
          </div>
        </section>
        <section className="h-screen max-w-full bg-woodsmoke-bg-950-bg flex items-start bg-none">
          <div className="mx-auto">
            <img className="mx-auto" alt="spotlight" src={Spotlight} />
            <div className="mt-[-150px]">
              <div>
                <h1 className="flex justify-center items-center mx-auto pt-0 text-29xl text-yellow-400 font-h1 mt-0 capitalize font-inherit">
                  Why Us
                </h1>
                <div>
                  <p className="flex justify-center items-center mx-auto text-gray-300 text-xl font-xl-header-semibold">
                    Providing the best services as a one-stop destination for
                    the design and development of all your solutions.
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-8 justify-center mt-14 pb-10">
                  {[...Array(8)].map((_, i) => (
                    <div className="p-2 max-w-xs" key={i}>
                      <div className="flex flex-col items-start rounded-lg h-60 w-52 p-6 bg-gray-200">
                        <img src={Card} alt="card" className="" />
                        <h1 className="text-white dark:text-white text-lg font-medium p-2 font-xl-header-semibold">
                          Lorem ipsum dolor sit amet
                        </h1>
                        <p className="text-white dark:text-white p-2 mt-0 opacity-80 text-sm font-xl-header-semibold">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quidem veritatis repudiandae perspiciatis.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="h-screen max-w-full bg-cover bg-center relative pt-96"
          style={{ backgroundImage: `url(${Turn})` }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-white">
            <h1 className="text-29xl text-yellow-400 font-h1 capitalize pt-40 pb-0 mb-1 ">
              Our Services
            </h1>
            <p className="text-xl font-xl-header-semibold text-white text-center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <div className="flex justify-between items-center pt-20 w-1/2">
              <div className="justify-start">
                <div className="flex flex-col font-xl-header-semibold">
                  <div className="border flex items-center justify-center mb-4 p-2 rounded-lg bg-gray-200 w-64 h-14 cursor-pointer hover:scale-105 transition duration-300">
                    <img
                      src={Engineering}
                      alt="card"
                      className="w-10 h-10 p-1"
                    />
                    <p className="text-white text-xl">Engineering</p>
                  </div>
                  <div className="flex items-center justify-center mb-4 p-2 rounded-lg bg-gray-200 h-14 cursor-pointer hover:scale-105 transition duration-300">
                    <img src={Software} alt="card" className="w-10 h-10 p-1 " />
                    <p className="opacity-70 text-white text-xl">Software</p>
                  </div>
                  <div className="flex items-center justify-center p-2 rounded-lg bg-gray-200 h-14 cursor-pointer hover:scale-105 transition duration-300">
                    <img src={Education} alt="card" className="w-10 h-10 p-1" />
                    <p className="p-0 opacity-70 text-white text-xl">
                      Edu-Tech
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start pl-5 text-white font-xl-header-semibold ">
                <h1 className="text-5xl leading-relaxed font-bold">
                  Engineering Solutions
                </h1>
                <p className="leading-relaxed pt-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla porro architecto doloribus sint ab cum repellat eius
                  voluptatum exercitationem! Laboriosam voluptates optio ad rem
                  illum eos ea aliquid ex sequi.
                </p>
                <div>
                  <button className="border border-yellow-400 text-md rounded-2xl h-10 w-28 cursor-pointer text-yellow-400 bg-woodsmoke-bg-950-bg hover:scale-110 transition duration-300 hover:shadow-yellow ">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-screen max-w-full  bg-woodsmoke-bg-950-bg">
          <div>
            <div className=" mx-auto justify-center flex items-center pt-28 pb-14 ">
              <img
                src={Footer}
                className="hover:scale-110 transition duration-300 hover:shadow-yellow rounded-lg"
                alt="footer"
              />
            </div>
            <div className="p-0 text-center justify-center flex flex-col items-center font-xl-header-semibold text-white text-17xl">
              <h1 className="m-0 p-0">Lets Establish a</h1>
              <h1 className="m-0 p-0">
                <span>Connection Now</span>
              </h1>
            </div>
            <div className="flex justify-center space-x-6 pt-10">
              <button className="flex justify-center items-center bg-yellow-400 font-xl-header-semibold text-black rounded-3xl px-4 py-2 w-38 h-12 text-md cursor-pointer hover:scale-110 transition duration-300 hover:shadow-yellow  font-bold ">
                Call Now <img src={Call} className="ml-2 h-5  w-5" />
              </button>
              <button className="border border-yellow-400 flex justify-center items-center bg-woodsmoke-bg-950-bg  text-white rounded-3xl font-xl-header-semibold px-4 py-2 w-38 h-12 text-md cursor-pointer hover:scale-110 transition duration-300 hover:shadow-yellow font-bold">
                Mail to <img src={Mail} className="ml-2  " />
              </button>
            </div>

            <div className="flex items-center justify-center pt-20">
              <img src={Logo} />
              <h1 className="ml-4 text-white font-xl-header-semibold text-sm">
                Koios Engineering Solutions
              </h1>
            </div>

            <div className="flex justify-center pt-10 text-gray-50 opacity-80 ">
              <div className="flex flex-wrap justify-between text-center">
                <p className="w-1/3 cursor-pointer">Engineering</p>
                <p className="w-1/3 cursor-pointer">Software</p>
                <p className="w-1/3 cursor-pointer">Edu-Tech</p>
                <p className="w-1/2 cursor-pointer">About Us</p>
                <p className="w-1/2 cursor-pointer">Careers</p>
              </div>
            </div>
            <div className="bg-gray-400 h-0.5 w-3/4 mx-auto mt-10 mb-5 opacity-10"></div>
            <div className="flex justify-between items-center text-gray-50 font-xl-header-semibold">
              <div className="  pl-60">
                <img src={Insta} alt="insta" className=" p-2" />
                <img src={Linkedin} alt="linkedin" className=" p-2" />
              </div>

              <div>
                <p>@ 2023 All rights reserved.</p>
              </div>

              <div className=" pr-60">
                <p>Privacy Policy | Terms of Service</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
