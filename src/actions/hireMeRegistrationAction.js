"use server";

import dbConnect from "@/lib/dbConnect";
import HireMe from "@/models/HireMe";

export async function hireMeRegistrationAction(data) {
  await dbConnect();

  const { name, email, phone, bio } = data;

  const hireMe = new HireMe({
    name,
    email,
    phone,
    bio,
  });

  await hireMe.save();
  return {
    success: true,
    message: "Hire Me Registration successful!",
  };
}
