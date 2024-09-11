import { createSlice } from "@reduxjs/toolkit";

// const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    currentUser: null,
    error: null, // Add error field
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
      state.error = null; // Reset error state
    },
    clearUser: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.error = null; // Reset error state
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
