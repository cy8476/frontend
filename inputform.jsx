// components/InputForm.js
import React, { useState } from 'react';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValidJson, setIsValidJson] = useState(true);
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const jsonData = JSON.parse(inputValue);
      setIsValidJson(true);
      fetch('/api/process-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      })
        .then((response) => response.json())
        .then((data) => {
          setResponseData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      setIsValidJson(false);
    }
  };

  const handleOptionChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter JSON data"
        />
        <button type="submit">Submit</button>
        {!isValidJson && <div>Invalid JSON format</div>}
      </form>
      {responseData && (
        <div>
          <select multiple onChange={handleOptionChange}>
            <option value="Alphabets">Alphabets</option>
            <option value="Numbers">Numbers</option>
            <option value="Highest alphabet">Highest alphabet</option>
          </select>
          {selectedOptions.length > 0 && (
            <div>
              {selectedOptions.includes('Alphabets') && (
                <div>
                  Alphabets: {responseData.alphabets.join(', ')}
                </div>
              )}
              {selectedOptions.includes('Numbers') && (
                <div>
                  Numbers: {responseData.numbers.join(', ')}
                </div>
              )}
              {selectedOptions.includes('Highest alphabet') && (
                <div>
                  Highest alphabet: {responseData.highestAlphabet}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputForm;