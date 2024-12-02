import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section id="Home" className="text-gray-600">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center px-32">
            <h1 className=" sm:text-4xl pt-8 text-3xl mb-4 font-bold font-font1 text-gray-900">
              Learn new skills
              <br className="hidden lg:inline-block" /> online with ease
            </h1>
            <p className="mb-8 leading-relaxed">
              Discover a wide range of courses covering a variety of
              <br />
              subjects, taught by expert instructors.
            </p>
            <div className="flex justify-center ">
              <button className="inline-flex bg-black text-white py-2 px-3 hover:bg-white hover:text-black hover:border hover:border-black rounded text-sm font-font1">
                Start learning now
              </button>
              <button className="ml-4 inline-flex bg-white border border-black  py-2 px-3  hover:bg-black hover:text-white rounded text-sm font-font1">
                Explore Courses
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6]">
            <Image src="/images/hero.png" alt="hero" width={640} height={900} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
