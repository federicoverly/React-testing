import { render, screen } from "@testing-library/react";
import { GreekTDD, Greet } from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);

  const greetText = screen.getByText("Hello");

  expect(greetText).toBeInTheDocument();
});

// TDD Approach
/**
 * Greet should render the text hello and if a name is passed into it
 * it should render hello followed by the name
 */

test("Greet renders correctly TDD", () => {
  render(<GreekTDD />);

  const greetText = screen.getByText("Hello");

  expect(greetText).toBeInTheDocument();
});

test("Greet renders correctly with a name TDD", () => {
  render(<GreekTDD name={"Federico"} />);

  const greetText = screen.getByText("Hello Federico");

  expect(greetText).toBeInTheDocument();
});
