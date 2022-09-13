import Head from "next/head";
import Link from "next/link";
import styles from "../styles/pages/NotFound.module.scss";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found | ytakada.dev</title>
      </Head>
      <div className={styles.not_found}>
        <h1 className={styles.label}>ページが見つかりませんでした.</h1>
        <Link href="/">
          <a className={styles.top}>Top →</a>
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
