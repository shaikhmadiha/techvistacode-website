"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Box } from "@mui/material";

import Container from "@/components/layout/Container";
import GetFreeSessionPopup from "@/components/popups/GetFreeSessionPopup";
import DesktopNavbar from "@/components/layout/DesktopNavbar";
import TabletNavbar from "@/components/layout/TabletNavbar";
import MobileNavbar from "@/components/layout/MobileNavbar";

import techVistaCodeLogo from "../../../public/techvistacode.svg";

import styles from "@/styles/components/Header.module.css";

const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isGetFreeSessionOpen, setIsGetFreeSessionOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
              <Image
                src={techVistaCodeLogo}
                alt="Tech Vista Code Company Logo"
                width={120}
              />
            </Link>

            <Box sx={{ display: { xs: "none", sm: "block", lg: "none" } }}>
              <TabletNavbar width={300} />
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <DesktopNavbar
                isNavMenuOpen={isNavMenuOpen}
                setIsNavMenuOpen={setIsNavMenuOpen}
              />
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <GetFreeSessionPopup
                variant={"contained"}
                color={"primary"}
                open={isGetFreeSessionOpen}
                setOpen={setIsGetFreeSessionOpen}
              />
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <MobileNavbar />
            </Box>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;
