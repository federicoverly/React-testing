import { render, screen } from "@testing-library/react";
import { server } from "../../mocks/server";
import { Users } from "./Users";
import { rest } from "msw";

// Mocks the api response with MSW

test("Users renders correctly", () => {
  render(<Users />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Renders a list of users", async () => {
  render(<Users />);

  const users = await screen.findAllByRole("listitem");
  expect(users).toHaveLength(3);
});

// Change the handler to force an error
test("Renders an error when the call fails", async () => {
  server.use(
    rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Users />);

  const error = await screen.findByText("Error fetching the users");

  expect(error).toBeInTheDocument();
});
