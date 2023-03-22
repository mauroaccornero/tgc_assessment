import { Request, Response } from "express";
import itemsModel from "../models/items.model";
export const getItems = (req: Request, res: Response) => {
  const data = itemsModel.getItems();
  res.json({ data, message: "" });
};

export const getItem = (req: Request, res: Response) => {
  const data = itemsModel.getItem(req.params.id);
  const status = data ? 200 : 404;
  const message = data ? "" : "no item found";
  res.status(status).json({ data, message });
};

export const createItem = (req: Request, res: Response) => {
  const data = itemsModel.createItem(req.body);
  res.status(200).json({ data, message: "item created" });
};

export const editItem = (req: Request, res: Response) => {
  const data = itemsModel.editItem(req.params.id, req.body);
  const status = data ? 200 : 404;
  const message = data ? "item updated" : "no item found";
  res.status(status).json({ data, message });
};

export const deleteItem = (req: Request, res: Response) => {
  const data = itemsModel.deleteItem(req.params.id);
  const status = data ? 200 : 404;
  const message = data ? "item deleted" : "no item found";
  res.status(status).json({ data, message });
};
