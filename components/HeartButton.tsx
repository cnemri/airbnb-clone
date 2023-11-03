"use client";

import useFavorite from "@/hooks/useFavorite";
import { SafeUser } from "@/types";
import clsx from "clsx";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  listingId: string;
  currentUser?: SafeUser | null;
};

const HeartButton = ({ listingId, currentUser }: Props) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });
  return (
    <div
      onClick={toggleFavorite}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={clsx({
          "fill-red-500": hasFavorited,
          "fill-neutral-500/70": !hasFavorited,
        })}
      />
    </div>
  );
};

export default HeartButton;
