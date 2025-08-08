"use client";

import { Button, Stack, TextField } from "@mui/material";

const HireMeZoneRegistration = ({ themeColor }) => {
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
          color={themeColor}
          required
          margin="dense"
          id="name"
          name="name"
          label="Full Name"
          type="text"
          variant="outlined"
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
        />
        <TextField
          color={themeColor}
          required
          margin="dense"
          id="bio"
          name="bio"
          label="Bio"
          type="text"
          variant="outlined"
          placeholder="My name is John Doe, I am new to web development, building projects and looking for opportunities to learn and contribute."
          multiline
          rows={4}
        />
        <Button
          color={themeColor}
          disableElevation
          variant="contained"
          type="submit"
        >
          Hire Me!
        </Button>
      </Stack>
    </form>
  );
};

export default HireMeZoneRegistration;
