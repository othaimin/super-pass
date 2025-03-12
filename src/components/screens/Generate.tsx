import React, { useState } from "react";
import Heading from "../Heading";
import BodyText from "../BodyText";
import Input from "../Input";
import PasswordStrengthButton from "../PasswordStrengthButton";
import IconWeb from "../Icon/IconWeb";
import Button from "../Button";
import IconStars from "../Icon/IconStars";
import Animated from "../Animated";
import usePasswordGenerator from "@/hooks/use-password-generator";
import PasswordStrengthTypes from "@/types/password-strength-types";
import useToggleScreen from "@/hooks/use-toggle-screen";
import Icon from "../Icon";

const Generate = () => {
  const { screenToHide } = useToggleScreen();
  const { passwordGenerator } = usePasswordGenerator();
  const hide = screenToHide === "generatePassword";
  const [passwordStrength, setPasswordStrength] =
    useState<PasswordStrengthTypes>("Ironclad");
  const [site, setSite] = useState("");

  const generate = () => {
    if (site.length > 0) {
      passwordGenerator(passwordStrength, site);
      setSite("");
    }
  };
  return (
    <div className="card-content ">
      <Animated hide={hide} delays={[0.1, 0.6]}>
        <Heading>Generate Strong Password</Heading>
      </Animated>
      <Animated hide={hide} delays={[0.2, 0.5]}>
        <BodyText>
          Generate a strong, secure password with a mix of letters, numbers, and
          symbols to keep your accounts safe!
        </BodyText>
      </Animated>
      <div className="grid gap-3">
        <Animated hide={hide} delays={[0.3, 0.4]}>
          <Input
            icon={IconWeb}
            placeholder="Site or App Name"
            value={site}
            onInput={(e) => setSite(e.currentTarget.value)}
          />
        </Animated>
        <div className="grid grid-cols-3 gap-2">
          <Animated hide={hide} delays={[0.4, 0.3]}>
            <PasswordStrengthButton
              value="Ironclad"
              active={passwordStrength === "Ironclad"}
              onClick={() => setPasswordStrength("Ironclad")}
            />
          </Animated>
          <Animated hide={hide} delays={[0.5, 0.2]}>
            <PasswordStrengthButton
              value="Titanium"
              active={passwordStrength === "Titanium"}
              onClick={() => setPasswordStrength("Titanium")}
            />
          </Animated>
          <Animated hide={hide} delays={[0.6, 0.1]}>
            <PasswordStrengthButton
              value="Uncrackable"
              active={passwordStrength === "Uncrackable"}
              onClick={() => setPasswordStrength("Uncrackable")}
            />
          </Animated>
        </div>
        <Animated hide={hide} delays={[0.5, 0.0]}>
          <Button
            className="mt-3"
            disabled={site.length <= 0}
            onClick={generate}
          >
            Generate <Icon Icon={IconStars} />
          </Button>
        </Animated>
      </div>
    </div>
  );
};

export default Generate;
