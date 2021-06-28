import React from "react";
import DogIcon from "../Icons/DogIcon";
import PlusIcon from "../Icons/PlusIcon";
import styles from "./AddDog.module.css";

type AddDogProps = {
  label: string;
};

export default function AddDog({ label }: AddDogProps): JSX.Element {
  return (
    <label className={styles.addDog__label}>
      {label}
      <button className={styles.addDog__button}>
        <PlusIcon />
        <DogIcon />
      </button>
    </label>
  );
}
