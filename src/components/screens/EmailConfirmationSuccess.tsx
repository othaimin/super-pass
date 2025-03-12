import React from "react";
import Heading from "../Heading";
import BodyText from "../BodyText";
import Button from "../Button";
import SuccessAnimation from "../SuccessAnimation";
import Animated from "../Animated";
import useToggleScreen from "@/hooks/use-toggle-screen";

const EmailConfirmationSuccess = () => {
  const { screenToHide } = useToggleScreen();

  const hide = screenToHide === "emailConfirmationSuccess";

  return (
    <div className="card-content !justify-center !gap-4">
      <Animated delays={[0.1, 0.4]} hide={hide}>
        <Heading>Success</Heading>
      </Animated>
      <Animated delays={[0.4, 0.1]} hide={hide}>
        <SuccessAnimation />
      </Animated>
      <Animated delays={[0.2, 0.3]} hide={hide}>
        <BodyText>
          Email verification successful! Secure password storage is now
          available.
        </BodyText>
      </Animated>
      <Animated delays={[0.3, 0.2]} hide={hide}>
        <Button>Done</Button>
      </Animated>
    </div>
  );
};

export default EmailConfirmationSuccess;
