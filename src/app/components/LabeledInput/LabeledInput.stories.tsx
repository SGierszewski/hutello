import React from "react";
import LabeledInput from "./LabeledInput";

export default {
  title: "Component/LabeledInput",
  component: LabeledInput,
};

export const email = (): JSX.Element => (
  <LabeledInput
    label="Email address"
    value=""
    type="email"
    required={true}
    onChange={console.log}
  />
);

export const password = (): JSX.Element => (
  <LabeledInput
    label="Password"
    value=""
    type="password"
    required={true}
    onChange={console.log}
  />
);

export const firstName = (): JSX.Element => (
  <LabeledInput
    label="First name"
    value=""
    type=""
    required={true}
    onChange={console.log}
  />
);
