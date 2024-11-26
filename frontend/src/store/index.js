import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth'; // Path to your authSlice


const store = configureStore({
  reducer: {
    auth: authReducer, // Adding the auth reducer
    
  },
});

export default store;  // Exporting the store as default
