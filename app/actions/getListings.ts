import prisma from "@/libs/prismadb";

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const safeListings = listings.map((listing) => {
      return { ...listing, createdAt: listing.createdAt.toISOString() };
    });
    return safeListings;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
