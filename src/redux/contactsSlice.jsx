import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
      { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
      { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;

      if (state.contacts.some(contact => contact.name === name)) {
        alert('This name is already in contacts!');
        return;
      }

      if (state.contacts.some(contact => contact.number === number)) {
        alert('This number is already in contacts!');
        return;
      }
      const newContact = { ...action.payload, id: shortid.generate() };
      state.contacts.push(newContact);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
