"use client";

import { useState } from "react";

import { Button, MenuItem, Stack, TextField } from "@mui/material";

import { trackOptionsCompetitionsRegister } from "@/constants/competitionContent";

import { competitionFormSchema } from "@/validations/competitionFormSchema";
import { competitionRegistrationAction } from "@/actions/competitionRegistrationAction";

const CompetitionRegistration = ({ themeColor = "primary" }) => {
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
      const validationResult = competitionFormSchema.safeParse(formJson);

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
      const res = await competitionRegistrationAction(validationResult.data);

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
          label="Phone Number"
          type="text"
          variant="outlined"
          error={!!formErrors.phone}
          helperText={formErrors.phone}
        />
        <TextField
          color={themeColor}
          required
          margin="dense"
          id="city"
          name="city"
          label="City"
          type="text"
          variant="outlined"
          error={!!formErrors.city}
          helperText={formErrors.city}
        />
        <TextField
          color={themeColor}
          margin="dense"
          id="interestedCompetition"
          name="interestedCompetition"
          select
          label="Select Competition"
          defaultValue="python-showdown"
          error={!!formErrors.intrestedCompetition}
          helperText={formErrors.intrestedCompetition}
        >
          {trackOptionsCompetitionsRegister.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          color={themeColor}
          disableElevation
          variant="contained"
          type="submit"
          loading={formLoading}
          loadingIndicator="Submitting..."
        >
          Register
        </Button>
      </Stack>
    </form>
  );
};

export default CompetitionRegistration;
