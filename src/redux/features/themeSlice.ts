import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// @type
type ThemeState = {
  darkMode: boolean;
};

const initialState: ThemeState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Toggle the dark mode
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
