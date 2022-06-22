import React, { useEffect, useState } from "react";
import CodeBlock from '@theme/CodeBlock';
import styles from "./styles.module.css";

const API_KEY = "";

const BASE_WEATHER_API_URL = "https://api.openweathermap.org/data/3.0/onecall";

const SIMI_VALLEY_LOC = { lat: 34.2694, lon: -118.7815 };

const generateWeatherQueryParamString = (lat, lon, exclude = []) => {
  return `?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}`;
};

const getWeatherUrl = (lat, lon, exclude = []) => {
  return (
    BASE_WEATHER_API_URL + generateWeatherQueryParamString(lat, lon, exclude)
  );
};

export default function ShowWeather() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeather = (lat, lon, exclude = ['lat', 'lon', 'timezone', 'timezone_offset', 'minutely', 'hourly', 'daily']) => {
    try {
      window
        .fetch(getWeatherUrl(lat, lon, exclude))
        .then((response) => response.json())
        .then((data) => setWeatherData(JSON.stringify(data.current)));
    } catch (error) {
      console.log(`Error fetching weather data:\n\n ${error}`);
    }
  };

  useEffect(() => {
    if (!weatherData && window) {
      handleWeather(SIMI_VALLEY_LOC.lat, SIMI_VALLEY_LOC.lon);
    }
  }, []);

  return (
    <div className={styles.weatherWidget}>
      <CodeBlock language="json">{weatherData}</CodeBlock>
    </div>
  );
}
