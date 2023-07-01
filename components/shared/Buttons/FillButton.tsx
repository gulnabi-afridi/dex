import React from "react";

interface Props {
  isIcon?: boolean;
  icon?: string;
  text: string;
  styles?: string;
}

const FillButton = ({
  isIcon,
  icon,
  text,
  styles = "w-[150px] h-[40px] bg-th-brand-secondary text-[24px] font-medium",
}: Props) => {
  return (
    <div
      className={`flex justify-center items-center gap-2 rounded-[6px] ${styles}`}
    >
      {icon}
      <button className="text-th-brand font-inter">{text}</button>
    </div>
  );
};

export default FillButton;
