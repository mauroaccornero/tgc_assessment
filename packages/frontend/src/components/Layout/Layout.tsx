import { ReactNode } from "react";
import styles from "./Layout.module.scss";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Example app</h1>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
