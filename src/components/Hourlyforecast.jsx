import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Hourlyforecast = ({ hourlyData }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="mt-6 relative">
      {/* Scrollable Images */}
      <div
        ref={scrollRef}
        className="flex gap-4 mx-9 py-9 overflow-x-auto scrollbar-hidden"
      >
        {hourlyData.map((hour, index) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-lg bg-green-100 
                       py-3 rounded px-6 min-w-[107px]"
          >
            <p className="pb-3 font-semibold text-lg">
              {new Date(hour.time).getHours()}:00
            </p>
            <img src={hour.condition.icon} alt="weather" className="h-20" />
            <p className="pt-2 font-semibold text-lg">{hour.temp_c}°C</p>
          </div>
        ))}
      </div>

      {/* Left Angle (moved outward) */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 
                   bg-green-500 text-white rounded-full w-9 h-9 
                   flex items-center justify-center shadow-md"
      >
        <FaAngleLeft />
      </button>

      {/* Right Angle (moved outward) */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 
                   bg-green-500 text-white rounded-full w-9 h-9 
                   flex items-center justify-center shadow-md"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Hourlyforecast;
