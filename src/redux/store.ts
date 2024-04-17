import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// @ Export the store type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
