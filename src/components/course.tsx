import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosStarOutline } from "react-icons/io";

const Course = () => {
  return (
    <div>
      <section id="course" className="text-gray-600 body-font ">
        <div className="container px-5 py-20 mx-auto">
          <div className=" text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-bold mb-4 font-font1 text-gray-900">
              Courses
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Your Ultimate Guide to learning
            </p>

            <header className="flex justify-center pt-10 space-x-6">
              <Link href="#Popular">
                <ul className="relative group text-gray-600 hover:text-black">
                  Popular
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </ul>
              </Link>
              <Link href="#Recommended">
                <ul className="relative group text-gray-600 hover:text-black">
                  Recommended
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </ul>
              </Link>
              <Link href="#Best Price">
                <ul className="relative group text-gray-600 hover:text-black">
                  Best Price
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </ul>
              </Link>
            </header>
          </div>

          <div
            id="Popular"
            className="flex flex-wrap  justify-center items-center gap-12"
          >
            <div className=" border-l-2 border-gray-200 border-opacity-60 bg-[#F7F7F7]">
              <Image src="/images/image.png" alt="" width={310} height={300} />
              <div className="flex justify-between py-4 px-2">
                <h3 className="font-font1">Design</h3>
                <p className="flex items-center gap-1 font-font1">
                  <IoIosStarOutline className="size-5 mb-1" />
                  5.0
                </p>
              </div>
              <h2 className="text-lg sm:text-xl text-gray-900 font-font1 font-semibold mb-2 px-2">
                UX/UI Design 201
              </h2>
              <p className="leading-relaxed text-base mb-4 px-2">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Suspendisse varius enim
                <br /> in eros.
              </p>
              <div className="flex gap-6 items-center pb-6 px-2">
                <button className="bg-[#F7F7F7] border border-black  py-1 px-3  hover:bg-black hover:text-white rounded text-base mt-4 md:mt-0 font-font1">
                  Enroll Now
                </button>
                <h2 className="font-semibold">$400</h2>
              </div>
            </div>

            <div
              id="Popular"
              className=" border-l-2 border-gray-200 border-opacity-60 bg-[#F7F7F7]"
            >
              <Image src="/images/img1.png" alt="" width={310} height={300} />
              <div className="flex justify-between py-4 px-2">
                <h3 className="font-font1">Programmimg</h3>
                <p className="flex items-center gap-1 font-font1">
                  <IoIosStarOutline className="size-5 mb-1" />
                  5.0
                </p>
              </div>
              <h2 className="text-lg sm:text-xl text-gray-900 font-font1 font-semibold mb-2 px-2">
                Introduction to Python
              </h2>
              <p className="leading-relaxed text-base mb-4 px-2">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Suspendisse varius enim
                <br /> in eros.
              </p>
              <div className="flex gap-6 items-center pb-6 px-2">
                <button className="bg-[#F7F7F7] border border-black  py-1 px-3  hover:bg-black hover:text-white rounded text-base mt-4 md:mt-0 font-font1">
                  Enroll Now
                </button>
                <h2 className="font-semibold">$400</h2>
              </div>
            </div>

            <div
              id="Recommended"
              className=" border-l-2 border-gray-200 border-opacity-60 bg-[#F7F7F7]"
            >
              <Image src="/images/img2.png" alt="" width={310} height={300} />
              <div className="flex justify-between py-4 px-2">
                <h3 className="font-font1">Business</h3>
                <p className="flex items-center gap-1 font-font1">
                  <IoIosStarOutline className="size-5 mb-1" />
                  5.0
                </p>
              </div>
              <h2 className="text-lg sm:text-xl text-gray-900 font-font1 font-semibold mb-2 px-2">
                Data Analysis for Beginners
              </h2>
              <p className="leading-relaxed text-base mb-4 px-2">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Suspendisse varius enim
                <br /> in eros.
              </p>
              <div className="flex gap-6 items-center pb-6 px-2">
                <button className="bg-[#F7F7F7] border border-black  py-1 px-3  hover:bg-black hover:text-white rounded text-base mt-4 md:mt-0 font-font1">
                  Enroll Now
                </button>
                <h2 className="font-semibold">$400</h2>
              </div>
            </div>

            <div
              id="Recommended"
              className=" border-l-2 border-gray-200 border-opacity-60 bg-[#F7F7F7]"
            >
              <Image src="/images/cour5.png" alt="" width={310} height={300} />
              <div className="flex justify-between py-4 px-2">
                <h3 className="font-font1">Art</h3>
                <p className="flex items-center gap-1 font-font1">
                  <IoIosStarOutline className="size-5 mb-1" />
                  5.0
                </p>
              </div>
              <h2 className="text-lg sm:text-xl text-gray-900 font-font1 font-semibold mb-2 px-2">
                Art Specialization
              </h2>
              <p className="leading-relaxed text-base mb-4 px-2">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Suspendisse varius enim
                <br /> in eros.
              </p>
              <div className="flex gap-6 items-center pb-6 px-2">
                <button className="bg-[#F7F7F7] border border-black  py-1 px-3  hover:bg-black hover:text-white rounded text-base mt-4 md:mt-0 font-font1">
                  Enroll Now
                </button>
                <h2 className="font-semibold">$400</h2>
              </div>
            </div>

            <div
              id="Best Price"
              className=" border-l-2 border-gray-200 border-opacity-60 bg-[#F7F7F7]"
            >
              <Image src="/images/cour4.png" alt="" width={310} height={300} />
              <div className="flex justify-between py-4 px-2">
                <h3 className="font-font1">Law</h3>
                <p className="flex items-center gap-1 font-font1">
                  <IoIosStarOutline className="size-5 mb-1" />
                  5.0
                </p>
              </div>
              <h2 className="text-lg sm:text-xl text-gray-900 font-font1 font-semibold mb-2 px-2">
                Rule of Law
              </h2>
              <p className="leading-relaxed text-base mb-4 px-2">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Suspendisse varius enim
                <br /> in eros.
              </p>
              <div className="flex gap-6 items-center pb-6 px-2">
                <button className="bg-[#F7F7F7] border border-black  py-1 px-3  hover:bg-black hover:text-white rounded text-base mt-4 md:mt-0 font-font1">
                  Enroll Now
                </button>
                <h2 className="font-semibold">$400</h2>
              </div>
            </div>

            <div
              id="Best Price"
              className=" border-l-2 border-gray-200 border-opacity-60 bg-[#F7F7F7]"
            >
              <Image src="/images/cour6.png" alt="" width={310} height={300} />
              <div className="flex justify-between py-4 px-2">
                <h3 className="font-font1">Tech</h3>
                <p className="flex items-center gap-1 font-font1">
                  <IoIosStarOutline className="size-5 mb-1" />
                  5.0
                </p>
              </div>
              <h2 className="text-lg sm:text-xl text-gray-900 font-font1 font-semibold mb-2 px-2">
                Introduction to webflow
              </h2>
              <p className="leading-relaxed text-base mb-4 px-2">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Suspendisse varius enim
                <br /> in eros.
              </p>
              <div className="flex gap-6 items-center pb-6 px-2">
                <button className="bg-[#F7F7F7] border border-black  py-1 px-3  hover:bg-black hover:text-white rounded text-base mt-4 md:mt-0 font-font1">
                  Enroll Now
                </button>
                <h2 className="font-semibold">$400</h2>
              </div>
            </div>
          </div>

          <button className="flex mx-auto bg-white border border-black  py-1 px-3  hover:bg-black hover:text-white rounded mt-16 font-font1">
            View All Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default Course;
