import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

test("CounterTwo renders correctly", () => {
  render(<CounterTwo count={0} />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Handlers are called", async () => {
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  render(
    <CounterTwo
      count={0}
      handleIncrement={incrementHandler}
      handleDecrement={decrementHandler}
    />
  );
  const incrementButton = screen.getByRole("button", { name: "Increment" });
  const decrementButton = screen.getByRole("button", { name: "Decrement" });

  expect(incrementButton).toBeEnabled();
  expect(decrementButton).toBeEnabled();

  await userEvent.click(incrementButton);
  await userEvent.click(decrementButton);

  expect(incrementHandler).toHaveBeenCalledTimes(1);
  expect(decrementHandler).toHaveBeenCalledTimes(1);
});
