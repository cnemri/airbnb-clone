import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  return await getSession()
    .then(async (session) => {
      if (session) {
        if (!session?.user?.email) {
          return null;
        }
        const currentUser = await prisma.user.findUnique({
          where: {
            email: session.user.email,
          },
        });
        if (!currentUser) {
          return null;
        }
        return currentUser;
      }
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}
