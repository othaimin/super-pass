import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import ScreensType from "@/types/screens-types";

type screenSteteType = {
  activeScreen: ScreensType;
  screenToHide: ScreensType;
  isButtonDisabled: boolean;
};
const initialState: screenSteteType = {
  activeScreen: "saveOnline",
  screenToHide: null,
  isButtonDisabled: false,
};
const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setActiveScreen: (state, action: { payload: ScreensType }) => {
      state.activeScreen = action.payload;
    },
    setScreenToHide: (state) => {
      state.screenToHide = state.activeScreen;
    },
    setIsButtonDisabled: (state, action: { payload: boolean }) => {
      state.isButtonDisabled = action.payload;
    },
  },
});

export const { setScreenToHide, setActiveScreen, setIsButtonDisabled } =
  screenSlice.actions;

export const selectScreen = (state: RootState) => state.screen;

export default screenSlice.reducer;
