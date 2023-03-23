import Item from "./Item";
import {
  CLOSED,
  CONFIRM_DELETE,
  LOADING,
  ADD_ITEM,
} from "../components/Layout/components/Modal/states";

export type modalStates =
  | typeof CLOSED
  | typeof ADD_ITEM
  | typeof LOADING
  | typeof CONFIRM_DELETE;

interface State {
  items: Item[];
  loading: boolean;
  errors: Error | null;
  selected: Item | null;
  modal: modalStates;
}

export default State;
