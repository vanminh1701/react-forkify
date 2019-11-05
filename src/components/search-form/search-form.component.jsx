import React, { useState } from 'react';
import { connect } from 'react-redux'

import InputForm from '../input-form/input-form.component';
import CustomButton from '../custom-button/custom-button.component'

import { fetchSearchStartAsync } from '../../redux/search-result/result.actions'

import './search-form.styles.scss'


const SearchForm = ({ fetchSearchStartAsync }) => {
  const [useValue, setValue] = useState({ value: '' });
  const value = useValue.value;

  const handleSubmit = event => {
    event.preventDefault();
    fetchSearchStartAsync(value);
  }

  const handleChange = event => {
    setValue({ value: event.target.value })
  }

  return (
    <form className="search__field" onSubmit={handleSubmit}>
      <InputForm 
        name="search-input"
        type="text"
        handleChange={handleChange}
        value={value}
      />
      <CustomButton type="submit" />
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchSearchStartAsync: query => dispatch(fetchSearchStartAsync(query))
})

export default connect(null, mapDispatchToProps)(SearchForm);