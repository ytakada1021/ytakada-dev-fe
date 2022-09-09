import { NextPage } from "next";
import PostList from "../components/postList";
import styles from "../styles/pages/Top.module.scss";

const Top: NextPage<any> = ({ posts }: { posts: any }) => {
  return (
    <main>
      <div className={styles.about}>
        <a href="/about">About ytakada</a>
      </div>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <PostList post={post} />
          </li>
        ))}
      </ul>
      <div className={styles.all_posts}>
        <a href="/posts">すべての記事 →</a>
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
