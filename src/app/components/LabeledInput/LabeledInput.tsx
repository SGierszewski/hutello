import React from "react";
import styles from "./LabeledInput.module.css";

type LabeledInputProps = {
  label: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function LabeledInput({
  label,
  value,
  type,
  required,
  onChange,
}: LabeledInputProps): JSX.Element {
  return (
    <div className={styles.container}>
      <label>
        <div className={styles.container__label}>{label}</div>
        <input
          className={styles.container__input}
          type={type}
          value={value}
          required={required}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    </div>
  );
}

export default LabeledInput;
