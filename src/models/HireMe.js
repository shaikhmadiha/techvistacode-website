import mongoose from "mongoose";

import { emailRegex, phoneRegex } from "@/validations/fixedRegex";

const hireMeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: emailRegex, // Basic email format
    },
    phone: {
      type: String,
      required: true,
      match: phoneRegex, // A valid Indian phone number (no +91 or 91).
    },

    bio: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Prevent model overwrite in dev or hot reload
const HireMe =
  mongoose.models.HireMe ||
  mongoose.model("HireMe", hireMeSchema);

export default HireMe;
