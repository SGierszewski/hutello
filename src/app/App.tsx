import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import styles from "./App.module.css";

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/help">
            <p>Help</p>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
      </BrowserRouter>
      <header className={styles["App-header"]}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={styles["App-link"]}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className={styles["App-link"]}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
