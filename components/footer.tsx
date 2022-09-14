import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.github}>
          <a href="https://github.com/ytakada1021" target="__blank" rel="noreferrer noopener">
            <img src="/mark-github.svg" alt="github" width="100%" height="100%" />
          </a>
        </div>
      </div>
      <Link href="/privacy">
        <a className={styles.privacy}>プライバシーポリシー</a>
      </Link>
      <p className={styles.copyright}>©︎ 2022 ytakada.dev</p>
    </footer>
  );
}
