"use client";

import { Button, MenuItem, Stack, TextField } from "@mui/material";

const bestTimeToReachYou = [
  {
    label: "Morning",
    value: "morning",
  },
  {
    label: "Afternoon",
    value: "afternoon",
  },
  {
    label: "Evening",
    value: "evening",
  },
  {
    label: "Night",
    value: "night",
  },
];

const contactChoice = [
  {
    label: "Email",
    value: "email",
  },
  {
    label: "Phone",
    value: "phone",
  },
];

const ContactUsRegistration = ({ themeColor }) => {
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
          label="Phone Number"
          type="text"
          variant="outlined"
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
        />
        <TextField
          color={themeColor}
          required
          margin="dense"
          id="message"
          name="message"
          label="Message"
          type="text"
          variant="outlined"
          placeholder="Write your message here..."
          multiline
          rows={4}
        />
        <TextField
          color={themeColor}
          margin="dense"
          id="time"
          name="time"
          select
          label="Select Best Time To Contact"
          defaultValue="morning"
        >
          {bestTimeToReachYou.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          color={themeColor}
          margin="dense"
          id="choice"
          name="choice"
          select
          label="Select Contact Method"
          defaultValue="email"
        >
          {contactChoice.map((option) => (
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
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default ContactUsRegistration;
