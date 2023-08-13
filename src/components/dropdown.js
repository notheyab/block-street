import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/autocomplete.css';

function Dropdown({ suggestions, onClickOutside }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [onClickOutside]);

  return (
    <ul ref={dropdownRef} className="autocomplete-list">
      {suggestions.map((suggest, index) => (
        <li key={index}>
          <Link to={`/weather/${suggest}`}>{suggest}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;






