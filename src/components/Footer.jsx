import React from "react";
import edxLogo from "../assets/openEdxlogo.png"; // Replace with your logo

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className=" max-w-7xl mx-auto py-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-800">

        {/* Column 1: College Info */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-1">Ramanujan College</h3>
          <p className="text-sm text-gray-600">University of Delhi</p>
          <p className="text-sm font-medium text-gray-700 mt-1">Kalkaji, New Delhi 110019</p>
          <button className="mt-4 px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-full shadow transition-all duration-300">
            ✉ Email Us
          </button>
        </div>

        {/* Column 2: Media Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Media</h4>
          <ul className="space-y-2 text-md">
            {["Home", "Our Courses", "RCMOOCs", "Certificate Verification", "FAQ"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-500 transition duration-200">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h4>
          <p className="text-md text-gray-600">📧 stc@ramanujan.du.ac.in</p>
          <p className="text-md text-gray-600 mt-1">📞 7011863335 / 7011527088</p>
        </div>

        {/* Column 4: Logo Support */}
        <div className="flex flex-col items-start">
          <h4 className="text-lg font-semibold text-gray-900">Supported by</h4>
          <img src={edxLogo} alt="edX Logo" className="w-42 md:w-50 object-contain" />
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#e6e6e6] py-4 text-center text-sm text-gray-700">
        © {new Date().getFullYear()} <strong>Ramanujan College</strong>. All rights reserved. Created by{" "}
        <a href="#" className="text-blue-700 font-semibold hover:underline">RDSC</a>
      </div>
    </footer>
  );
};

export default Footer;
