import { render, screen } from "@testing-library/react";
import { GreekTDD } from "../components/Greet/Greet";

test("Greet renders correctly", () => {
  render(<GreekTDD />);

  const greetText = screen.getByText("Hello");

  expect(greetText).toBeInTheDocument();
});
