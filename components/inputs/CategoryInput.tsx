"use client";
import clsx from "clsx";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
};

const CategoryInput = ({ icon: Icon, label, selected, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={clsx(
        "rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer",
        {
          "border-black": selected,
          "border-neutral-200": !selected,
        }
      )}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
