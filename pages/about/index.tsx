import { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/pages/about/About.module.scss";

const About: NextPage = () => {
  return (
    <main className={styles.main}>
      <p>ytakadaは、東京都を中心に活動するフリーランスエンジニアです。バックエンド領域が得意。</p>

      <div className={styles.technology_stack}>
        <h1>技術スタック</h1>
        <div className={styles.main_stack}>
          <h2>メイン</h2>
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
        <h2>挑戦中</h2>
        <p>Go, Rust, TypeScript, React.js, Next.js</p>
      </div>

      <div className={styles.links}>
        <h1>関連リンク</h1>
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
        <h1>お問い合わせ</h1>
        <p>mail__at__ytakada.dev までメールにてご連絡ください（__at__は＠に置き換えください）。</p>
      </div>
    </main>
  );
}

export default About;
