import Link from "next/link";

import { headerNavItems } from "@/constants/links";

import styles from "@/styles/components/Header.module.css";

const visibleItems = headerNavItems.slice(0, 6);
const dropdownItems = headerNavItems.slice(6);

const DesktopNavbar = ({ isNavMenuOpen, setIsNavMenuOpen }) => {
  return (
    <ul className={styles.navLinks}>
      {visibleItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
      <li className={styles.dropdown}>
        <p
          onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
          role="button"
          aria-expanded={isNavMenuOpen}
        >
          Career Boosters {isNavMenuOpen ? "▴" : "▾"}
        </p>
        {isNavMenuOpen && (
          <ul className={styles.dropdownMenu}>
            {dropdownItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default DesktopNavbar;
