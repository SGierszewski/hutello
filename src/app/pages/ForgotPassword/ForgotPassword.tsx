import React from "react";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import IconButton from "../../components/IconButton/IconButton";
import SpeakingDog from "../../components/SpeakingDog/SpeakingDog";
import BackButton from "../../components/BackButton/BackButton";
import PwResetIcon from "../../components/Icons/PwResetIcon";
import styles from "./ForgotPassword.module.css";
import { useHistory } from "react-router-dom";

export default function ForgotPassword(): JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton />
      </header>
      <main className={styles.main}>
        <div className={styles.main__image}>
          <SpeakingDog speech="no worries!!" />
        </div>
        <h2 className={styles.main__subtitle}>
          Forgot your password? <br />
          Just enter your registered email address below and we will send you a
          link to reset your password.
        </h2>
        <form className={styles.main__forgotPwForm}>
          <LabeledInput
            label="Email address"
            value=""
            type="email"
            required={true}
            onChange={() => console.log("clicked")}
          />
          <IconButton
            onClick={() => history.push("/")}
            children={<PwResetIcon />}
            title="Reset password"
          />
        </form>
      </main>
    </div>
  );
}
