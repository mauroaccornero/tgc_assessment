import {
  ADD_ITEM,
  DELETE_ITEM,
  SET_ERRORS,
  SET_ITEMS,
  SET_LOADING,
  SET_MODAL,
  SET_SELECTED,
  UPDATE_ITEM,
} from "../context/itemsActions";
import Item from "./Item";
import { modalStates } from "./State";

type Actions =
  | { type: typeof SET_ITEMS; payload: Item[] }
  | { type: typeof ADD_ITEM; payload: Item }
  | { type: typeof DELETE_ITEM; payload: string }
  | { type: typeof UPDATE_ITEM; payload: Item }
  | { type: typeof SET_LOADING; payload: boolean }
  | { type: typeof SET_ERRORS; payload: Error }
  | { type: typeof SET_SELECTED; payload: Item | null }
  | { type: typeof SET_MODAL; payload: modalStates };

export default Actions;
