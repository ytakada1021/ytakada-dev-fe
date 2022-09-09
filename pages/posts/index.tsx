import { NextPage } from "next";
import PostList from "../../components/postList";

const PostListPage: NextPage<any> = ({ posts }: { posts: any }) => {
  return (
    <main>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <PostList post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost/posts');
  const posts = await res.json();

  return { props: { posts } };
}

export default PostListPage;
