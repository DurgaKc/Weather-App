import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import clear from "./assets/clear.jpeg";
import Hourlyforecast from "./components/Hourlyforecast";
const App = () => {
  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center">
      {/* card container */}
      <div className="bg-white shadow-lg mt-10 p-4 rounded w-full max-w-sm">
        <div className="flex">
          <div className="flex border rounded items-center px-2 py-2 w-full">
            <FaSearch className="h-7 w-10" />{" "}
            <input
              type="text"
              placeholder="Enter your city Name"
              className="ml-20 border-none focus:outline-none w-full"
            />
          </div>
          {/* current location button */}
          <button className="px-2 py-2 bg-green-500 text-white ml-2 rounded hover:bg-green-600">
            <FaMapMarkerAlt className="w-6 h-7" />
          </button>
        </div>
        {/* Weather data display */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">Madrid</h2>
          {/* weather icon */}
          <img src={clear} className="mx-auto h-40" />
          <p className="text-lg font-semibold">5&deg;C</p>
          <p className="text-sm capitalize font-bold">Cloudy</p>

          {/* hourly forecast */}
          <Hourlyforecast />
        </div>
      </div>
    </div>
  );
};

export default App;
