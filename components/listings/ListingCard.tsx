"use client";

import useCountries from "@/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser;
};

const ListingCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}: Props) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) return;
      onAction?.(actionId);
    },
    [disabled, actionId, onAction]
  );

  const price = React.useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [data.price, reservation]);

  const reservationDate = React.useMemo(() => {
    if (!reservation) return null;
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);
    return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
  }, [reservation]);
  return (
    <div className="border shadow-sm rounded-md flex flex-col">
      <div>{data.title}</div>
      <Image
        src={data.imageSrc}
        alt=""
        height={400}
        width={400}
        className="object-fit rounded-md"
      />
    </div>
  );
};

export default ListingCard;
