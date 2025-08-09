import mongoose from "mongoose";

import { emailRegex } from "@/validations/fixedRegex";

const suggestionSchema = new mongoose.Schema(
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

    suggestion: {
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
const Suggestion =
  mongoose.models.Suggestion ||
  mongoose.model("Suggestion", suggestionSchema);

export default Suggestion;
