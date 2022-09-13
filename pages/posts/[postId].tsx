import { NextPage } from "next";
import styles from "../../styles/pages/posts/Post.module.scss";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Post from "../../models/post";

const PostPage: NextPage<any> = ({ serializedPost }: { serializedPost: string }) => {
  const post = JSON.parse(serializedPost);

  return (
    <>
      <Head>
        <title>{post.title} | ytakada.dev</title>
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
            {
              post.updated_at == null
                ?
                null
                :
                <div className={styles.update_date}>
                  <div className={styles.icon_update}>
                    <Image src="/update_FILL0_wght400_GRAD0_opsz48.svg" layout="fill" alt="icon_update" />
                  </div>
                  <p className={styles.label}>{post.updated_at}</p>
                </div>
            }
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
  const apiEndpoint = process.env.NEXT_PUBLIC_API_BASE_URI + "/posts";

  const res = await fetch(apiEndpoint);
  const posts = await res.json();

  const paths = posts.map((post: any) => ({
    params: {
      postId: post.id
    }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: any }) {
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_BASE_URI}/posts/${params.postId}`;

  const res = await fetch(apiEndpoint);
  const json = await res.json();

  const post = new Post(
    json.id,
    json.title,
    json.content,
    json.posted_at,
    json.updated_at
  )

  const serializedPost = JSON.stringify(post);

  return { props: { serializedPost } };
}

export default PostPage;
