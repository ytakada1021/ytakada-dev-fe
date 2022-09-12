import Link from "next/link";
import styles from "../styles/pages/NotFound.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.not_found}>
      <h1 className={styles.label}>ページが見つかりませんでした.</h1>
      <Link href="/">
        <a className={styles.top}>Top →</a>
      </Link>
    </div>
  );
}

export default NotFoundPage;
