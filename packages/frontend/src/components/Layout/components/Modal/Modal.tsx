import styles from "./Modal.module.scss";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  return <div className={styles.Modal}>{children}</div>;
};

export default Modal;
