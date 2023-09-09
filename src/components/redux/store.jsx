import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import contactsReducer from './contactsSlice';
import persistConfig from './persistConfig';

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contactsSlice';

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
// });

// export default store;
