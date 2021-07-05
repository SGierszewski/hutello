import React from "react";
import SpeechBubble from "../Icons/SpeechBubble";
import LogoIcon from "../Icons/logoIcon";
import styles from "./SpeakingDog.module.css";

type SpeakingDogProps = {
  speech: string;
};

export default function SpeakingDog({ speech }: SpeakingDogProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.bubble}>
        <SpeechBubble speech={speech} />
      </div>
      <div className={styles.dog}>
        <LogoIcon />
      </div>
    </div>
  );
}
