import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, FC } from "react";
import Icon from "./Icon";
type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: () => React.JSX.Element;
};
const IconButton: FC<IconButtonProps> = ({ icon, className, ...rest }) => {
  return (
    <button
      className={cn(
        "size-9 bg-foreground rounded-xl flex items-center justify-center",
        className
      )}
      {...rest}
    >
      <Icon Icon={icon} className="size-[16px]" />
    </button>
  );
};

export default IconButton;
