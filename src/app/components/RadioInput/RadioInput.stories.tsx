import React from "react";
import RadioInput from "./RadioInput";

export default {
  title: "Component/RadioInput",
  component: RadioInput,
};

export const chooseSex = (): JSX.Element => (
  <RadioInput
    label="Female"
    type="radio"
    name="chooseSex"
    value="female"
    required={true}
    onChange={console.log}
  />
);
