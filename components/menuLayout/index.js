import styles from './style.module.css';

export const MenuLayout = ({children}) => {
  return (
    <ul class={styles.layout}>
      {children}
    </ul>
  )
}