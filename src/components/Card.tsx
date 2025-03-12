import React, { FC, ReactNode } from "react";
type CardProps = {
  children: ReactNode;
};
const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full flex-grow bg-foreground rounded-3xl overflow-hidden relative text-center flex justify-center">
      <div className="size-44 rounded-full bg-primary absolute -top-28  "></div>
      <div className="absolute w-full  h-[calc(100%+1px)] -top-[1px] border border-foreground overflow-hidden bg-whigte/30 p-5 backdrop-blur-2xl rounded-3xl ">
        {children}
      </div>
    </div>
  );
};

export default Card;
