import React, { FC, InputHTMLAttributes, JSX } from "react";
import Icon from "./Icon";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: () => JSX.Element;
};
const Input: FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <div className="flex w-full items-center gap-3 h-14 bg-foreground border border-border p-3 rounded-2xl">
      <Icon Icon={icon} />
      <input type="text" className="w-full bg-transparent" {...rest} />
    </div>
  );
};

export default Input;
