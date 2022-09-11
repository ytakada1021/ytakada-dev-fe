import { NextPage } from "next";
import Link from "next/link";
import PostList from "../components/postList";
import styles from "../styles/pages/Top.module.scss";

const Top: NextPage<any> = ({ posts }: { posts: any }) => {
  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <a href="/about">About ytakada →</a>
      </div>
      <div className={styles.posts}>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <PostList post={post} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.all_posts}>
        <Link href="/posts">
          <a>All posts →</a>
        </Link>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost/posts');
  const posts = await res.json();

  return { props: { posts } };
}

export default Top;
