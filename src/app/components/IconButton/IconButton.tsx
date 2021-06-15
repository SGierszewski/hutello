import React from "react";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  icon: React.SVGProps<SVGSVGElement>;
  title: string;
};

export default function IconButton({
  icon,
  title,
}: IconButtonProps): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.button__icon}>{icon}</span>
      <span className={styles.button__title}>{title}</span>
    </button>
  );
}
