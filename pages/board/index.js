import styles from './style.module.css';
import { Sidebar } from '../../components/sidebar';

export default function Board() {
  return (
    <div className={styles.layout}>
      <Sidebar />
    </div>
  );
}