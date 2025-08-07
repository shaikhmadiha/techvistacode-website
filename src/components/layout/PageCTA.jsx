"use client";

import { useState } from "react";

import { Box, Stack } from "@mui/material";

import Container from "@/components/layout/Container";
import GetFreeSessionPopup from "@/components/popups/GetFreeSessionPopup";

import styles from "@/styles/components/PageCTA.module.css";

const PageCTA = ({
  pageId,
  ctaTitle,
  ctaSubTitle,
  btnVariant,
  btnColor,
  btnTitle,
  textured = false,
}) => {
  const [isGetFreeSessionOpen, setIsGetFreeSessionOpen] = useState(false);

  return (
    <section
      id={pageId}
      className={`${styles.pageCTA} ${
        textured ? "secondarySurfaceBackground" : ""
      }`}
    >
      <Container className="container-y-padding">
        <Box
          minHeight={"320px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack spacing={4} alignItems={"center"}>
            <h3>{ctaTitle}</h3>
            <p>{ctaSubTitle}</p>
            <GetFreeSessionPopup
              variant={btnVariant}
              color={btnColor}
              title={btnTitle}
              open={isGetFreeSessionOpen}
              setOpen={setIsGetFreeSessionOpen}
            />
          </Stack>
        </Box>
      </Container>
    </section>
  );
};

export default PageCTA;
