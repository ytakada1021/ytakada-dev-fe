import { NextPage } from "next";
import styles from "../../styles/pages/Post.module.scss";
import Head from "next/head";

const PostPage: NextPage<any> = ({ post }: { post: any }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <article className={styles.post}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.dates}>
          <div className={styles.posted_at}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
            <p>{post.posted_at}</p>
          </div>
          <div className={styles.updated_at}>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M11,8v5l4.25,2.52l0.77-1.28l-3.52-2.09V8H11z M21,10V3l-2.64,2.64C16.74,4.01,14.49,3,12,3c-4.97,0-9,4.03-9,9 s4.03,9,9,9s9-4.03,9-9h-2c0,3.86-3.14,7-7,7s-7-3.14-7-7s3.14-7,7-7c1.93,0,3.68,0.79,4.95,2.05L14,10H21z" /></g></g></svg>
            <p>{post.updated_at}</p>
          </div>
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
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

  post.posted_at = (new Date(post.posted_at)).toLocaleDateString();
  post.updated_at = (new Date(post.updated_at)).toLocaleDateString();

  return { props: { post } };
}

export default PostPage;
