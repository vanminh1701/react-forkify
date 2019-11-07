import React from 'react';

const InputForm = ({ handleChange }) => (
  <input 
    type="text" 
    className="search__field" 
    placeholder="Search example 'pizza' 'tomato' 'chicken' ..." 
    onChange={handleChange}
  />
)

export default InputForm;