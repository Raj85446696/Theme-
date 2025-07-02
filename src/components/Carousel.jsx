import React, { useState } from "react";
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
const images = [image2,image1];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="relative w-full  mx-auto mb-8">
      {/* Image */}
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="w-full h-88 object-cover  shadow-lg transition duration-500"
      />

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2  text-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
