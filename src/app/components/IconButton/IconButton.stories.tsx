import React from "react";
import IconButton from "./IconButton";

export default {
  title: "Component/IconButton",
  component: IconButton,
};

export const loginButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    variant="login"
  />
);

export const signUpButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    variant="signUp"
  />
);

export const pwResetButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    variant="pwReset"
  />
);

export const searchButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    variant="search"
  />
);

export const newSearchButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    variant="newSearch"
  />
);

export const requestButton = (): JSX.Element => (
  <IconButton
    onClick={() => {
      console.log("clicked");
    }}
    variant="request"
  />
);
