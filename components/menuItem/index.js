import styles from './style.module.css';

export const MenuItem = ({children, title, disabled = false}) => {
  return (
    <li class={`${styles.item} ${disabled ? styles.disabled : ''}`}>
      {children}
      <span>{title}</span>
    </li>
  )
}