import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LabeledInput from "./LabeledInput";

test("renders labeledInput field", () => {
  render(
    <LabeledInput label={"Email address"} value="" onChange={console.log} />
  );
  screen.getByText("Email address");
});

test("calls onChange with value", () => {
  const handleChange = jest.fn();
  render(
    <LabeledInput label={"Email address"} value="" onChange={handleChange} />
  );

  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "email@address.de" },
  });
  expect(handleChange).toBeCalledWith("email@address.de");
});
