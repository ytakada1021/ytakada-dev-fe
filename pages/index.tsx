import { NextPage } from "next";
import Link from "next/link";
import PostList from "../components/postList";
import Post from "../models/post";
import styles from "../styles/pages/Top.module.scss";

const Top: NextPage<any> = ({ serializedPosts }: { serializedPosts: string }) => {
  const posts = JSON.parse(serializedPosts);

  return (
    <main className={styles.main}>
      <Link href="/about">
        <a className={styles.about} >About author →</a>
      </Link>
      <div className={styles.posts}>
        {
          posts.length === 0
            ?
            <p className={styles.not_posted}>まだ記事は投稿されていません.</p>
            :
            <ul>
              {posts.map((post: any) => (
                <li key={post.id}>
                  <PostList post={post} />
                </li>
              ))}
            </ul>
        }
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
  const apiEndpoint = process.env.NEXT_PUBLIC_API_BASE_URI + "/posts";

  const res = await fetch(apiEndpoint);
  const json = await res.json();

  const posts = json.map((obj: any) => new Post(
    obj.id,
    obj.title,
    obj.content,
    obj.posted_at,
    obj.updated_at
  ));

  const serializedPosts = JSON.stringify(posts);

  return { props: { serializedPosts } };
}

export default Top;
