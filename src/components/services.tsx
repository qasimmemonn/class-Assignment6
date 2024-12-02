import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="container mx-auto w-full h-100vh">
      <div>
        <h2 className="text-center text-3xl text-black font-bold font-font1 pt-24">
          Explore Courses By Category
        </h2>
        <p className="text-center font-font1 pt-5">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div className=" flex flex-wrap justify-center items-center pt-16 gap-5">
        <div className="bg-[#F7F7F7] py-4 px-4">
          <div className="flex justify-center items-center">
            <Image
              className="bg-white py-8 px-8 size-24 "
              src="/images/pen-tool-2.png"
              alt=""
              width={100}
              height={100}
            />
            <div>
              {" "}
              <h2 className=" text-center font-semibold font-font1 px-6 pr-10 text-lg">
                Design & Development
              </h2>
              <p className="text-center font-font1 pt-1 mr-10">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] py-4 px-4">
          <div className="flex justify-center items-center">
            <Image
              className="bg-white py-8 px-8 size-24 "
              src="/images/volume-high.png"
              alt=""
              width={100}
              height={100}
            />
            <div>
              {" "}
              <h2 className=" text-center font-semibold font-font1 px-6 pr-10 text-lg">
                Design & Development
              </h2>
              <p className="text-center font-font1 pt-1 mr-10">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] py-4 px-4">
          <div className="flex justify-center items-center">
            <Image
              className="bg-white py-8 px-8 size-24 "
              src="/images/group.png"
              alt=""
              width={100}
              height={100}
            />
            <div>
              {" "}
              <h2 className=" text-center font-semibold font-font1 px-6 pr-10 text-lg">
                Design & Development
              </h2>
              <p className="text-center font-font1 pt-1 mr-10">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] py-4 px-4">
          <div className="flex justify-center items-center">
            <Image
              className="bg-white py-8 px-8 size-24 "
              src="/images/microphone.png"
              alt=""
              width={100}
              height={100}
            />
            <div>
              {" "}
              <h2 className=" text-center font-semibold font-font1 px-6 pr-10 text-lg">
                Design & Development
              </h2>
              <p className="text-center font-font1 pt-1 mr-10">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] py-4 px-4">
          <div className="flex justify-center items-center">
            <Image
              className="bg-white py-8 px-8 size-24 "
              src="/images/link.png"
              alt=""
              width={100}
              height={100}
            />
            <div>
              {" "}
              <h2 className=" text-center font-semibold font-font1 px-6 pr-10 text-lg">
                Design & Development
              </h2>
              <p className="text-center font-font1 pt-1 mr-10">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] py-4 px-4">
          <div className="flex justify-center items-center">
            <Image
              className="bg-white py-8 px-8 size-24 "
              src="/images/arrow-2.png"
              alt=""
              width={100}
              height={100}
            />
            <div>
              {" "}
              <h2 className=" text-center font-semibold font-font1 px-6 pr-10 text-lg">
                Design & Development
              </h2>
              <p className="text-center font-font1 pt-1 mr-10">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] py-4 px-4">
          <div className="flex justify-center items-center">
            <Image
              className="bg-white py-8 px-8 size-24 "
              src="/images/briefcase.png"
              alt=""
              width={100}
              height={100}
            />
            <div>
              {" "}
              <h2 className=" text-center font-semibold font-font1 px-6 pr-10 text-lg">
                Design & Development
              </h2>
              <p className="text-center font-font1 pt-1 mr-10">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] py-4 px-4">
          <div className="flex justify-center items-center">
            <Image
              className="bg-white py-8 px-8 size-24 "
              src="/images/copy.png"
              alt=""
              width={100}
              height={100}
            />
            <div>
              {" "}
              <h2 className=" text-center font-semibold font-font1 px-6 pr-10 text-lg">
                Design & Development
              </h2>
              <p className="text-center font-font1 pt-1 mr-10">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] py-4 px-4">
          <div className="flex justify-center items-center">
            <Image
              className="bg-white py-8 px-8 size-24 "
              src="/images/book.png"
              alt=""
              width={100}
              height={100}
            />
            <div>
              {" "}
              <h2 className=" text-center font-semibold font-font1 px-6 pr-10 text-lg">
                Design & Development
              </h2>
              <p className="text-center font-font1 pt-1 mr-10">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="flex mx-auto bg-white border border-black  py-1 px-3  hover:bg-black hover:text-white rounded mt-16 font-font1">
        View All Courses
      </button>
    </div>
  );
};

export default Services;
