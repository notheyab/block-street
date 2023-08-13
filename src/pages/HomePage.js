import React, { useState } from 'react';
import './styles/main.css';
import Dropdown from '../components/dropdown';
import { majorWorldCities } from '../components/cities';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleCityChange = (event) => {
    const inputCity = event.target.value;
    setCity(inputCity);

    const filteredSuggestions = majorWorldCities.filter(city =>
      city.toLowerCase().startsWith(inputCity.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
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
      </div>
      {/* Dropdown */}
      {suggestions.length > 0 && (
        <Dropdown suggestions={suggestions} onClickOutside={handleDropdownClickOutside} />
      )}
    </div>
  );
}

export default WeatherApp;




