import styles from './style.module.css';
import { Navbar } from '../../components/navbar';
import { Sidebar } from '../../components/sidebar';

export default function Board() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Sidebar notifications={10} />
    </div>
  );
}