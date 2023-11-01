"use client";
import clsx from "clsx";
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

const Heading = ({ title, subtitle, center }: Props) => {
  return (
    <div
      className={clsx({
        "text-center": center,
        "text-start": !center,
      })}
    >
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
