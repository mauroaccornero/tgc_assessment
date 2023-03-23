import { ReactNode } from "react";
import styles from "./Overlay.module.scss";
interface OverlayProps {
  children: ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
  return <div className={styles.Overlay}>{children}</div>;
};

export default Overlay;
