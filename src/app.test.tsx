import { render, screen } from "@testing-library/react";
import { App } from "./app";

test("renders learn react link", () => {
  render(<App />);
  expect(screen.getByText("TODO")).toBeInTheDocument();
});
