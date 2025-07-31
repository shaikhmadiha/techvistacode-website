"use client";

import { useState } from "react";
import Image from "next/image";

import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Fab,
  Stack,
} from "@mui/material";

import { RiRobot3Line } from "react-icons/ri";

import { techvistacodeAIchatbot } from "@/constants/homeContent";

import TVCBot from "../../../public/TVC-Bot.svg";

import styles from "@/styles/components/Chatbox.module.css";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [interest, setInterest] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle open/close and reset
  const toggleChatbox = () => {
    setOpen((prev) => {
      if (prev) {
        resetChat();
      } else {
        initChat();
      }
      return !prev;
    });
  };

  const initChat = () => {
    setMessages([
      {
        text: `Hi, I'm ${techvistacodeAIchatbot.name}, your ${techvistacodeAIchatbot.tagline}. Please enter your name to get started.`,
        sender: "bot",
      },
    ]);
    setStep(1);
    setIsSubmitted(false);
  };

  const resetChat = () => {
    setMessages([]);
    setUserInput("");
    setStep(0);
    setName("");
    setUserType("");
    setInterest("");
    setFormData({ email: "", phone: "", message: "" });
    setIsSubmitted(false);
  };

  const addMessage = (text, sender = "bot") => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const handleSendName = () => {
    if (!userInput.trim()) return;
    setName(userInput.trim());
    addMessage(userInput, "user");

    setTimeout(() => {
      addMessage(
        `Nice to meet you, ${userInput.trim()}! Please select one that applies to you:`
      );
      setStep(2);
    }, 500);

    setUserInput("");
  };

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    addMessage(type, "user");

    setTimeout(() => {
      addMessage(`Great! You are a ${type}. How can I help you today?`, "bot");
      setStep(3);
    }, 500);
  };

  const handleInterestSelection = (item) => {
    setInterest(item);
    addMessage(item, "user");

    setTimeout(() => {
      addMessage(
        `Awesome! We can help you with ${item}. Please fill out the following fields.`,
        "bot"
      );
      setStep(4);
    }, 500);
  };

  const handleFormSubmit = () => {
    if (!formData.email || !formData.phone || !formData.message) return;

    // Collect all final data
    const finalData = {
      name,
      userType,
      interest,
      email,
      phone,
      message,
    };

    addMessage("Submitted form", "user");

    setTimeout(() => {
      addMessage("Thank you! We will connect with you shortly.");
      setIsSubmitted(true);
    }, 500);
  };

  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={toggleChatbox}
        className={styles.fab}
      >
        <RiRobot3Line size={32} />
      </Fab>

      {open && (
        <Paper variant="outlined" className={styles.chatContainer}>
          <Box textAlign={"center"} pb={2}>
            <Image
              src={TVCBot}
              alt="Tech Vista Code Company AI Chat Bot"
              width={96}
            />
          </Box>
          <>
            {messages.map((message, index) => (
              <Box
                key={index}
                className={
                  message.sender === "user"
                    ? styles.userMessage
                    : styles.botMessage
                }
              >
                <Typography variant="body2">{message.text}</Typography>
              </Box>
            ))}

            {/* Step 1: Ask for name */}
            {step === 1 && !isSubmitted && (
              <Stack direction={"row"} spacing={1}>
                <TextField
                  size="small"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Write your name here"
                />
                <Button
                  disableElevation
                  variant="contained"
                  onClick={handleSendName}
                >
                  Send
                </Button>
              </Stack>
            )}

            {/* Step 2: Select user type */}
            {step === 2 && (
              <Stack spacing={1}>
                {["Student", "Working Professional", "Entrepreneur"].map(
                  (type) => (
                    <Button
                      key={type}
                      size="small"
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleUserTypeSelection(type)}
                    >
                      {type}
                    </Button>
                  )
                )}
              </Stack>
            )}

            {/* Step 3: Select interest */}
            {step === 3 && (
              <Stack spacing={1}>
                {["Course", "Project", "Internship"].map((item) => (
                  <Button
                    key={item}
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleInterestSelection(item)}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
            )}

            {/* Step 4: Form fields */}
            {step === 4 && !isSubmitted && (
              <Stack spacing={1}>
                <TextField
                  size="small"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  fullWidth
                  required
                />
                <TextField
                  size="small"
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  fullWidth
                  required
                />
                <TextField
                  size="small"
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  multiline
                  rows={3}
                  fullWidth
                  required
                />
                <Button
                  disableElevation
                  variant="contained"
                  onClick={handleFormSubmit}
                >
                  Submit
                </Button>
              </Stack>
            )}
          </>
        </Paper>
      )}
    </>
  );
};

export default ChatBox;
