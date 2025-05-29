"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Portfolio", path: "/portfolio" },
    { id: 6, name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>
        RNR
      </a>

      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <button className={styles.btnLogout}>Login</button>
    </nav>
  );
}

export default Navbar;
