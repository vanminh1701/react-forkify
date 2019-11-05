import React from 'react';

const InputForm = ({ handleChange }) => (
  <input 
    type="text" 
    className="search__field" 
    placeholder="Search over 1,000,000 recipes..." 
    onChange={handleChange}
  />
)

export default InputForm;