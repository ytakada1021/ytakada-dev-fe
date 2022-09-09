import Link from "next/link";
import styles from "../styles/components/PostList.module.scss";

export default function PostList({ post }: { post: any }) {
  return (
    <Link href={`/posts/${encodeURIComponent(post.id)}`}>
      <a className={styles.container}>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.dates}>
          <div className={styles.date}>
            <p>{post.created_at}</p>
          </div>
          <div className={styles.date}>
            <p>{post.updated_at}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
