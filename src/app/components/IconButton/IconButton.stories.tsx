import React from "react";
import PwResetIcon from "../Icons/PwResetIcon";
import RequestIcon from "../Icons/RequestIcon";
import SearchIcon from "../Icons/SearchIcon";
import UserIcon from "../Icons/UserIcon";
import IconButton from "./IconButton";

export default {
  title: "Component/IconButton",
  component: IconButton,
};

export const loginButton = (): JSX.Element => (
  <IconButton icon={<UserIcon />} title="Login" />
);

export const signUpButton = (): JSX.Element => (
  <IconButton icon={<UserIcon />} title="Sign up" />
);

export const pwResetButton = (): JSX.Element => (
  <IconButton icon={<PwResetIcon />} title="Reset password" />
);

export const searchButton = (): JSX.Element => (
  <IconButton icon={<SearchIcon />} title="Search" />
);

export const newSearchButton = (): JSX.Element => (
  <IconButton icon={<SearchIcon />} title="New search" />
);

export const requestButton = (): JSX.Element => (
  <IconButton icon={<RequestIcon />} title="Send request" />
);
