"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const Avatar = (props: Props) => {
  return (
    <Image
      src="/images/placeholder.jpg"
      alt="Avatar"
      width={30}
      height={30}
      className="rounded-full"
    />
  );
};

export default Avatar;
