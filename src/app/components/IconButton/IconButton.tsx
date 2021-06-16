import React from "react";
import PwResetIcon from "../Icons/PwResetIcon";
import RequestIcon from "../Icons/RequestIcon";
import SearchIcon from "../Icons/SearchIcon";
import UserIcon from "../Icons/UserIcon";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  onClick: () => void;
  variant: "login" | "signUp" | "pwReset" | "search" | "newSearch" | "request";
};

const variants = {
  login: { icon: <UserIcon />, title: "Login" },
  signUp: { icon: <UserIcon />, title: "Sign up" },
  pwReset: { icon: <PwResetIcon />, title: "Reset password" },
  search: { icon: <SearchIcon />, title: "Search" },
  newSearch: { icon: <SearchIcon />, title: "New search" },
  request: { icon: <RequestIcon />, title: "Send request" },
};

export default function IconButton({
  onClick,
  variant,
}: IconButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.button__icon}>{variants[variant].icon}</span>
      <span className={styles.button__title}>{variants[variant].title}</span>
    </button>
  );
}
