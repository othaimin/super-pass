'use client'
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
import useScreen from "@/hooks/use-screen";

export default function Home() {
  const { activeScreen, screenToHidden, toggleScreen } = useScreen()
  const toggle = () => {
    const screen = activeScreen === "generatePassword" ? 'savedPasswords' : 'generatePassword'

    toggleScreen(screen)
  }
  return (
    <div className="bg-background select-none h-[100dvh] flex flex-col items-center justify-center font-inter text-text p-6">
      <div className="w-[22rem] max-w-full min-w-fit h-[520px]  flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4">
          <IconLogo />
          <Heading >Super Pass</Heading>
        </div>
        <Card>
          {activeScreen === 'generatePassword' && <Generate toggleScreen={toggleScreen} screenToHidden={screenToHidden} />}
          {activeScreen === 'savedPasswords' && <SavedPasswords screenToHidden={screenToHidden} toggleScreen={toggleScreen} />}
          {activeScreen === 'saveOnline' && <SaveOnline toggleScreen={toggleScreen} screenToHidden={screenToHidden} />}
          {activeScreen === 'confirmEmail' && <ConfirmEmail toggleScreen={toggleScreen} screenToHidden={screenToHidden} />}
          {activeScreen === 'emailConfirmationSuccess' && <EmailConfirmationSuccess toggleScreen={toggleScreen} screenToHidden={screenToHidden} />}
        </Card>
        <Button variant='outline' onClick={toggle} >Show My Passwords <IconEyeView /></Button>
      </div>
    </div>
  );
}
