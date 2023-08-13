import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/weatherDisplay.css';
import './styles/loading.css';
import TemperatureToggle from '../components/temperatureToggle'; // Update the import path

function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true); // State to track temperature unit
  const { city } = useParams();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_OpenAPIKey;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error("Error fetching weather data:", error));
  }, [city]);

  if (!weatherData) {
    return (
      <div className="loading-screen">
        <p className="loading-text">Loading weather data...</p>
      </div>
    );
  }

  const temperatureKelvin = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;
  const weatherIconCode = weatherData.weather[0].icon;
  const weatherIconUrl = `http://openweathermap.org/img/w/${weatherIconCode}.png`;
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;

  const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(2); // Convert to Celsius
  const temperatureFahrenheit = (temperatureCelsius * 9/5 + 32).toFixed(2); // Convert to Fahrenheit

  const temperatureUnit = isCelsius ? "°C" : "°F";
  const temperatureValue = isCelsius ? temperatureCelsius : temperatureFahrenheit;

  return (
    <div className="weather-display">
      <h2> {city} </h2>
      <img
        className="weather-icon"
        src={weatherIconUrl}
        alt="Weather Icon"
      />
      <p className="weather-description">{weatherDescription}</p>
      <p className="temperature">{temperatureValue} {temperatureUnit}</p>
      <TemperatureToggle isCelsius={isCelsius} toggleUnit={() => setIsCelsius(!isCelsius)} />
      <div className="additional-details">
        <p className="detail-label">Humidity:</p>
        <p className="detail-value">{humidity}%</p>
        <p className="detail-label">Wind Speed:</p>
        <p className="detail-value">{windSpeed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;




