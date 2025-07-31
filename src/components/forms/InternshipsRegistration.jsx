"use client";

import { Button, MenuItem, Stack, TextField } from "@mui/material";

import { durationOptionsInternshipsRegister } from "@/constants/internshipsContent";

const InternshipsRegistration = () => {
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
          id="phone"
          name="phone"
          label="Phone Number"
          type="text"
          variant="outlined"
        />
        <TextField
          required
          margin="dense"
          id="course"
          name="course"
          label="Course"
          type="text"
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="duration"
          name="duration"
          select
          label="Select Duration"
          defaultValue="2-months"
        >
          {durationOptionsInternshipsRegister.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button disableElevation variant="contained" type="submit">
          Apply
        </Button>
      </Stack>
    </form>
  );
};

export default InternshipsRegistration;
