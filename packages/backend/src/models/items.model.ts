interface Item {
  id: string;
  text: string;
}

let items: Item[] = [
  { id: "1", text: "First item text" },
  { id: "2", text: "Second item text" },
  { id: "3", text: "Third item text" },
  { id: "4", text: "Fourth item text" },
  { id: "5", text: "Fifth item text" },
];

const getItems = () => items;
const getItem = (id: string) => items.find((item) => item.id === id);

const deleteItem = (id: string) => {
  const itemToDelete = items.find((item) => item.id === id);
  if (typeof itemToDelete === "undefined") {
    return null;
  }
  items = items.filter((item) => item.id !== id);
  return itemToDelete;
};
const editItem = (id: string, itemData: Item) => {
  const itemToEdit = items.find((item) => item.id === id);
  if (typeof itemToEdit === "undefined") {
    return null;
  }
  items = items.map((item) => {
    if (item.id === id) {
      item = { ...item, ...itemData };
    }
    return item;
  });

  return { id, text: itemData.text };
};

const createItem = (itemData: Omit<Item, "id">) => {
  const newId = (items.length + 1).toString();
  const newItem = { id: newId, ...itemData };
  items.push(newItem);
  return newItem;
};

export default {
  getItems,
  getItem,
  createItem,
  editItem,
  deleteItem,
};
