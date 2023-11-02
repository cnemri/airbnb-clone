"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

type Props = {
  onChange: (value: string) => void;
  value: string;
};

const ImageUpload = ({ onChange, value }: Props) => {
  const handleUpload = React.useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
          >
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">Click to upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image alt="upload" fill className="object-cover" src={value} />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
