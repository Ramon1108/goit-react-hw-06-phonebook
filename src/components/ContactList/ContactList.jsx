import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

function ContactList() {
  const contacts = useSelector(state => {
    const filter = state.filter.toLowerCase();
    return state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  });
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.info}>
            {name}: {number}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  handleDeleteContact: PropTypes.func,
};

export default ContactList;
