/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC } from "react";
import styles from "./styles.module.scss";

export type ModalProps = {
  closeModal: () => void;
};

export const Modal: FC<ModalProps> = ({ children, closeModal }) => {
  return (
    <>
      <div className={styles.modal}>{children}</div>
      <div onClick={closeModal} className={styles.backdrop} />
    </>
  );
};
