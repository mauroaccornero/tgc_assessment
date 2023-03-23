import {
  ADD_ITEM,
  DELETE_ITEM,
  SET_ERRORS,
  SET_ITEMS,
  SET_LOADING,
  SET_SELECTED,
  UPDATE_ITEM,
  SET_MODAL,
} from "./itemsActions";
import State from "../types/State";
import Actions from "../types/Actions";

const itemsReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload };
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id == action.payload.id
            ? { ...item, text: action.payload.text }
            : item
        ),
      };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERRORS:
      return { ...state, errors: action.payload };
    case SET_SELECTED:
      return { ...state, selected: action.payload };
    case SET_MODAL:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
};

export default itemsReducer;
