"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  const router = useRouter();
  return (
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={100}
      height={100}
      className="hidden md:block cursor-pointer"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
