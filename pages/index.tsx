import { NextPage } from "next";
import Link from "next/link";

const PostList: NextPage<any> = ({ posts }: {posts: any}) => {
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/posts/${encodeURIComponent(post.id)}`}>
            <a>{post.title}</a>
          </Link>
          <p>{post.posted_at}</p>
          <p>{post.updated_at}</p>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost/posts');
  const posts = await res.json();

  return { props: { posts } };
}

export default PostList;
