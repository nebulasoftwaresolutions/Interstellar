import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button.js", () => {
  test("should load button", async () => {
    const { container } = renderBtn();
    const btnElement = container.querySelector("button");
    expect(btnElement).toBeInTheDocument();
  });
  test("should load dynamic text", () => {
    const { container } = renderBtn({ title: "Click" });
    const btnElement = container.querySelector("button");
    expect(btnElement.textContent).toBe("Click");
  });
});

const renderBtn = (props) => {
  return render(<Button {...props} />);
};
