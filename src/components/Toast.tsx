import React, { FC, JSX } from "react";
import Icon from "./Icon";
type ToastProps = {
  text: string;
  icon: () => JSX.Element;
};
const Toast: FC<ToastProps> = ({ text, icon }) => {
  return (
    <div className="bg-primary p-3 rounded-xl pe-6 flex items-center gap-2 ">
      <Icon Icon={icon} className="size-5" />
      <small>{text}</small>
    </div>
  );
};

export default Toast;
