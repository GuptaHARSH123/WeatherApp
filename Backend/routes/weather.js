const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);

    const { temp, humidity } = response.data.main;
    const { speed: windSpeed } = response.data.wind;
    const { main: condition, icon } = response.data.weather[0];

    res.json({ temp, humidity, windSpeed, condition, icon });
  } catch (err) {
    res.status(500).json({ error: "City not found or API error" });
  }
});

module.exports = router;
