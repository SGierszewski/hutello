import React from "react";
import Search from "./Search";

export default {
  title: "Page/Search",
  component: Search,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (): JSX.Element => <Search />;
