import { ReactNode } from "react";
import styles from "./DefaultLayout.module.scss";

type Props = {
  children: ReactNode;
};

function DefaultLayout({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}

export default DefaultLayout;
