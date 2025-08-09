import { z } from "zod";
import { emailRegex } from "@/validations/fixedRegex";

export const buildWithUsFormSchema = z.object({
  name: z.string().min(1, "Full name is required."),

  email: z.string().regex(emailRegex, "Please enter a valid email address."),

  idea: z.string().min(1, "Idea is required."),

  category: z.string().min(1, "Please select a category"),
});
