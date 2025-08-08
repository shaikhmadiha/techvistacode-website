"use client";

import { Button, Stack, TextField } from "@mui/material";

const StudentSharkTankRegistration = ({ themeColor }) => {
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
          id="idea"
          name="idea"
          label="Idea"
          type="text"
          variant="outlined"
          placeholder="Describe your idea here..."
          multiline
          rows={4}
        />
        <Button
          color={themeColor}
          disableElevation
          variant="contained"
          type="submit"
        >
          Pitch!
        </Button>
      </Stack>
    </form>
  );
};

export default StudentSharkTankRegistration;
