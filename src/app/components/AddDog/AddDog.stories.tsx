import React from "react";
import AddDog from "./AddDog";

export default {
  title: "Component/AddDog",
  component: AddDog,
};

export const addAnotherDog = (): JSX.Element => (
  <AddDog label="Add another dog" />
);
