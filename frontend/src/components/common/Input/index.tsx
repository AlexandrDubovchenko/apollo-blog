import { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export enum InputVariants {
  input = "input",
  textarea = "textarea",
}

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  variant?: InputVariants;
}

export const Input: FC<InputProps> = ({
  variant = InputVariants.input,
  ...rest
}) => {
  return variant === InputVariants.input ? (
    <input {...rest} className={`${styles.input} ${rest.className}`} />
  ) : (
    <textarea {...rest} className={`${styles.input} ${rest.className}`} />
  );
};
