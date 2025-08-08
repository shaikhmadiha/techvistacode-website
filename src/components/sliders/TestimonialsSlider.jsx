"use client";

import React from "react";

import Slider from "react-slick";

import { Avatar, Box, Rating, Stack } from "@mui/material";

import { testimonials } from "@/constants/homeContent";

const TestimonialsSlider = () => {
  // Slick Slider settings
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
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
          autoplay: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: "16px",
      }}
    >
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              padding: "16px",
            }}
          >
            <Box
              key={index}
              sx={{
                backgroundColor: "var(--white)",
                borderRadius: "var(--high-rounded)",
                boxShadow: "var(--medium-shadow)",
                textAlign: "center",
                padding: "24px 16px",
              }}
            >
              <Stack spacing={2}>
                <Box>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Avatar
                      alt={testimonial.name}
                      src={testimonial.profilePicture}
                      sx={{ width: 56, height: 56 }}
                    />
                    <Stack alignItems={"start"}>
                      <h4>{testimonial.name}</h4>
                      <p className="caption">{testimonial.subTitle}</p>
                    </Stack>
                  </Stack>
                </Box>
                <p className="caption">{testimonial.review}</p>
                <Box textAlign={"center"}>
                  <Rating
                    defaultValue={testimonial.rating}
                    size="large"
                    readOnly
                  />
                </Box>
              </Stack>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialsSlider;
