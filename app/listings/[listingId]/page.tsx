import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import ListingClient from "@/components/listings/ListingClient";
import React from "react";

type Props = {
  params: {
    listingId: string;
  };
};

const ListingPage = async ({ params }: Props) => {
  const currentUser = await getCurrentUser();
  const listing = await getListingById(params);

  if (!listing) return <EmptyState />;
  return <ListingClient listing={listing} currentUser={currentUser} />;
};

export default ListingPage;
