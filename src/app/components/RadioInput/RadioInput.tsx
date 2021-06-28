import React from "react";
import styles from "./RadioInput.module.css";

type RadioInputProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  required: boolean;
  onChange: (value: string) => void;
};

export default function RadioInput({
  label,
  type,
  name,
  value,
  required,
  onChange,
}: RadioInputProps): JSX.Element {
  return (
    <label>
      <input
        className={styles.radio__input}
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
      <span className={styles.radio__label}>{label}</span>
    </label>
  );
}
