import { render, screen } from "@testing-library/react";
import { AppProviders } from "../../providers/AppProviders";
import { customRender } from "../../test-utils";
import { MuiMode } from "./MuiMode";

// Wraps the test in a provider, as the app.
test("Renders text correctly", () => {
  render(<MuiMode />, { wrapper: AppProviders });

  const mode = screen.getByRole("heading");

  expect(mode).toHaveTextContent("dark mode");
});

test("Renders text correctly with customRender", () => {
  customRender(<MuiMode />);

  const mode = screen.getByRole("heading");

  expect(mode).toHaveTextContent("dark mode");
});
