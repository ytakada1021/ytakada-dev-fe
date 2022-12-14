import Link from "next/link";
import styles from "../styles/components/PostList.module.scss";

export default function PostList({ post }: { post: any }) {
  return (
    <Link href={`/posts/${encodeURIComponent(post.id)}`}>
      <a>
        <div className={styles.post_list}>
          <h2 className={styles.title}>{post.title}</h2>

          <div className={styles.meta}>
            <div className={styles.post_date}>
              <div className={styles.icon_post}>
                <img src="/edit_FILL0_wght400_GRAD0_opsz48.svg" alt="icon_post" width="100%" height="100%" />
              </div>
              <p className={styles.label}>{post.posted_at}</p>
            </div>
            {
              post.updated_at == null
                ?
                null
                :
                <div className={styles.update_date}>
                  <div className={styles.icon_update}>
                    <img src="/update_FILL0_wght400_GRAD0_opsz48.svg" alt="icon_update" width="100%" height="100%" />
                  </div>
                  <p className={styles.label}>{post.updated_at}</p>
                </div>
            }
          </div>
        </div>
      </a>
    </Link>
  );
}
