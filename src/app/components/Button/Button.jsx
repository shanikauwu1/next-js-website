import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
  href, // optional link prop
}) => {
  const buttonContent = (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default Button;
