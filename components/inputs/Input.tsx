"use client";
import clsx from "clsx";
import React from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import { BiDollar } from "react-icons/bi";

type Props = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

const Input = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}: Props) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        type={type}
        {...register(id, { required })}
        placeholder=" "
        className={clsx(
          "peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed",
          {
            "pl-9": formatPrice,
            "pl-4": !formatPrice,
            "border-rose-500 focus:border-rose-500": errors[id],
            "border-neutral-300 focus:border-black  ": !errors[id],
          }
        )}
      />
      <label
        className={clsx(
          "absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
          {
            "left-9": formatPrice,
            "left-4": !formatPrice,
            "text-rose-500": errors[id],
            "text-zinc-400": !errors[id],
          }
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
