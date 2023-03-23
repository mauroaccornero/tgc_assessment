import Button from "../Button/Button";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import {
  DELETE_ITEM,
  SET_LOADING,
  SET_MODAL,
  SET_SELECTED,
} from "../../context/itemsActions";
import { CLOSED } from "../Layout/components/Modal/states";
import styles from "./ConfirmDeletion.module.scss";

const deleteData = async (url = "") => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const ConfirmDeletion = () => {
  const { dispatch, state } = useContext(ItemsContext);
  const handleCancel = async () => {
    dispatch({ type: SET_MODAL, payload: CLOSED });
  };

  const handleDelete = async () => {
    if (state.selected) {
      dispatch({ type: SET_LOADING, payload: true });
      const response = await deleteData(
        `http://localhost:3000/api/items/${state.selected.id}`
      );
      dispatch({ type: DELETE_ITEM, payload: response.data.id });
      dispatch({ type: SET_SELECTED, payload: null });
      dispatch({ type: SET_LOADING, payload: false });
      dispatch({ type: SET_MODAL, payload: CLOSED });
    }
  };

  return (
    <div className={styles.ConfirmDeletion}>
      <Button handleClick={handleCancel}>Cancel</Button>
      <Button handleClick={handleDelete} disabled={state.selected === null}>
        Delete item
      </Button>
    </div>
  );
};

export default ConfirmDeletion;
