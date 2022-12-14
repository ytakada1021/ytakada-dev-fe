import { NextPage } from "next";
import Head from "next/head";
import PostList from "../../components/postList";
import Post from "../../models/post";
import styles from "../../styles/pages/posts/PostList.module.scss";

const PostListPage: NextPage<any> = ({ serializedPosts }: { serializedPosts: string }) => {
  const posts = JSON.parse(serializedPosts);

  return (
    <>
      <Head>
        <title>Posts | ytakada.dev</title>
      </Head>
      <main className={styles.main}>
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
      </main>
    </>
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

export default PostListPage;
