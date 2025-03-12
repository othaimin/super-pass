import React, { useState } from "react";
import Heading from "../Heading";
import BodyText from "../BodyText";
import Input from "../Input";
import IconEmail from "../Icon/IconEmail";
import Button from "../Button";
import IconSend from "../Icon/IconSend";
import Animated from "../Animated";
import useToggleScreen from "@/hooks/use-toggle-screen";
import Icon from "../Icon";
import isValidEmail from "@/lib/isVaildEmail";
import { toast, ToastContent } from "react-toastify";
import Toast from "../Toast";
import IconCopy from "../Icon/IconCopy";
const SaveOnline = () => {
  const { screenToHide } = useToggleScreen();
  const hide = screenToHide === "saveOnline";
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInput = (value: string) => {
    setEmail(value);
    if (isValidEmail(email)) {
      setIsDisabled(false);
    }
  };
  const sendEmail = async () => {
    if (isValidEmail(email)) {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to: email }),
      });

      const result = await response.json();
      if (result.status === 200) {
        toast(Toast({ text: "Email Sent ", icon: IconCopy }) as ToastContent, {
          className: "w-fit p-0 !bg-transparent text-white",
        });
      }
    }
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
        <Input
          icon={IconEmail}
          placeholder="Enter your Emaill"
          type="email"
          value={email}
          onInput={(e) => handleInput(e.currentTarget.value)}
        />
      </Animated>
      <Animated delays={[0.4, 0.1]} hide={hide}>
        <Button onClick={sendEmail} disabled={isDisabled}>
          Send Code <Icon Icon={IconSend} />
        </Button>
      </Animated>
    </div>
  );
};

export default SaveOnline;
