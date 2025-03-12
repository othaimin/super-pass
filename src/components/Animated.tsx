import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";
type AnimatedProps = {
  children: ReactNode;
  delays: number[];
  hide: boolean;
};
const Animated: FC<AnimatedProps> = ({ children, delays, hide }) => {
  return (
    <div
      className={cn("animated ", hide ? "hide" : "show")}
      style={{ animationDelay: !hide ? delays[0] + "s" : delays[1] + "s" }}
    >
      {children}
    </div>
  );
};

export default Animated;
