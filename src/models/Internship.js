import mongoose from "mongoose";

import { emailRegex, phoneRegex } from "@/validations/fixedRegex";

// Define the schema for an internship registration
const internshipSchema = new mongoose.Schema(
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
      match: phoneRegex, // Valid Indian phone number (no +91 or 91)
    },

    course: {
      type: String,
      required: true,
      trim: true,
    },

    internshipDuration: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Prevent model overwrite in dev or hot reload
const Internship =
  mongoose.models.Internship || mongoose.model("Internship", internshipSchema);

export default Internship;
