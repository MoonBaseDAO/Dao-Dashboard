import styles from './style.module.css';

const typeStyles = {
  'yellow': styles.yellow,
  'blue': styles.blue,
  'red': styles.red,
  'green': styles.green
}

export const Card = ({ children, time, title, type = "green" }) => {
  return (
    <div className={`${styles.layout} ${typeStyles[type]}`}>
      <div className={styles.description}>
        <div class={styles.time}>{time}</div>
        <div class={styles.title}>{title}</div>
      </div>
      <div className={styles.more}></div>
      <div className={styles.members}>
        {children}
      </div>
    </div>
  );
}