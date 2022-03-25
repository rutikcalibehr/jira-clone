import { Sidebar } from "ui/containers/sidebar";
import { Board } from "ui/containers/board";
import styles from "./project.module.scss";

export const Project = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.project_container}>
        <Board />
      </div>
    </div>
  )
}