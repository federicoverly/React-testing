import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

// "test" can be replaced by "it"
// One can use "xit" to exclude a test
it("Greet renders correctly", () => {
  render(<Greet />);

  const greetText = screen.getByText("Hello");

  expect(greetText).toBeInTheDocument();
});
