import React, { useState } from "react";
import styles from "./Login.module.css";
import AppLogo from "../../components/AppLogo/AppLogo";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import IconButton from "../../components/IconButton/IconButton";
import UserIcon from "../../components/Icons/UserIcon";
import { useHistory } from "react-router-dom";
import type { User } from "../../../types";
import { postUser } from "../../../utils/api";

function Login(): JSX.Element {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: User = { email, password };
    postUser(user);
    history.push("/");
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <AppLogo />
        <h2 className={styles.header__subtitle}>
          Find all dog daycare
          <br />
          places in town
        </h2>
      </header>
      <main className={styles.main}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <LabeledInput
            label={"Email address"}
            value={email}
            type={"email"}
            required={true}
            onChange={setEmail}
          />
          <LabeledInput
            label={"Password"}
            value={password}
            type={"password"}
            required={true}
            onChange={setPassword}
          />
          <IconButton title="Login">
            <UserIcon />
          </IconButton>
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
