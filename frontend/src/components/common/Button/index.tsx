import { ButtonHTMLAttributes, FC } from "react";
import styles from "./styles.module.scss";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <button
      type="button"
      {...rest}
      className={`${styles.button} ${rest.className}`}
    >
      {children}
    </button>
  );
};
