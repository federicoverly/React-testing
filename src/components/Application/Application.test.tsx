import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

/**
 * Priority for choosing the order of queries (It should resemble how users interact with the code as much as possible: )
 * 1. Get by role (filter by options)
 * 2. Get by label text
 * 3. Get by placeholder text
 * 4. Get by text
 * 5. Get by display value
 * 6. Get by alt text
 * 7. Get by title
 * 8. Get by test id
 */

describe("Application", () => {
  // Get element by role (geyByRole)
  test("Getting elements by role", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    const nameInput = screen.getByRole("textbox", { name: "Name" });
    const bioInput = screen.getByRole("textbox", { name: "Bio" });
    const selectLocation = screen.getByRole("combobox");
    const termsAndConditions = screen.getByRole("checkbox");
    const submitButton = screen.getByRole("button");

    expect(pageHeading).toBeInTheDocument();
    expect(sectionHeading).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(bioInput).toBeInTheDocument();
    expect(selectLocation).toBeInTheDocument();
    expect(termsAndConditions).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  // Get by label text
  test("Getting elements by label", () => {
    render(<Application />);

    const nameInput = screen.getByLabelText("Name");
    const termsAndConditions = screen.getByLabelText(
      "I agree to the terms and conditions"
    );

    expect(nameInput).toBeInTheDocument();
    expect(termsAndConditions).toBeInTheDocument();
  });

  // Get by placeholder text
  test("Getting elements by placeholder", () => {
    render(<Application />);

    const nameInput = screen.getByPlaceholderText("Fullname");
    const termsAndConditions = screen.getByLabelText(
      "I agree to the terms and conditions"
    );

    expect(nameInput).toBeInTheDocument();
    expect(termsAndConditions).toBeInTheDocument();
  });

  // Get by text
  test("Getting elements by text", () => {
    render(<Application />);

    const mandatoryFields = screen.getByText("All fields are mandatory");
    const termsAndConditions = screen.getByText("conditions", { exact: false });

    expect(mandatoryFields).toBeInTheDocument();
    expect(termsAndConditions).toBeInTheDocument();
  });

  // Get by display value
  test("Getting elements by display value", () => {
    render(<Application />);

    const inputName = screen.getByDisplayValue("Federico");

    expect(inputName).toBeInTheDocument();
  });

  // Get by alt text
  test("Getting elements by alt text", () => {
    render(<Application />);

    const imageElement = screen.getByAltText("imageElement");

    expect(imageElement).toBeInTheDocument();
  });

  // Get by title
  test("Getting elements by title", () => {
    render(<Application />);

    const closeElement = screen.getByTitle("close");

    expect(closeElement).toBeInTheDocument();
  });

  // Get by test id
  test("Getting elements by test-id", () => {
    render(<Application />);

    const customElement = screen.getByTestId("customElement");

    expect(customElement).toBeInTheDocument();
  });
});
