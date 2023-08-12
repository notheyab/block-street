import React, { useRef, useEffect } from 'react';
import './autocomplete.css';

function Dropdown({ suggestions, onClickOutside }) {
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      onClickOutside(); // Call the parent's onClickOutside function
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClickOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return (
    <ul ref={dropdownRef} className="autocomplete-list">
      {suggestions.map((suggest, index) => (
        <li key={index}>{suggest}</li>
      ))}
    </ul>
  );
}

export default Dropdown;

