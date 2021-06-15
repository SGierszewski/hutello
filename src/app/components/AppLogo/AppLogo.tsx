import React from "react";
import LogoIcon from "../../assets/Icons/logoIcon";

import styles from "./AppLogo.module.css";

type AppLogoProps = {
  title: string;
};

export default function AppLogo({ title }: AppLogoProps): JSX.Element {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <LogoIcon />
    </div>
  );
}
