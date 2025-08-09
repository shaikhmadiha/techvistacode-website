"use server";

import dbConnect from "@/lib/dbConnect";
import Internship from "@/models/Internship";

export async function internshipRegistrationAction(data) {
  await dbConnect();

  const { name, email, phone, course, internshipDuration } = data;

  const internship = new Internship({
    name,
    email,
    phone,
    course,
    internshipDuration,
  });

  await internship.save();
  return { success: true, message: "Internship Registration successful!" };
}
