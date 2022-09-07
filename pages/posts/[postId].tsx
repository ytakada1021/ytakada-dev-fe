import { NextPage } from "next";
import styles from "../../styles/Post.module.css";
import Head from "next/head";

const Post: NextPage<any> = ({ post }: { post: any }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <main className={styles.main}>
        <article>
          <h1>{post.title}</h1>
          <p>{post.posted_at}</p>
          <p>{post.updated_at}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost/posts");
  const posts = await res.json();

  const paths = posts.map((post: any) => ({
    params: {
      postId: post.id
    }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: any }) {
  const res = await fetch(`http://localhost/posts/${params.postId}`);
  const post = await res.json();

  return { props: { post } };
}

export default Post;
