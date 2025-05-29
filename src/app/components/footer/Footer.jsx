import Image from "next/image";
import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialmedia}>
        <Image
          src="/1.png"
          alt="facebook Logo"
          width={40}
          height={40}
          className={styles.SocialIcon}
        />
        <Image
          src="/2.png"
          alt="Instagram Logo"
          width={40}
          height={40}
          className={styles.SocialIcon}
        />
        <Image
          src="/3.png"
          alt="Twiter Logo"
          width={40}
          height={40}
          className={styles.SocialIcon}
        />
        <Image
          src="/4.png"
          alt="youtube Logo"
          width={40}
          height={40}
          className={styles.SocialIcon}
        />
      </div>

      <p style={{ marginTop: "0.5rem" }}>
        &copy; {new Date().getFullYear()} RnR Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
