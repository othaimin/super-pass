import {
  selectScreen,
  setActiveScreen,
  setIsButtonDisabled,
  setScreenToHide,
} from "@/store/screen/screenSlice";
import { useAppDispatch, useAppSelector } from "./store-hooks";
import ScreensType from "@/types/screens-types";

const useToggleScreen = () => {
  const dispatch = useAppDispatch();
  const { activeScreen, isButtonDisabled, screenToHide } =
    useAppSelector(selectScreen);

  const toggleScreen = (screen: ScreensType) => {
    dispatch(setIsButtonDisabled(true));
    if (!isButtonDisabled) {
      dispatch(setScreenToHide());
      setTimeout(() => {
        dispatch(setActiveScreen(screen));
      }, 1000);
    }
    setTimeout(() => {
      dispatch(setIsButtonDisabled(false));
    }, 2000);
  };
  return { toggleScreen, isButtonDisabled, activeScreen, screenToHide };
};

export default useToggleScreen;
