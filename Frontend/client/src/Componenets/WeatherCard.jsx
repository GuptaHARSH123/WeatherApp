import React from "react";

const WeatherCard = ({ weather }) => {
  const { temp, humidity, windSpeed, condition, icon } = weather;

  return (
    <div className="max-w-xs mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
      <h2 className="text-2xl font-semibold text-center">{condition}</h2>
      <div className="flex justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={condition}
          className="w-24 h-24"
        />
      </div>
      <p className="text-center text-xl">Temp: {temp}°C</p>
      <p className="text-center text-lg">Humidity: {humidity}%</p>
      <p className="text-center text-lg">Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
