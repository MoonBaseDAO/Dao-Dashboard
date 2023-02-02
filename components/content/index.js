import { TaskStatus } from '../../constants';
import styles from './style.module.css';

const tagStyles = {
  'approved': styles.approved,
  'progress': styles.progress,
  'waiting': styles.waiting,
  'review': styles.review
}

export const Content = ({ children, categories }) => {
  return (
    <div className={styles.layout}>
      {categories.map((category) => {
        return (
          <div key={category.title}>
            <div className={styles.header}>{category.title}</div>
            <div className={styles.taskLayout}>
              {category.tasks.map((task, index) => {
                return (
                  <div key={index} className={styles.task}>
                    <span className={styles.labelText}>{task.title}</span>
                    <span className={`${styles.tag} ${tagStyles[task.status.id]}`}>{task.status.title}</span>
                  </div>
                )
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}