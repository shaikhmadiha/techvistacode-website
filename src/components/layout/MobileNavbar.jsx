"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { IconButton, Box } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

import GetFreeSessionPopup from "@/components/popups/GetFreeSessionPopup";

import { headerNavItems } from "@/constants/links";

import techVistaCodeLogo from "../../../public/techvistacode.svg";

import styles from "@/styles/components/Header.module.css";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [isGetFreeSessionOpen, setIsGetFreeSessionOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon fontSize="inherit" />
      </IconButton>

      {open && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: (theme) => theme.palette.primary.main,
            zIndex: "var(--z-index-header-mobile-menu)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
          className={styles.mobileNavLinks}
        >
          <IconButton
            color="secondary"
            size="large"
            onClick={closeMenu}
            sx={{
              position: "fixed",
              top: 16,
              right: 16,
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <Box
            sx={{
              bgcolor: "var(--white)",
              width: "100%",
              padding: "8px 0",
              textAlign: "center",
            }}
          >
            <Link href="/" className={styles.logo}>
              <Image
                src={techVistaCodeLogo}
                alt="Tech Vista Code Company Logo"
                width={180}
              />
            </Link>
          </Box>
          {headerNavItems.map(({ label, href }) => (
            <Link key={href} href={href} onClick={closeMenu}>
              {label}
            </Link>
          ))}
          <GetFreeSessionPopup
            variant={"contained"}
            color={"secondary"}
            open={isGetFreeSessionOpen}
            setOpen={setIsGetFreeSessionOpen}
          />
        </Box>
      )}
    </>
  );
};

export default MobileNavbar;
