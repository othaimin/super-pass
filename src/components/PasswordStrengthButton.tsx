import { cn } from "@/lib/utils";
import PasswordStrengthTypes from "@/types/password-strength-types";
import React, { ButtonHTMLAttributes, FC } from "react";
type CheckButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: PasswordStrengthTypes;
  active: boolean;
};
const PasswordStrengthButton: FC<CheckButtonProps> = ({
  value,
  active,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center w-full h-10 bg-foreground rounded-xl text-xs border border-border active:scale-95 transition-all",
        active && "bg-primary"
      )}
      {...rest}
    >
      {value}
    </button>
  );
};

export default PasswordStrengthButton;
