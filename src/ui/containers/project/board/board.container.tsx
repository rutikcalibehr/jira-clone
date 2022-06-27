import { observer } from "mobx-react-lite";
import { projectStore } from "infrastructure/store";
import { Search } from "ui/containers/project/board/search";
import { UserAvatarList } from "./avatar-list";
import { CategoryColumn } from "./category-column";
import { IssueEditPanel } from "./issue-panel";
import styles from "./board.module.scss";

export const Board = observer((): JSX.Element => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        Projects / {projectStore.project.name}
        <h1 className={styles.title}>Sprint board</h1>
      </section>
      <section className={styles.tools}>
        <Search />
        <div className={styles.users}>
          <UserAvatarList />
        </div>
        <div className={styles.filters}>
          FILTERS
        </div>
      </section>
      <section className={styles.categories}>
        {projectStore.project.categories.map(category => (
          <CategoryColumn
            key={category.id}
            category={category}
          />
        ))}
      </section>
      <IssueEditPanel isOpen={Boolean(projectStore.editingIssue)} />
    </div>
  )
});