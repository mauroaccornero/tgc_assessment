import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { SET_ITEMS, SET_LOADING } from "./itemsActions";
import itemsReducer from "./itemsReducer";
import State from "../types/State";
import Actions from "../types/Actions";
import { CLOSED } from "../components/Layout/components/Modal/states";

const defaultReducerState = Object.freeze({
  items: [],
  loading: false,
  errors: null,
  selected: null,
  modal: CLOSED,
});

interface ItemsContextType {
  state: State;
  dispatch: Dispatch<Actions>;
}

export const ItemsContext = createContext<ItemsContextType>({
  state: defaultReducerState,
  dispatch: () => false,
});

interface ItemsProviderProps {
  children: ReactNode;
}
export const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const [state, dispatch] = useReducer(itemsReducer, defaultReducerState);
  useEffect(() => {
    dispatch({ type: SET_LOADING, payload: true });
    fetch("http://localhost:3000/api/items") //TODO: add env vars
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: SET_ITEMS, payload: json.data });
      })
      .finally(() => {
        dispatch({ type: SET_LOADING, payload: false });
      });
  }, []);

  return (
    <ItemsContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
};
