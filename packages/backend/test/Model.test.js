import itemsModels from "../src/models/items.model";

describe("Model unit test", () => {
  it("getItems should return a list of items", () => {
    // arrange
    const expectedItems = [
      { id: "1", text: "First item text" },
      { id: "2", text: "Second item text" },
      { id: "3", text: "Third item text" },
      { id: "4", text: "Fourth item text" },
      { id: "5", text: "Fifth item text" },
    ];

    // act
    const items = itemsModels.getItems();

    // assert
    expect(items.length).toBe(5);
    expect(items).toStrictEqual(expectedItems);
  });

  it("deleteItem should remove an item from list", () => {
    // arrange
    const toDeleteId = "2";
    const expectedItems = [
      { id: "1", text: "First item text" },
      { id: "2", text: "Second item text" },
      { id: "3", text: "Third item text" },
      { id: "4", text: "Fourth item text" },
      { id: "5", text: "Fifth item text" },
    ].filter((item) => item.id !== toDeleteId);

    // act
    const deletedItem = itemsModels.deleteItem(toDeleteId);
    const items = itemsModels.getItems();

    // assert
    expect(deletedItem.id).toStrictEqual(toDeleteId);
    expect(items).toStrictEqual(expectedItems);
  });
});
