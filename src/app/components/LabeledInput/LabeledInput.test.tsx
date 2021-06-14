import React from "react";
import { render, screen } from "@testing-library/react";
import LabeledInput from "./LabeledInput";

test("renders labeledInput for email", () => {
  render(<LabeledInput label={"Email address"} onChange={console.log} />);
  screen.getByText("Email address");
});
