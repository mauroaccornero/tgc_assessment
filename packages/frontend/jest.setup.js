import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: [
          { id: "1", text: "Mock item" },
          { id: "2", text: "Mock item 2" },
        ],
        message: "",
      }),
  })
);
