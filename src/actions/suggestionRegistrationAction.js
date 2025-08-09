"use server";

import dbConnect from "@/lib/dbConnect";
import Suggestion from "@/models/Suggestion";

export async function suggestionRegistrationAction(data) {
  await dbConnect();

  const { name, email, suggestion } = data;

  const suggestionData = new Suggestion({
    name,
    email,
    suggestion,
  });

  await suggestionData.save();
  return { success: true, message: "Suggestion Registration successful!" };
}
