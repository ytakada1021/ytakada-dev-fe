import { NextPage } from "next";
import styles from "../../styles/pages/posts/Post.module.scss";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

const PostPage: NextPage<any> = ({ post }: { post: any }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <article className={styles.post}>
          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <div className={styles.post_date}>
              <div className={styles.icon_post}>
                <Image src="/edit_FILL0_wght400_GRAD0_opsz48.svg" layout="fill" alt="icon_post" />
              </div>
              <p className={styles.label}>{post.posted_at}</p>
            </div>
            <div className={styles.update_date}>
              <div className={styles.icon_update}>
                <Image src="/update_FILL0_wght400_GRAD0_opsz48.svg" layout="fill" alt="icon_update" />
              </div>
              <p className={styles.label}>{post.updated_at}</p>
            </div>
          </div>

          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js" />
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
