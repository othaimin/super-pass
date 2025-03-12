import React from "react";
import Icon from "./Icon";
import IconCopy from "./Icon/IconCopy";

const Toast = () => {
  return (
    <div className="bg-primary p-3 rounded-xl pe-6 flex items-center gap-2 ">
      <Icon Icon={IconCopy} className="size-5" />
      <small>Password Copied to ClipBoard</small>
    </div>
  );
};

export default Toast;
