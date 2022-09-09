import styles from "../styles/components/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <a href="/">
          <svg width="100%" height="100%" viewBox="0, 0, 200, 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="#0335D1" />
          </svg>
        </a>
      </div>
      <div className={styles.breadcrumbs}>
        ytakada
      </div>
    </header>
  );
}
