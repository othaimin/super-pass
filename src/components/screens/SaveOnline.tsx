import React from "react";
import Heading from "../Heading";
import BodyText from "../BodyText";
import Input from "../Input";
import IconEmail from "../Icon/IconEmail";
import Button from "../Button";
import IconSend from "../Icon/IconSend";
import Animated from "../Animated";
import useToggleScreen from "@/hooks/use-toggle-screen";
import Icon from "../Icon";
const SaveOnline = () => {
  const { screenToHide } = useToggleScreen();
  const hide = screenToHide === "saveOnline";

  const sendEmail = async () => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to: "ossotch4@gmail.com" }),
    });

    const result = await response.json();
    console.log(result.message);
  };

  return (
    <div className="card-content !justify-center !gap-4">
      <Animated delays={[0.1, 0.4]} hide={hide}>
        <Heading>Save Online</Heading>
      </Animated>
      <Animated delays={[0.2, 0.3]} hide={hide}>
        <BodyText>
          Save your password securely online for easy access anytime, anywhere!
        </BodyText>
      </Animated>
      <Animated delays={[0.3, 0.2]} hide={hide}>
        <Input icon={IconEmail} placeholder="Enter your Emil" />
      </Animated>
      <Animated delays={[0.4, 0.1]} hide={hide}>
        <Button onClick={sendEmail}>
          Send Code <Icon Icon={IconSend} />
        </Button>
      </Animated>
    </div>
  );
};

export default SaveOnline;
