"use client";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import qs from "query-string";

type Props = {
  label: string;
  icon: IconType;
  description: string;
  selected?: boolean;
};

const CategoryBox = ({ label, icon: Icon, description, selected }: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const handleClick = React.useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = { ...currentQuery, category: label };
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }
    const url = qs.stringifyUrl(
      { url: "/", query: updatedQuery },
      { skipNull: true }
    );
    router.push(url);
  }, [label, params, router]);
  return (
    <div
      onClick={handleClick}
      className={clsx(
        "flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer",
        {
          "border-b-neutral-800 text-neutral-800": selected,
          "border-transparent text-neutral-500": !selected,
        }
      )}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
