import React from "react";
import styles from "./FavoriteCheckbox.module.css";

export type FavoriteCheckboxProps = {
  value: string;
  icon: React.SVGProps<SVGSVGElement>;
  // checked: boolean;
};

export default function FavoriteCheckbox({
  value,
  icon,
}: FavoriteCheckboxProps): JSX.Element {
  return (
    <div className={styles.container}>
      <label>
        <input
          className={styles.favorite__checkbox}
          type="checkbox"
          name="huta"
          value={value}
          // onChange={(event) => onChange(event.target.value)}
        />
        <span className={styles.favorite__icon}>{icon}</span>
      </label>
    </div>
  );
}
