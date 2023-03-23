import Item from "../../../../types/Item";
import { useContext } from "react";
import { ItemsContext } from "../../../../context/ItemsContext";
import { SET_SELECTED } from "../../../../context/itemsActions";
import styles from "./ListItem.module.scss";

interface ListItemProps {
  item: Item;
}
const ListItem = ({ item }: ListItemProps) => {
  const { text, id } = item;
  const { dispatch, state } = useContext(ItemsContext);
  const { selected } = state;

  const handleSelection = () => {
    dispatch({ type: SET_SELECTED, payload: item });
  };

  return (
    <div
      onClick={handleSelection}
      className={selected && selected.id === id ? styles.selected : ""}
    >
      {text}
    </div>
  );
};

export default ListItem;
