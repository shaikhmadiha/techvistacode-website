"use server";

import dbConnect from "@/lib/dbConnect";
import Competition from "@/models/Competition";

export async function competitionRegistrationAction(data) {
  await dbConnect();

  const { name, email, phone, city, interestedCompetition } = data;

  const competition = new Competition({
    name,
    email,
    phone,
    city,
    interestedCompetition,
  });

  await competition.save();
  return { success: true, message: "Competition Registration successful!" };
}
