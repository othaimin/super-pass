import React from "react";
import Heading from "../Heading";
import BodyText from "../BodyText";
import Button from "../Button";
import OTPInput from "../OTPInput";
import IconChecked from "../Icon/IconChecked";
import Animated from "../Animated";
import useToggleScreen from "@/hooks/use-toggle-screen";
import Icon from "../Icon";

const ConfirmEmail = () => {
  const { toggleScreen, screenToHide } = useToggleScreen();
  const hide = screenToHide === "confirmEmail";

  return (
    <div className="card-content !justify-center !gap-4">
      <Animated delays={[0.1, 0.5]} hide={hide}>
        <Heading>Confirm Email</Heading>
      </Animated>
      <Animated delays={[0.2, 0.4]} hide={hide}>
        <BodyText>
          A verification code has been sent to your email. Please check your
          inbox to continue
        </BodyText>
      </Animated>
      <div className="w-full flex justify-between gap-2">
        <Animated delays={[0.3, 0.5]} hide={hide}>
          <OTPInput />
        </Animated>
        <Animated delays={[0.35, 0.45]} hide={hide}>
          <OTPInput />
        </Animated>
        <Animated delays={[0.4, 0.4]} hide={hide}>
          <OTPInput />
        </Animated>
        <Animated delays={[0.45, 0.35]} hide={hide}>
          <OTPInput />
        </Animated>
        <Animated delays={[0.5, 0.3]} hide={hide}>
          <OTPInput />
        </Animated>
      </div>
      <Animated delays={[0.4, 0.2]} hide={hide}>
        <div className="flex w-full  gap-3 -mt-2">
          <div className="bg-foreground size-6 rounded-lg border border-border"></div>
          Save this device
        </div>
      </Animated>
      <Animated delays={[0.5, 0.1]} hide={hide}>
        <Button onClick={() => toggleScreen("emailConfirmationSuccess")}>
          Confirm
          <Icon Icon={IconChecked} />
        </Button>
      </Animated>
    </div>
  );
};

export default ConfirmEmail;
