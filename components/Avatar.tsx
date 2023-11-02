"use client";
import Image from "next/image";
import React from "react";

type Props = {
  src?: string;
};

const Avatar = ({ src }: Props) => {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      alt="Avatar"
      width={30}
      height={30}
      className="rounded-full"
    />
  );
};

export default Avatar;
