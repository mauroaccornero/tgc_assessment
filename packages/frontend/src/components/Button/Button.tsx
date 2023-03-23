import styles from "./Button.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
  disabled?: boolean;
}

const Button = ({ children, handleClick, disabled, ...props }: ButtonProps) => {
  return (
    <button
      className={styles.Button}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
