import { configureStore } from "@reduxjs/toolkit";
import screen from "./screen/screenSlice";
import passwords from "./passwords/passwordsSlice";

export const store = configureStore({
  reducer: {
    screen,
    passwords,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
