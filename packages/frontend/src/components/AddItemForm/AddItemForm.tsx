import Button from "../Button/Button";
import { useContext, useState } from "react";
import { ADD_ITEM, SET_LOADING, SET_MODAL } from "../../context/itemsActions";
import { CLOSED } from "../Layout/components/Modal/states";
import { ItemsContext } from "../../context/ItemsContext";
import styles from "./AddItemForm.module.scss";

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const AddItemForm = () => {
  const { dispatch } = useContext(ItemsContext);
  const [newItemText, setNewItemText] = useState("");
  const handleSubmit = async () => {
    dispatch({ type: SET_LOADING, payload: true });
    const response = await postData("http://localhost:3000/api/items", {
      text: newItemText,
    });
    dispatch({ type: ADD_ITEM, payload: response.data });
    dispatch({ type: SET_LOADING, payload: false });
    dispatch({ type: SET_MODAL, payload: CLOSED });
  };

  const handleCancel = () => {
    dispatch({ type: SET_MODAL, payload: CLOSED });
  };

  return (
    <div className={styles.AddItemForm}>
      <input
        type="text"
        onChange={(e) => setNewItemText(e.target.value)}
        value={newItemText}
      />
      <div className={styles.actions}>
        <Button handleClick={handleCancel}>Cancel</Button>
        <Button handleClick={handleSubmit} disabled={newItemText === ""}>
          Add item
        </Button>
      </div>
    </div>
  );
};

export default AddItemForm;
