import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

export default function Weather() {
  const [city, setCity] = useState("Delhi");

  return (
    <div className="w-full h-60 flex items-center justify-center bg-[#e2d4ff] p-4">
      <div className="bg-gradient-to-b from-indigo-400 to-purple-400 rounded-3xl p-6 w-[300px] text-white shadow-xl">
        
        {/* Search Bar */}
        <div className="flex items-center justify-between bg-white rounded-full px-4 py-2 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 text-black outline-none"
            placeholder="Search city"
          />
          <button className="text-black text-xl">
            <FiSearch />
          </button>
        </div>

        {/* Weather Icon */}
        <div className="text-6xl flex justify-center mb-4">
          ☀️
        </div>

        {/* Temperature */}
        <h1 className="text-5xl font-bold text-center">41°C</h1>

        {/* City name */}
        <p className="text-center text-xl mt-2">Delhi</p>

        {/* Humidity & Wind */}
        <div className="flex justify-between items-center mt-10 px-2">
          <div className="text-center">
            <div className="text-3xl"><WiHumidity /></div>
            <p className="text-lg">20%</p>
            <p className="text-sm opacity-80">Humidity</p>
          </div>

          <div className="text-center">
            <div className="text-2xl"><FaWind /></div>
            <p className="text-lg">3.09 Km/h</p>
            <p className="text-sm opacity-80">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
