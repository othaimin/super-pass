import React, { FC } from "react";
import Animated from "./Animated";
import Heading from "./Heading";
import BodyText from "./BodyText";
import Button from "./Button";
import Icon from "./Icon";
import IconStars from "./Icon/IconStars";
import useToggleScreen from "@/hooks/use-toggle-screen";
import IconSync from "./Icon/IconSync";
type EmptyPasswordsProps = {
  hide: boolean;
};
const EmptyPasswords: FC<EmptyPasswordsProps> = ({ hide }) => {
  const { toggleScreen } = useToggleScreen();

  return (
    <div className="card-content !justify-center">
      <Animated delays={[0.1, 0.4]} hide={hide}>
        <Heading>Time to Start Saving</Heading>
      </Animated>
      <Animated delays={[0.2, 0.3]} hide={hide}>
        <BodyText>
          You haven&apos;t saved any passwords yet. Generate a secure one to get
          started!
        </BodyText>
      </Animated>
      <Animated delays={[0.3, 0.2]} hide={hide}>
        <Button
          className="mt-3"
          onClick={() => toggleScreen("generatePassword")}
        >
          Generate Now <Icon Icon={IconStars} />
        </Button>
      </Animated>
      <Animated delays={[0.4, 0.1]} hide={hide}>
        <Button
          className="mt-3"
          variant="outline"
          onClick={() => toggleScreen("saveOnline")}
        >
          Sync Online <Icon Icon={IconSync} />
        </Button>
      </Animated>
    </div>
  );
};

export default EmptyPasswords;
