"use client";

import Image from "next/image";

import Slider from "react-slick";

import { Box } from "@mui/material";

import { competitionRewards } from "@/constants/competitionContent";

// Slick Slider settings
const rewardsSettings = {
  autoplay: true,
  centerMode: false,
  dots: false,
  arrows: false,
  pauseOnHover: false,
  draggable: false,
  swipe: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const RewardsSlider = () => {
  return (
    <Slider {...rewardsSettings}>
      {competitionRewards.map((reward, index) => (
        <Box
          key={index}
          position={"relative"}
          minHeight={{ xs: 256, md: 384, lg: 512 }}
          height={"100%"}
          width={"100%"}
        >
          <Image
            src={reward.rewardPoster}
            alt={reward.rewardPosterAlt}
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </Box>
      ))}
    </Slider>
  );
};

export default RewardsSlider;
