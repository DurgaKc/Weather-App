import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Hourlyforecast from "./components/Hourlyforecast";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const api_key = "2aacda26d5f74d7ea3d41532250912";
  const api_url = "https://api.weatherapi.com/v1/forecast.json";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${api_url}?key=${api_key}&q=${city}&days=1`
      );
      console.log(response.data.forecast);
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("There was an error or the city data was not found");
      setWeatherData(null);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Fetch weather using coordinates
          axios
            .get(`${api_url}?key=${api_key}&q=${latitude},${longitude}&days=1`)
            .then((res) => {
              setWeatherData(res.data);
              setCity("");
              setError("");
            })
            .catch(() => {
              setError("Unable to fetch weather for your location");
            });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser!");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center pb-5">
      <div className="bg-white shadow-lg mt-10 p-4 rounded w-full max-w-md">
        {/* Search Bar */}
        <div className="flex">
          <div className="flex border rounded items-center px-2 py-2 w-full">
            <FaSearch className="h-7 w-10" />
            <input
              type="text"
              placeholder="Enter your city name"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              onKeyUp={handleKeyPress}
              className="ml-2 border-none focus:outline-none w-full"
            />
          </div>

          {/* Current Location Button */}
          <button
            onClick={getCurrentLocation}
            className="px-2 py-2 bg-green-500 text-white ml-2 rounded hover:bg-green-600"
          >
            <FaMapMarkerAlt className="w-6 h-7" />
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* Weather Display */}
        {weatherData && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">{weatherData.location.name}</h2>

            <img
              src={weatherData.current.condition.icon}
              className="mx-auto h-40"
              alt="Weather"
            />

            <p className="text-lg font-semibold">{weatherData.current.temp_c}°C</p>

            {/* FIXED: correct condition text */}
            <p className="text-sm capitalize font-bold">
              {weatherData.current.condition.text}
            </p>

            {/* Hourly Forecast */}
            <Hourlyforecast
              hourlyData={weatherData.forecast.forecastday[0].hour}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
