import Button from "@/components/Button";
import Card from "@/components/Card";
import ConfirmEmail from "@/components/screens/ConfirmEmail";
import Generate from "@/components/screens/Generate";
import IconEyeView from "@/components/Icon/IconEyeView";
import SavedPasswords from "@/components/screens/SavedPasswords";
import SaveOnline from "@/components/screens/SaveOnline";
import EmailConfirmationSuccess from "@/components/screens/EmailConfirmationSuccess";


export default function Home() {
  return (
    <div className="bg-background h-[100dvh] flex flex-col items-center justify-center font-inter text-text p-6">
      <div className="w-88 min-w-fit h-4/5 flex flex-col gap-4">
        <Card>
          {/* <Generate /> */}
          {/* <SavedPasswords /> */}
          {/* <SaveOnline /> */}
          {/* <ConfirmEmail /> */}
          <EmailConfirmationSuccess />
        </Card>
        <Button variant='outline'>Show My Passwords <IconEyeView /></Button>
      </div>
    </div>
  );
}
