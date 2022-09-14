import Link from "next/link";
import styles from "../styles/components/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="logo" width="100%" height="100%" />
            </a>
          </Link>
        </div>
        <div className={styles.breadcrumbs}>
          <p>ytakada.dev</p>
        </div>
      </div>
    </header>
  );
}
