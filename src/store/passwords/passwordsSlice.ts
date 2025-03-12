import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import PasswordType from "@/types/password-type";

type PasswordsStateType = PasswordType[];

// Initial state from localStorage
const initialState: PasswordsStateType = [];

const passwordsSlide = createSlice({
  name: "passwords",
  initialState,
  reducers: {
    setPassword: (state, action: { payload: PasswordType }) => {
      state.push(action.payload);

      if (typeof window !== "undefined") {
        localStorage.setItem("passwords", JSON.stringify(state));
      }
    },
    loadPasswords: (state) => {
      if (typeof window !== "undefined") {
        const savedPasswords = localStorage.getItem("passwords");
        return savedPasswords ? JSON.parse(savedPasswords) : state;
      }
      return state;
    },
  },
});

export const { setPassword, loadPasswords } = passwordsSlide.actions;

export const selectPasswords = (state: RootState) => state.passwords;

export default passwordsSlide.reducer;
