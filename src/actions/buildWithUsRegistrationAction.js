"use server";

import dbConnect from "@/lib/dbConnect";
import BuildWithUs from "@/models/BuildWithUs";

export async function buildWithUsRegistrationAction(data) {
  await dbConnect();

  const { name, email, idea, category } = data;

  const buildWithUs = new BuildWithUs({
    name,
    email,
    idea,
    category,
  });

  await buildWithUs.save();
  return { success: true, message: "Build With Us Registration successful!" };
}
