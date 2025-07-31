"use client";

import { Button, MenuItem, Stack, TextField } from "@mui/material";

import { trackOptionsCompetitionsRegister } from "@/constants/competitionContent";

const CompetitionRegistration = () => {
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
          id="city"
          name="city"
          label="City"
          type="text"
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="competition"
          name="competition"
          select
          label="Select Competition"
          defaultValue="python-showdown"
        >
          {trackOptionsCompetitionsRegister.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button disableElevation variant="contained" type="submit">
          Register
        </Button>
      </Stack>
    </form>
  );
};

export default CompetitionRegistration;
