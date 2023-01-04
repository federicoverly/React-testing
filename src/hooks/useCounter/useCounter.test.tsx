import { useCounter } from "./useCounter";
import { renderHook, act } from "@testing-library/react";

test("Should render the initial count", () => {
  const { result } = renderHook(useCounter);

  expect(result.current.count).toBe(0);
});

test("Should accept and render initial count", () => {
  const { result } = renderHook(() => useCounter({ initialCount: 10 }));

  expect(result.current.count).toBe(10);
});

// Act to mock an implementation
test("Should increment the count", () => {
  const { result } = renderHook(useCounter);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test("Should decrement the count", () => {
  const { result } = renderHook(useCounter);

  act(() => {
    result.current.decrement();
  });

  expect(result.current.count).toBe(-1);
});
