"use client";

import clsx from "clsx";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  Icon?: IconType;
};

const Button = ({ label, onClick, disabled, outline, small, Icon }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full hover:text-opacity-80 disabled:text-opacity-70",
        {
          "bg-white border-black text-black": outline,
          "bg-rose-500 border-rose-500 text-white": !outline,
          "py-1 text-sm font-light border-[1px]": small,
          "py-3 text-base font-semibold border-2": !small,
        }
      )}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
