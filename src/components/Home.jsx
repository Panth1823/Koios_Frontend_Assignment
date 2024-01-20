import React from "react";
import Background from "../assets/Background.png";
import { FaAngleDown } from "react-icons/fa";
import cp1 from "../assets/cp1.png";
import cp2 from "../assets/cp2.png";
import cp3 from "../assets/cp3.png";
import cp4 from "../assets/cp4.png";
import Card from "../assets/card.png";

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={backgroundImageStyle}>
      <div className="bg-home-background">
        <section className="h-screen max-w-full bg-transparent pt-4">
          <div className="flex justify-center items-center mx-auto">
            <h1 className="text-white capitalize font-inherit text-transparent !bg-clip-text [background:linear-gradient(92.31deg,_#ffbf00,_#0d9bbf_44.74%,_#fff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-[1.88rem] mq450:leading-[3rem] mq1050:text-[3.13rem] mq1050:leading-[4.5rem] font-bold pt-0 font-h1 ">
              <p className="m-0 justify-center text-center p-1 pt-28 text-[6rem]">
                implementing
              </p>
              <p className="m-0 text-[6rem] p-1">your ideas to reality</p>
            </h1>
          </div>
          <div>
            <div className=" ">
              <h1 className="flex justify-center text-white text-2xl">
                Endless Solutions, One Destination
              </h1>
              <div className="flex justify-center mt-4">
                <button className="bg-gray-100 border-2 border-yellow-400 text-white text-sm rounded-3xl px-5 mt-3 py-2 cursor-pointer h-14 w-34 hover:shadow-lg transition duration-300  ">
                  <div className="group inline-flex items-center">
                    Get Started{" "}
                    <FaAngleDown className="transition-transform group-hover:rotate-180 duration-300 p-1 " />
                  </div>
                </button>
              </div>
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
        <section className="h-screen max-w-full  bg-woodsmoke-bg-950-bg">
          <div>
            <div>
              <h1 className=" flex justify-center items-center mx-auto pt-28 text-29xl text-yellow-400 font-h1 mt-0 capitalize font-inherit">
                Why Us
              </h1>
              <div>
                <p className="flex justify-center items-center mx-auto text-gray-300 text-xl">
                  Providing the best services as a one-stop destination for the
                  design and development of all your solutions.
                </p>
              </div>
              <div className="grid grid-cols-4 gap-1 justify-center mt-14 pl-40 pr-10  pb-10">
                {[...Array(8)].map((_, i) => (
                  <div className="p-2  max-w-xs" key={i}>
                    <div className="flex flex-col items-start rounded-lg h-60 w-52 p-6 bg-gray-200">
                      <img src={Card} alt="card" className="" />
                      <h1 className="text-white dark:text-white text-lg font-medium p-2">
                        Lorem ipsum dolor sit amet
                      </h1>
                      <p className="text-white dark:text-white p-2 mt-0 opacity-80 text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quidem veritatis repudiandae perspiciatis.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="h-screen max-w-full bg-woodsmoke-bg-950-bg">
          <div>
            <div>
              <h1 className=" flex justify-center items-center mx-auto pt-28 text-29xl text-yellow-400 font-h1 mt-0 capitalize font-inherit">
                Our Services
              </h1>
              <div>
                <p className="flex justify-center items-center mx-auto text-gray-300 text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-28">
  <div className="justify-start">
  <div className="flex flex-col pl-40 ">
  <div className="mb-4 p-2 rounded bg-gray-200 w-52 h-10 text-center">
    <p className="text-white text-xl">Engineering</p>
  </div>
  <div className="mb-4 p-2 rounded bg-gray-200 h-10 text-center">
    <p className="opacity-80 text-white text-xl">Software</p>
  </div>
  <div className="p-2 rounded-md bg-gray-200  h-10 text-center">
    <p className=" p-0 text-center justify-center opacity-80 text-white text-xl">Edu-Tech</p>
  </div>
</div>
  </div>  
  <div>
    
    <h1>Engineering Solutions</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla porro architecto doloribus sint ab cum repellat eius voluptatum exercitationem! Laboriosam voluptates optio ad rem illum eos ea aliquid ex sequi?</p>
    <div>
      <button>Know More</button>
    </div>
  </div>
</div>
        </section>
        <section className="h-screen max-w-full bg-yellow-400 cursor-pointer">
          contact
        </section>
      </div>
    </div>
  );
};

export default Home;
