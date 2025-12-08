import React from "react";
import img from "../assets/cloud.jpeg";
import "./Hourlyforecast.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Hourlyforecast = () => {
  return (
    <div className="mt-6">
      <div
        className="flex gap-4 mx-6 py-6 overflow-x-auto scrollbar-hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* one hour */}
        <div className="flex flex-col items-center shadow-lg bg-green-100 py-2 rounded px-4">
          <p className="pb-2 font-semibold">14:00</p>
          <img src={img} alt="weather icon" className="w-20 h-20 mx-auto" />
          <p className="pt-2 font-semibold">2&deg;C</p>
        </div>
        <div className="flex flex-col items-center shadow-lg bg-green-100 py-2 rounded px-4">
          <p className="pb-2 font-semibold">14:00</p>
          <img src={img} alt="weather icon" className="w-20 h-20 mx-auto" />
          <p className="pt-2 font-semibold">2&deg;C</p>
        </div>
        <div className="flex flex-col items-center shadow-lg bg-green-100 py-2 rounded px-4">
          <p className="pb-2 font-semibold">14:00</p>
          <img src={img} alt="weather icon" className="w-20 h-20 mx-auto" />
          <p className="pt-2 font-semibold">2&deg;C</p>
        </div>
        <div className="flex flex-col items-center shadow-lg bg-green-100 py-2 rounded px-4">
          <p className="pb-2 font-semibold">14:00</p>
          <img src={img} alt="weather icon" className="w-20 h-20 mx-auto" />
          <p className="pt-2 font-semibold">2&deg;C</p>
        </div>
        <div className="flex flex-col items-center shadow-lg bg-green-100 py-2 rounded px-4">
          <p className="pb-2 font-semibold">14:00</p>
          <img src={img} alt="weather icon" className="w-20 h-20 mx-auto" />
          <p className="pt-2 font-semibold">2&deg;C</p>
        </div>
      </div>
      {/* scrollbar buttons */}
      <button className="absolute left-0 top-1/2 bg-green-500 text-white transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center">
        <FaAngleLeft className="w-4 h-4" />
        
      </button>
      <button className="absolute right-0 top-1/2 bg-green-500 text-white transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center">
        <FaAngleRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Hourlyforecast;
