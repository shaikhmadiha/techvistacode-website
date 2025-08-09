"use server";

import dbConnect from "@/lib/dbConnect";
import ContactUs from "@/models/ContactUs";

export async function contactUsRegistrationAction(data) {
  await dbConnect();

  const { name, email, phone, city, message, time, choice } = data;

  const contactUs = new ContactUs({
    name,
    email,
    phone,
    city,
    message,
    time,
    choice,
  });

  await contactUs.save();
  return { success: true, message: "Contact Us Registration successful!" };
}
