import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "../src/App";
import { ItemsProvider } from "../src/context/ItemsContext";
describe("App unit test", () => {
  it("App should render items", () => {
    // arrange
    const firstItemText = "Mock item";
    const secondItemText = "Mock item 2";

    // act
    render(
      <ItemsProvider>
        <App />
      </ItemsProvider>
    );

    // assert
    waitFor(() => {
      expect(screen.getByText(firstItemText)).toBeVisible();
      expect(screen.getByText(secondItemText)).toBeVisible();
    });
  });

  it("Delete button should be enabled when selecting item", () => {
    // arrange
    const firstItemText = "Mock item";

    // act
    render(
      <ItemsProvider>
        <App />
      </ItemsProvider>
    );

    // assert
    waitFor(() => {
      const deleteButton = screen.getBytext("delete");
      expect(deleteButton).toBeDisabled();

      const item = screen.getByText(firstItemText);
      fireEvent.click(item);

      expect(deleteButton).not.toBeDisabled();
    });
  });
});
