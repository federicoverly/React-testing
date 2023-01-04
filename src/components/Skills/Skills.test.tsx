import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

// Get all to find multiple elements. Returns an array of all matching
describe("Skills", () => {
  const skills = ["HTML", "CSS", "Javascript"];
  test("Renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");

    expect(listElement).toBeInTheDocument();
  });

  test("Renders a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole("listitem");

    expect(listItemElements).toHaveLength(skills.length);
  });

  test("Renders login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
  });

  // QueryBy and QueryAllBy to match a node, despite it being rendered or not
  test("Start learning button is not rendered", () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });

    expect(startLearningButton).not.toBeInTheDocument();
  });

  // Find by returns a promise when an element is found when matches the query. It is rejected if nothing is found after a timeout (default 1000)
  test("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);

    const startLearningButton = await screen.findByRole("button", {
      name: "Start learning",
    });

    expect(startLearningButton).toBeInTheDocument();
  });
});
