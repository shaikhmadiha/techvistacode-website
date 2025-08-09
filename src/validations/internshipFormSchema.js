import { z } from "zod";
import { emailRegex, phoneRegex } from "@/validations/fixedRegex";

export const internshipFormSchema = z.object({
  name: z.string().min(1, "Full name is required."),

  email: z.string().regex(emailRegex, "Please enter a valid email address."),

  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number (no +91 or 91)."),

  course: z.string().min(1, "Course is required."),

  internshipDuration: z
    .string()
    .min(1, "Please select an internship duration."),
});
