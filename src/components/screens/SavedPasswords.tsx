import Heading from "../Heading";
import Button from "../Button";
import IconLock from "../Icon/IconLock";
import SavedPassword from "../SavedPassword";

import ScrollBar from "../ScrollBar";
import Animated from "../Animated";
import { useAppSelector } from "@/hooks/store-hooks";
import useToggleScreen from "@/hooks/use-toggle-screen";
import Icon from "../Icon";
import { selectPasswords } from "@/store/passwords/passwordsSlice";
import EmptyPasswords from "../EmptyPasswords";

const SavedPasswords = () => {
  const { toggleScreen, screenToHide } = useToggleScreen();
  const passwords = useAppSelector(selectPasswords);
  const hide = screenToHide === "savedPasswords";
  return (
    <div className="card-content">
      {passwords.length <= 0 ? (
        <EmptyPasswords hide={hide} />
      ) : (
        <>
          <Animated delays={[0.1, 0.8]} hide={hide}>
            <Heading>Saved Passwords</Heading>
          </Animated>
          <ScrollBar>
            {passwords.map((password, index) => {
              if (index <= 5) {
                return (
                  <Animated
                    delays={[0.1 + 0.1 * (index + 1), 0.8 - 0.1 - 0.1 * index]}
                    hide={hide}
                    key={index}
                  >
                    <SavedPassword title="Gmail" />
                  </Animated>
                );
              }
              return <SavedPassword title="Gmail" />;
            })}
          </ScrollBar>
          <Animated delays={[0.4, 0.1]} hide={hide}>
            <Button onClick={() => toggleScreen("saveOnline")}>
              Save Onine <Icon Icon={IconLock} />
            </Button>
          </Animated>
        </>
      )}
    </div>
  );
};

export default SavedPasswords;
