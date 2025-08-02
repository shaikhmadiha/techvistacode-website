"use client";

import { Button, Stack, TextField } from "@mui/material";

const ContactUsSuggestionRegistration = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} textAlign={"center"}>
        <TextField
          required
          margin="dense"
          id="name"
          name="name"
          label="Full Name"
          type="text"
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="suggestion"
          name="suggestion"
          label="Suggestion"
          type="text"
          variant="outlined"
          placeholder="Write your suggestion here..."
          multiline
          rows={4}
        />
        <Button disableElevation variant="contained" type="submit">
          Send Message
        </Button>
      </Stack>
    </form>
  );
};

export default ContactUsSuggestionRegistration;
