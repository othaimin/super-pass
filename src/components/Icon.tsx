import { cn } from "@/lib/utils";
import React, { FC, JSX } from "react";
type IconProps = {
  Icon: () => JSX.Element;
  className?: string;
};
const Icon: FC<IconProps> = ({ Icon, className }) => {
  return (
    <i className={cn("size-6", className)}>
      <Icon />
    </i>
  );
};

export default Icon;
