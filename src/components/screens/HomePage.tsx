import Button from "@/components/Button";
import Card from "@/components/Card";
import ConfirmEmail from "@/components/screens/ConfirmEmail";
import Generate from "@/components/screens/Generate";
import IconEyeView from "@/components/Icon/IconEyeView";
import SavedPasswords from "@/components/screens/SavedPasswords";
import SaveOnline from "@/components/screens/SaveOnline";
import EmailConfirmationSuccess from "@/components/screens/EmailConfirmationSuccess";
import IconLogo from "@/components/Icon/IconLogo";
import Heading from "@/components/Heading";
import useToggleScreen from "@/hooks/use-toggle-screen";
import { useEffect } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import Icon from "../Icon";
import { useAppDispatch } from "@/hooks/store-hooks";
import { loadPasswords } from "@/store/passwords/passwordsSlice";
import IconStars from "../Icon/IconStars";

export default function HomePage() {
  const { toggleScreen, activeScreen, isButtonDisabled } = useToggleScreen();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPasswords());
  }, []); // eslint-disable-line

  return (
    <div className="bg-background select-none h-[100dvh] flex flex-col items-center justify-center font-inter text-text p-6">
      <ToastContainer
        transition={Zoom}
        position="bottom-center"
        closeButton={false}
        hideProgressBar
        autoClose={2000}
      />

      <div className="w-[22rem] max-w-full min-w-fit h-[520px]  flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4">
          <IconLogo />
          <Heading>Super Pass</Heading>
        </div>
        <Card>
          {activeScreen === "generatePassword" && <Generate />}
          {activeScreen === "savedPasswords" && <SavedPasswords />}
          {activeScreen === "saveOnline" && <SaveOnline />}
          {activeScreen === "confirmEmail" && <ConfirmEmail />}
          {activeScreen === "emailConfirmationSuccess" && (
            <EmailConfirmationSuccess />
          )}
        </Card>
        <Button
          variant="outline"
          disabled={isButtonDisabled}
          onClick={() =>
            toggleScreen(
              activeScreen === "generatePassword"
                ? "savedPasswords"
                : "generatePassword"
            )
          }
        >
          {activeScreen === "generatePassword" ? (
            <>
              Show My Passwords <Icon Icon={IconEyeView} />
            </>
          ) : (
            <>
              Show Generator <Icon Icon={IconStars} />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
