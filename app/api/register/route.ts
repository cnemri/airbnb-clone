import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

const SALT_ROUNDS = 12;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Input validation
    if (!body.email || !body.name || !body.password) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { email, name, password } = body;

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    // Destructure and send only necessary data
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    // Handle specific errors as required
    console.error("Error in user creation:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
