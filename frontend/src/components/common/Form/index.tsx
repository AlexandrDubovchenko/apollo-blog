import { FC, FormHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type FormProps = FormHTMLAttributes<HTMLFormElement>;

export const Form: FC<FormProps> = ({ children, ...rest }) => {
  return (
    <form {...rest} className={styles.form}>
      {children}
    </form>
  );
};
