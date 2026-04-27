import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import navReducer from "./slices/navSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    nav: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
