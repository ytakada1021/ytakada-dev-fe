import { NextPage } from "next";
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="48" height="48"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                  <p>GitHub</p>
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
