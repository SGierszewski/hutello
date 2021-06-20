import React from "react";
import { useHistory } from "react-router-dom";
import BackIcon from "../Icons/BackIcon";
import styles from "./BackButton.module.css";

export default function BackButton(): JSX.Element {
  const history = useHistory();
  return (
    <button className={styles.button} onClick={() => history.goBack()}>
      <BackIcon />
    </button>
  );
}
