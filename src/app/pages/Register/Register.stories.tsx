import React from "react";
import Register from "./Register";

export default {
  title: "Page/Register",
  component: Register,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (): JSX.Element => <Register />;
