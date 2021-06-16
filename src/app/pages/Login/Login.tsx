import React from "react";
import styles from "./Login.module.css";
import AppLogo from "../../components/AppLogo/AppLogo";
import LabeledInput from "../../components/LabeledInput/LabeledInput";

function Login(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <AppLogo />
        <h2 className={styles.header__subtitle}>
          Find all dog daycare places in town
        </h2>
      </header>
      <main className={styles.main}>
        <form className={styles.loginForm}>
          <LabeledInput
            label={"Email address"}
            value={""}
            type={"email"}
            required={true}
            onChange={() => {
              console.log("clicked");
            }}
          />
          <LabeledInput
            label={"Password"}
            value={""}
            type={"password"}
            required={true}
            onChange={() => {
              console.log("clicked");
            }}
          />
          <p>BUTTON PLACEHOLDER</p>
        </form>
        <div className={styles.links}>
          <a className={styles.forgotPwLink} href="#">
            Forgot password?
          </a>
          <p>
            Don't have an account?{" "}
            <a className={styles.signUpLink} href="#">
              Sign up
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;
