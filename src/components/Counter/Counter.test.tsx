import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

// Using the userEvent to mock interactions of the user

test("Counter renders correctly", () => {
  render(<Counter />);

  const counter = screen.getByRole("heading");

  expect(counter).toBeInTheDocument();
  expect(counter).toHaveTextContent("0");

  const incrementButton = screen.getByRole("button", { name: "Increment" });
  expect(incrementButton).toBeEnabled();
});

test("Count increments when button is clicked", async () => {
  render(<Counter />);

  const counter = screen.getByRole("heading");

  const incrementButton = screen.getByRole("button", { name: "Increment" });
  expect(incrementButton).toBeEnabled();

  await userEvent.click(incrementButton);

  expect(counter).toHaveTextContent("1");

  await userEvent.dblClick(incrementButton);

  expect(counter).toHaveTextContent("3");
});

test("Renders a count of 10 after clicking the set button", async () => {
  render(<Counter />);

  const counter = screen.getByRole("heading");
  const inputField = screen.getByRole("spinbutton");
  const setButton = screen.getByRole("button", { name: "Set" });

  await userEvent.type(inputField, "10");

  expect(inputField).toHaveValue(10);

  await userEvent.click(setButton);

  expect(counter).toHaveTextContent("10");
});

test("Elements are focused in the right order", async () => {
  render(<Counter />);

  const inputField = screen.getByRole("spinbutton");
  const setButton = screen.getByRole("button", { name: "Set" });
  const incrementButton = screen.getByRole("button", { name: "Increment" });

  await userEvent.tab();

  expect(incrementButton).toHaveFocus();

  await userEvent.tab();

  expect(inputField).toHaveFocus();

  await userEvent.tab();

  expect(setButton).toHaveFocus();
});
