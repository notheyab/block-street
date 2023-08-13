import React from 'react';
import './styles/temperatureToggle.css'; 

function TemperatureToggle({ isCelsius, toggleUnit }) {
  return (
    <button className="temperature-toggle-btn" onClick={toggleUnit}>
         {isCelsius ? "Fahrenheit" : "Celsius"}
    </button>
  );
}

export default TemperatureToggle;
