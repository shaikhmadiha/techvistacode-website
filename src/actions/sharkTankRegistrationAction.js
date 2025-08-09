"use server";

import dbConnect from "@/lib/dbConnect";
import SharkTank from "@/models/SharkTank";

export async function sharkTankRegistrationAction(data) {
  await dbConnect();

  const { name, email, phone, idea } = data;

  const sharkTank = new SharkTank({
    name,
    email,
    phone,
    idea,
  });

  await sharkTank.save();
  return {
    success: true,
    message: "Student Shark Tank Registration successful!",
  };
}
