import Button from "../../../Button/Button";
import styles from "./ListActions.module.scss";
import { SET_MODAL } from "../../../../context/itemsActions";
import {
  ADD_ITEM,
  CONFIRM_DELETE,
} from "../../../Layout/components/Modal/states";
import { useContext } from "react";
import { ItemsContext } from "../../../../context/ItemsContext";
const ListActions = () => {
  const { state, dispatch } = useContext(ItemsContext);
  const { selected, loading } = state;
  const handleAddition = () => {
    dispatch({ type: SET_MODAL, payload: ADD_ITEM });
  };

  const handleDeletion = () => {
    dispatch({ type: SET_MODAL, payload: CONFIRM_DELETE });
  };

  return (
    <div className={styles.ListActions}>
      <Button
        handleClick={handleDeletion}
        disabled={selected == null || loading}
      >
        Delete
      </Button>
      <Button handleClick={handleAddition} disabled={loading}>
        Add item
      </Button>
    </div>
  );
};

export default ListActions;
