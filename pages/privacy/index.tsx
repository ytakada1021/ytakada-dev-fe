import { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/pages/Privacy.module.scss";

const PrivacyPage: NextPage<any> = () => {
  return (
    <>
      <Head>
        <title>プライバシーポリシー | ytakada.dev</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.privacy}>
          <h1>プライバシーポリシー</h1>
          <p>ytakada.dev（以下、「当サイト」）のプライバシーポリシー・免責事項を次の通り記載します。</p>

          <h2>個人情報の利用目的</h2>
          <p>当サイトでは、お問い合わせ時にメールアドレス等の個人情報を入力いただく場合があります。取得した個人情報は、必要な連絡のみに利用させていただき、これらの目的以外では利用いたしません。</p>

          <h2>Cookieの使用</h2>
          <p>当サイトでは、アクセス解析のためにCookieを使用しています。Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。Cookieの使用を望まない場合、ブラウザからCookieを無効に設定できます。</p>

          <h2>個人情報の第三者開示</h2>
          <p>取得した個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。</p>
          <ul>
            <li>本人の同意が得られた場合</li>
            <li>法令により開示が求められた場合</li>
          </ul>

          <h2>アクセス解析ツール</h2>
          <p>当サイトでは、Googleアナリティクスによりアクセス情報を解析しています。アクセス情報の解析にはCookieを使用します。アクセス情報の収集はCookieを無効にすることで拒否できます。Google社のデータ収集・処理の仕組みについては、<a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener noreferrer">こちら</a>をご覧ください。</p>

          <h2>免責事項</h2>
          <p>当サイトは、掲載内容によって生じた損害に対する一切の責任を負いません。各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。また、リンク先の他サイトで提供される情報・サービスについても責任を負いかねます。ご了承ください。</p>

          <h2>著作権</h2>
          <p>当サイトに掲載されている文章・画像等の著作権は、運営者に帰属します。法的に認められている引用の範囲を超えて、無断で転載することを禁止します。</p>

          <h2>プライバシーポリシーの変更</h2>
          <p>当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直して改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。</p>
        </div>
        <p className={styles.enactment}>2022年9月13日 制定</p>
      </main>
    </>
  );
}

export default PrivacyPage;
