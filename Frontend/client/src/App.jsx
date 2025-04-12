import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./Componenets/WeatherCard";
import SearchBar from "./Componenets/SearchBar";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(res.data);
    } catch (err) {
      setError("City not found or network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-700">Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <p className="text-xl text-blue-500">Loading...</p>}
      {error && <p className="text-xl text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
