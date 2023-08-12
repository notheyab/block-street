import React, { useState } from 'react';
import './main.css';
import Dropdown from '../components/dropdown';

function generateSuggestions(input) {
  const predefinedCities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston'
  ];

  return predefinedCities.filter(city => city.toLowerCase().startsWith(input.toLowerCase()));
}

function WeatherApp() {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleCityChange = (event) => {
    const inputCity = event.target.value;
    setCity(inputCity);

    const filteredSuggestions = generateSuggestions(inputCity);
    setSuggestions(filteredSuggestions);
  };

  const handleFetchWeather = () => {
    // Implement the logic to fetch weather data based on the 'city' state here
    // You can call your backend or API to retrieve the weather data
    // Update the UI to display the weather data once fetched
  };

  const handleDropdownClickOutside = () => {
    setSuggestions([]);
  };

  return (
    <div className="weather-app">
      <h1 className="app-title">Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          className="city-input"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
        />
        <button className="fetch-button" onClick={handleFetchWeather}>Search</button>
      </div>
      {/* Dropdown */}
      {suggestions.length > 0 && (
        <Dropdown
          suggestions={suggestions}
          onClickOutside={handleDropdownClickOutside}
        />
      )}
    </div>
  );
}

export default WeatherApp;

