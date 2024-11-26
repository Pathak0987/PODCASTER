import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false },  // Changed IsLoggedIn to isLoggedIn
  reducers: {
    login(state) {
      state.isLoggedIn = true;  // Updated to match the camelCase convention
    },
    logout(state) {
      state.isLoggedIn = false;  // Updated to match the camelCase convention
    },
  },
});

// Export actions to be used in components
export const authActions = authSlice.actions;

// Export the reducer to be added to the store
export default authSlice.reducer;
