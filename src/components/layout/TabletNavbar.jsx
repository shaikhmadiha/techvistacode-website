"use client";

import Link from "next/link";

import { Box } from "@mui/material";

import { headerNavItems } from "@/constants/links";

import styles from "@/styles/components/Header.module.css";

const TabletNavbar = ({ width }) => {
  return (
    <Box className={styles.scrollableNavLinksVisualHint}>
      <ul style={{ width: `${width}px` }} className={styles.scrollableNavLinks}>
        {headerNavItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default TabletNavbar;
