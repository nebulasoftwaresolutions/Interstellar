import { render, screen } from "@testing-library/react";
import AppBar from "./AppBar";

describe("AppBar.js", () => {
  test("should load title", async () => {
    render(<AppBar title="app bar" />);
    const headerElement = screen.getByText(/app bar/i);
    expect(headerElement).toBeInTheDocument();
  });
});
