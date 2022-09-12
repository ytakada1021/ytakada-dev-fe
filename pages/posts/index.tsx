import { NextPage } from "next";
import PostList from "../../components/postList";
import Post from "../../models/post";
import styles from "../../styles/pages/posts/PostList.module.scss";

const PostListPage: NextPage<any> = ({ serializedPosts }: { serializedPosts: string }) => {
  const posts = JSON.parse(serializedPosts);

  return (
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
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost/posts');
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
