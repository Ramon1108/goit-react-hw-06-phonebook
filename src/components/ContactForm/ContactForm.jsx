import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert('Enter the correct phone number!');
    }
    if (contacts.some(contact => contact.name === name)) {
      alert(`The name "${name}" is already in contacts!`);
      return;
    }

    if (contacts.some(contact => contact.number === number)) {
      alert(`Thе number "${number}" is already in contacts!`);
      return;
    } else {
      dispatch(addContact({ name, number, id: shortid.generate() }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Ivan Ivanov"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="111-11-11"
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ContactForm;
