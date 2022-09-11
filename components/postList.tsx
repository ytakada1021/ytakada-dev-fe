import Link from "next/link";
import styles from "../styles/components/PostList.module.scss";

export default function PostList({ post }: { post: any }) {
  return (
    <Link href={`/posts/${encodeURIComponent(post.id)}`}>
      <a>
        <div className={styles.post_list}>
          <h2 className={styles.title}>{post.title}</h2>
          <div className={styles.meta}>
            <div className={styles.date}>
              <p>{post.created_at}</p>
            </div>
            <div className={styles.date}>
              <p>{post.updated_at}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
