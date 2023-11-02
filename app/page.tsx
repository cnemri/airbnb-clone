import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import Image from "next/image";
import getListings from "./actions/getListings";
import ListingCard from "@/components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) return <EmptyState showReset />;

  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing, index) => (
          <ListingCard key={index} data={listing} />
        ))}
      </div>
    </Container>
  );
}
