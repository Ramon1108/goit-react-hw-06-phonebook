import PropTypes from 'prop-types';
import css from './Filter.module.css';
import setFilter from '../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

function Filter() {
  const [filterValue, setFilterValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    setFilterValue(value);
    dispatch(setFilter(value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
