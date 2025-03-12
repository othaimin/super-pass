import React, { FC } from "react";
import IconWeb from "./Icon/IconWeb";
import IconButton from "./IconButton";
import IconCopy from "./Icon/IconCopy";
import IconRefresh from "./Icon/IconRefresh";
import IconTrash from "./Icon/IconTrash";
import Icon from "./Icon";

type SavedPasswordProps = {
  title: string;
};
const SavedPassword: FC<SavedPasswordProps> = ({ title }) => {
  return (
    <div className="flex gap-3 items-center h-12 ">
      <Icon Icon={IconWeb} />
      {title}
      <div className="flex-grow flex  gap-2 justify-end">
        <IconButton icon={IconTrash} />
        <IconButton icon={IconRefresh} />
        <IconButton icon={IconCopy} />
      </div>
    </div>
  );
};

export default SavedPassword;
