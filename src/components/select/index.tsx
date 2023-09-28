import React, { useEffect, useState } from "react";
import './select.css';
import countriesData from "../../json/countries.json"; // imported 'countries.json'...

interface CountryProps {
  id: number;
  name: string;
}

const Select: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [countries, setCountries] = useState<CountryProps[]>([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="styled-select-container">
      <label className="<styled-label>">Country</label>
      <select
        className="styled-select"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option className="styled-option" value={""}>
          Country
        </option>
        {countries.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <p className="styled-paragraph">Selected: {selectedCountry}</p>
      )}
    </div>
  );
};

export default Select;
