import ListItem from "./components/ListItem/ListItem";
import Item from "../../types/Item";
import styles from "./List.module.scss";
interface ListProps {
  items: Item[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul className={styles.List}>
      {items.map((item) => (
        <li key={item.id}>
          <ListItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
