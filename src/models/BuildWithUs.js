import mongoose from "mongoose";

import { emailRegex } from "@/validations/fixedRegex";

const buildWithUsSchema = new mongoose.Schema(
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

    idea: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Prevent model overwrite in dev or hot reload
const BuildWithUs =
  mongoose.models.BuildWithUs ||
  mongoose.model("BuildWithUs", buildWithUsSchema);

export default BuildWithUs;
