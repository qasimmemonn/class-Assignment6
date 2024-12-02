"use client";

import { useState } from "react";

const testimonialsData = [
  {
    id: 1,
    name: "James Nduku",
    title: "Software Developer",
    avatar: "/images/avatar1.png",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 2,
    name: "Erick Kipkemboi",
    title: "Scrum Master",
    avatar: "/images/avatar.png",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    id: 3,
    name: "Stephen Kerubo",
    title: "UI/UX Designer",
    avatar: "/images/img.png",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const handleDotClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonial" className="py-16 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-start mb-10">
          <h2 className="text-4xl font-bold">Customer Testimonials</h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`p-6 border border-black shadow-lg bg-[#F7F7F7] transition-transform duration-500 ${
                index === currentIndex ? "scale-100" : "scale-90 opacity-50"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-black-400"
                    >
                      <path d="M12 .587l3.668 7.57 8.332 1.151-6.001 5.804 1.399 8.223L12 18.898l-7.398 4.437 1.399-8.223-6.001-5.804 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="italic text-gray-700 mb-6">
                "{testimonial.feedback}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*Navigate*/}
        <div className="flex justify-end mt-8 space-x-4">
          <button
            className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </button>
          <button
            className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z" />
            </svg>
          </button>
        </div>

        {/*Dots*/}
        <div className="flex mb-20 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex
                  ? "bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
