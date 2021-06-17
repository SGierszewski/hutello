import React from "react";
import IconButton from "./IconButton";
import PwResetIcon from "../Icons/PwResetIcon";
import RequestIcon from "../Icons/RequestIcon";
import SearchIcon from "../Icons/SearchIcon";
import UserIcon from "../Icons/UserIcon";

export default {
  title: "Component/IconButton",
  component: IconButton,
};

export const loginButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    title="Login"
  >
    <UserIcon />
  </IconButton>
);

export const signUpButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    title="Sign up"
  >
    <UserIcon />
  </IconButton>
);

export const pwResetButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    title="Reset password"
  >
    <PwResetIcon />
  </IconButton>
);

export const searchButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    title="Search"
  >
    <SearchIcon />
  </IconButton>
);

export const newSearchButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    title="New search"
  >
    <SearchIcon />
  </IconButton>
);

export const requestButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    title="Send request"
  >
    <RequestIcon />
  </IconButton>
);
