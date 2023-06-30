import React from "react";

interface Props {
  isIcon?: boolean;
  icon?: string;
  text: string;
  style?: string;
}

const OutlineButton = ({
  isIcon,
  icon,
  text,
  style = "w-[140px] h-[40px] border-white-main",
}: Props) => {
  return (
    <button className={`${style} flex justify-center items-center gap-2`}>
      {text}
      {icon && icon}
    </button>
  );
};

export default OutlineButton;
