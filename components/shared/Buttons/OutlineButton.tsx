import React, { ReactNode } from "react";

interface Props {
  isIcon?: boolean;
  icon?: ReactNode;
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
    <button
      className={`${style} flex justify-center text-[16px] border-[2px] rounded-[6px] text-white-main font-inter items-center gap-2`}
    >
      {text}
      {icon && icon}
    </button>
  );
};

export default OutlineButton;
