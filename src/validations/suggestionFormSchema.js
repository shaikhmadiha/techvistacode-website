import { z } from "zod";
import { emailRegex } from "@/validations/fixedRegex";

export const suggestionFormSchema = z.object({
  name: z.string().min(1, "Full name is required."),
  email: z.string().regex(emailRegex, "Please enter a valid email address."),

  suggestion: z.string().min(1, "Suggestion is required."),
});
