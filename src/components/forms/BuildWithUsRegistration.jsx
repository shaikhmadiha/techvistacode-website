"use client";

import { Button, MenuItem, Stack, TextField } from "@mui/material";

import { buildWithUsOptions } from "@/constants/buildWithUsContent";

const BuildWithUsRegistration = () => {
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
          id="idea"
          name="idea"
          label="Idea"
          type="text"
          variant="outlined"
          placeholder="Describe your idea here..."
          multiline
          rows={4}
        />
        <TextField
          margin="dense"
          id="category"
          name="category"
          select
          label="Select Close Category"
          defaultValue={""}
        >
          {buildWithUsOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button disableElevation variant="contained" type="submit">
          Help Me
        </Button>
      </Stack>
    </form>
  );
};

export default BuildWithUsRegistration;
