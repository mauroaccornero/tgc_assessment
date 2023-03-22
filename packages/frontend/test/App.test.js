import { render, screen } from "@testing-library/react";
import App from "../src/App";
describe("App unit test", () => {
  it("App should render text", () => {
    // arrange

    const expectedText = "Some react App";
    // act
    render(<App />);
    const div = screen.getByText(expectedText);
    // assert
    expect(div).toBeVisible();
  });
});
