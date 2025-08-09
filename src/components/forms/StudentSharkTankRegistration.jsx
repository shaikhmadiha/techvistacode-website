"use client";

import { useState } from "react";

import { Button, Stack, TextField } from "@mui/material";

import { sharkTankFormSchema } from "@/validations/SharkTankFormSchema";
import { sharkTankRegistrationAction } from "@/actions/sharkTankRegistrationAction";

const StudentSharkTankRegistration = ({ themeColor }) => {
  const [formErrors, setFormErrors] = useState({});
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    try {
      // Set loading state and clear previous errors at the start
      setFormLoading(true);
      setFormErrors({});

      // Validate using the imported Zod schema
      const validationResult = sharkTankFormSchema.safeParse(formJson);

      if (!validationResult.success) {
        // Map Zod validation errors to formErrors state using forEach
        const validationErrors = {};
        validationResult.error.issues.forEach((issue) => {
          // Ensure path[0] exists before assigning the message
          const fieldName = issue.path[0];
          if (fieldName) {
            validationErrors[fieldName] = issue.message;
          }
        });
        setFormErrors(validationErrors);
        return;
      }

      // Proceed to server action if validation passes
      const res = await sharkTankRegistrationAction(validationResult.data);

      // Check for a success flag from the server response
      if (res.success) {
        alert(res.message);
        // Reset the form and clear errors upon success
        event.target.reset();
      } else {
        // Handle server-side errors
        alert(res.message || "Registration failed! Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Alert a generic message for unexpected issues
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      // Always stop the loading state
      setFormLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} textAlign={"center"}>
        <TextField
          color={themeColor}
          required
          margin="dense"
          id="name"
          name="name"
          label="Full Name"
          type="text"
          variant="outlined"
          error={!!formErrors.name}
          helperText={formErrors.name}
        />
        <TextField
          color={themeColor}
          required
          margin="dense"
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          error={!!formErrors.email}
          helperText={formErrors.email}
        />
        <TextField
          color={themeColor}
          required
          margin="dense"
          id="phone"
          name="phone"
          label="Phone"
          type="text"
          variant="outlined"
          error={!!formErrors.phone}
          helperText={formErrors.phone}
        />
        <TextField
          color={themeColor}
          required
          margin="dense"
          id="idea"
          name="idea"
          label="Idea"
          type="text"
          variant="outlined"
          placeholder="Describe your idea here..."
          multiline
          rows={4}
          error={!!formErrors.idea}
          helperText={formErrors.idea}
        />
        <Button
          color={themeColor}
          disableElevation
          variant="contained"
          type="submit"
          loading={formLoading}
          loadingIndicator="Submitting..."
        >
          Pitch!
        </Button>
      </Stack>
    </form>
  );
};

export default StudentSharkTankRegistration;
