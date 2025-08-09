import mongoose from "mongoose";

import { emailRegex, phoneRegex } from "@/validations/fixedRegex";

const contactUsSchema = new mongoose.Schema(
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

    city: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    time: {
      type: String,
      default: null,
    },

    choice: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Prevent model overwrite in dev or hot reload
const ContactUs =
  mongoose.models.ContactUs || mongoose.model("ContactUs", contactUsSchema);

export default ContactUs;
