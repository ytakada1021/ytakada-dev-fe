import Footer from "./footer";
import Header from "./header";
import styles from '../styles/components/Layout.module.scss';

export default function Layout({ children }: {children: any}) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  )
}
