import { useContext } from "react";
import List from "./components/List/List";
import Spinner from "./components/Layout/components/Spinner/Spinner";
import { ItemsContext } from "./context/ItemsContext";
import Layout from "./components/Layout/Layout";
import {
  ADD_ITEM,
  CONFIRM_DELETE,
} from "./components/Layout/components/Modal/states";
import ListActions from "./components/List/components/ListActions/ListActions";
import Overlay from "./components/Layout/components/Overlay/Overlay";
import Modal from "./components/Layout/components/Modal/Modal";
import AddItemForm from "./components/AddItemForm/AddItemForm";
import ConfirmDeletion from "./components/ConfirmDeletion/ConfirmDeletion";

const App = () => {
  const { state } = useContext(ItemsContext);
  const { items, loading, errors, modal } = state;

  return (
    <Layout>
      {loading && (
        <Overlay>
          <Spinner />
        </Overlay>
      )}
      {errors && <div>Some error occurred {errors.message}</div>}
      {items.length != 0 ? <List items={items} /> : <small>No items</small>}
      <ListActions />
      {modal === ADD_ITEM && (
        <Overlay>
          <Modal>
            <h2>Add element form</h2>
            <AddItemForm />
          </Modal>
        </Overlay>
      )}
      {modal === CONFIRM_DELETE && state.selected && (
        <Overlay>
          <Modal>
            <h2>Delete confirmation</h2>
            <p>You&apos;re about to delete item with id {state.selected.id}</p>
            <ConfirmDeletion />
          </Modal>
        </Overlay>
      )}
    </Layout>
  );
};

export default App;
