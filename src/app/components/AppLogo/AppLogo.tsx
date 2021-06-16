import React from "react";
import LogoIcon from "../../assets/Icons/logoIcon";
import styles from "./AppLogo.module.css";

export default function AppLogo(): JSX.Element {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Hutello</h1>
      <LogoIcon />
    </div>
  );
}
