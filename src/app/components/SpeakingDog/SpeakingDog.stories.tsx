import React from "react";
import SpeakingDog from "./SpeakingDog";

export default {
  title: "Component/SpeakingDog",
  component: SpeakingDog,
};

export const forgotPwDog = (): JSX.Element => (
  <SpeakingDog speech="no worries!!" />
);

export const searchDog = (): JSX.Element => (
  <SpeakingDog speech="where can i stay?" />
);
