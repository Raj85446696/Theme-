import React from "react";
import logo1 from "../assets/image1.png"; // National Mission
import logo2 from "../assets/du.jpg"; // DU
import logo3 from "../assets/Ministry_of_Education_India.svg"; // Ministry
import logo4 from "../assets/Ramanujancollege.png"; // Ramanujan
import logo5 from "../assets/image2.png"; // RDSC

const logos = [logo1, logo2, logo3, logo4, logo5];

const Logos = () => {
  return (
    <div className="bg-white py-3 px-4">
      <div className="flex flex-wrap justify-center gap-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 w-48 h-32 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-h-full max-w-full object-contain transform transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
