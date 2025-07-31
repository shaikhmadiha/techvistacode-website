"use client";

import { useEffect, useState } from "react";

import * as motion from "motion/react-client";

import { Box } from "@mui/material";

import { competitionRewards } from "@/constants/competitionContent";

const RewardText = () => {
  const [currentRewardIndex, setCurrentRewardIndex] = useState(0);

  // Cycle through rewards every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRewardIndex(
        (prevIndex) => (prevIndex + 1) % competitionRewards.length
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const currentReward = competitionRewards[currentRewardIndex];

  return (
    <Box>
      {/* Static Text */}
      <span className="overlineText" style={{ color: "var(--accent)" }}>
        Stand a chance to win
      </span>

      {/* Dynamic Text (Reward Name with Animation) */}
      <motion.h2
        key={currentReward.prizeRank}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {currentReward.rewardName}
      </motion.h2>
    </Box>
  );
};

export default RewardText;
