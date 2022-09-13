import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/pages/about/About.module.scss";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | ytakada.dev</title>
      </Head>
      <main className={styles.main}>
        <h1>About</h1>
        <p>ytakadaは、東京都を中心に活動するフリーランスエンジニアです。</p><p>現在は、ドメイン駆動設計などのソフトウェア設計に特に興味があります。バックエンド領域が得意です。</p>

        <div className={styles.technology_stack}>
          <h2>技術スタック</h2>
          <div className={styles.main_stack}>
            <h3>メイン</h3>
            <table border={1}>
              <thead>
                <tr>
                  <th>カテゴリ</th>
                  <th>技術スタック</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3}>言語, フレームワーク, ライブラリなど</td>
                  <td><u>バックエンド</u><br />PHP (Laravel), Java (Spring Framework)</td>
                </tr>
                <tr>
                  <td><u>Webフロントエンド</u><br />HTML, CSS, JavaScript (Vue.js)</td>
                </tr>
                <tr>
                  <td><u>その他</u><br />Gradle, Open API</td>
                </tr>
                <tr>
                  <td>データベース, ストレージなど</td>
                  <td>MySQL, Redis, Amazon S3</td>
                </tr>
                <tr>
                  <td rowSpan={4}>インフラ</td>
                  <td><u>クラウド</u><br />AWS</td>
                </tr>
                <tr>
                  <td><u>コンピューティング</u><br />Docker, Amazon EC2, Amazon ECS, AWS Lambda</td>
                </tr>
                <tr>
                  <td><u>ミドルウェア</u><br />Nginx</td>
                </tr>
                <tr>
                  <td><u>管理</u><br />AWS CloudFormation</td>
                </tr>
                <tr>
                  <td>その他</td>
                  <td>Git, GitHub, Atlassian Confluence, Atlassian Jira</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>挑戦中</h3>
          <ul>
            <li>要求開発, 要件定義</li>
            <li>各種設計（システムアーキテクチャ, ソフトウェア, データ, インフラ）</li>
            <li>言語, ライブラリ, フレームワーク（Go, Rust, TypeScript, React.js, Next.js）</li>
            <li>DevOps関連技術</li>
          </ul>
        </div>

        <div className={styles.links}>
          <h2>関連リンク</h2>
          <div className={styles.items}>
            <ul>
              <li>
                <a href="https://github.com/ytakada1021" target="__blank" rel="noreferrer noopener">
                  <div className={styles.github}>
                    <div className={styles.icon}>
                      <Image src="/mark-github.svg" alt="github" layout="fill" />
                    </div>
                    <p className={styles.label}>GitHub</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.contact}>
          <h2>お問い合わせ</h2>
          <p>mail__at__ytakada.dev までメールにてご連絡ください（__at__は＠に置き換えください）。</p>
        </div>
      </main>
    </>
  );
}

export default About;
