import React from "react";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  title: string;
};

export default function IconButton({
  onClick,
  children,
  title,
}: IconButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.button__icon}>{children}</span>
      <span className={styles.button__title}>{title}</span>
    </button>
  );
}
