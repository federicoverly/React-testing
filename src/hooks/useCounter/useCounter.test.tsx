import { useCounter } from "./useCounter";
import { renderHook } from "@testing-library/react";

test("Should render the initial count", () => {
  const { result } = renderHook(useCounter);

  expect(result.current.count).toBe(0);
});

test("Should accept and render initial count", () => {
  const { result } = renderHook(() => useCounter({ initialCount: 10 }));

  expect(result.current.count).toBe(10);
});
