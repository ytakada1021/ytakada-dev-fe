import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.github}>
          <a href="https://github.com/ytakada1021" target="__blank" rel="noreferrer noopener">
            <Image src="/mark-github.svg" alt="github" layout="fill" />
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
