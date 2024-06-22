import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* ロゴ行 */}
      <div className="bg-gradient-to-b from-violet-50 to-white">

        <div className="navbar bg-neutral text-neutral-content">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">VWS</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a>お問い合わせ</a></li>
              <li><button className="btn btn-warning round">サインイン</button></li>
            </ul>
          </div>
        </div>

        {/* 2行目 */}
        <div className="navbar bg-neutral text-neutral-content">
          <div className="flex-1">
            <ul className="menu menu-horizontal px-2">
              <li><a>製品</a></li>
              <li><a>料金</a></li>
              <li><a>ドキュメント</a></li>
              <li><a>学ぶ</a></li>
            </ul>
          </div>
        </div>

        {/* 製品タイトル */}
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">VTuber Miyano Yami</a>
          </div>
        </div>

        {/* 製品メニュー */}
        <div className="mb-16 navbar bg-base-100">
          <div className="flex-1">
            <ul className="menu menu-horizontal px-2">
              <li><a>概要</a></li>
              <li><a>特徴</a></li>
              <li><a>ユースケース</a></li>
              <li><a>お客様事例</a></li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="mb-16 flex flex-row">
            <div className="mb-8 basis-1/1">
              <p className="mb-3 text-4xl font-bold">VTuber 宮乃やみ</p>
              <p className="mb-16 text-xl">
                ニッチリスナーのための配信的なボイスチェンジャー
              </p>
              <a
                href="https://www.youtube.com/@miyanoyami"
                className="btn btn-neutral"
                target="_blank"
              >VTuber 宮乃やみの視聴を開始する</a>
            </div>
          </div>

          <div className="mb-16 flex flex-row flex-wrap">
            <div className="mb-10 mr-16">
              <iframe height="320" width="450" src="https://www.youtube.com/embed/hVEY7Dca-sE?si=clFWPHROI-U1TIty" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin">
              </iframe>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-3xl font-bold">VTuber 宮乃やみ の紹介</p>
              <p className="mb-3 text-xl">VTuber 宮乃やみ が、リスナーにカスタマーサティスファクションを提供する方法について学びます。</p>
            </div>
          </div>
          <div className="mb-16 flex flex-row flex-wrap">
            <div className="mb-10 mr-32">
              <p className="mb-3 text-3xl font-bold">VTuber 宮乃やみ の利点</p>
            </div>
            <div className="overflow-x-auto">
              <table className="table">
                <tbody className="text-2xl font-bold">
                  <tr className="hover"><td>そこそこなクオリティのボイスチェンジャー</td></tr>
                  <tr className="hover"><td>高度なアルコール耐性</td></tr>
                  <tr className="hover"><td>それなりに豊富な多分野の知識</td></tr>
                  <tr className="hover"><td>さほど下手ではないゲームプレイ</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-4">
            <div>
              <p className="text-4xl font-bold">仕組み</p>
            </div>
            <div>
              <p className="text-xl">
                宮乃やみは、マイク、DAW、VSTを統合したボイスチェンジャーによって実現される単一の Virtual YouTuber です。
                リスナーはソースとしてストリーミング、アーカイブ、動画を選択することができます。
                また、外部のSNSを利用することでよりカスタマイズされたエクスペリエンスを実現することができます。
              </p>
            </div>
            <div>
              <img
                src="miyanoyami_architecture.png"
                width={1600}
                height={800}
                alt="Parody of AWS architecture"
              />
            </div>
          </div>


          <div className="mb-32 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <p className="text-4xl font-bold">ユースケース</p>
            </div>
            <div className="ml-3 mr-3">
              <p className="text-3xl font-bold">退屈、眠気、余り時間（フリータイム）を緩和</p>
              <p className="text-xl">宮乃やみが夜間に実行するストリーミングまたはアーカイブを視聴することで、サブスクライバーは退屈・眠気・余り時間を緩和させることが可能です。この視聴は、時間を無駄にした僅かな罪悪感のみで可能です。</p>
            </div>
            <div className="ml-3">
              <p className="text-3xl font-bold">ゲームプレイのアンチパターンを学習</p>
              <p className="text-xl">宮乃やみのストリーミングにはゲームプレイが含まれます。通常、このゲームプレイが最適化されるのには時間を要し、その間サブスクライバーはアンチパターンを学習することが可能です。</p>
            </div>
            <div className="ml-3 mr-6">
              <p className="text-3xl font-bold">時間を知る</p>
              <p className="text-xl">宮乃やみは社会人であるため、ストリーミングは夜間に行われる性質があります。サブスクライバーはこの性質を駆使し、ストリーミングの視聴を通して現在が夜であることを把握できます。</p>
            </div>
            <div className="ml-3">
              <p className="text-3xl font-bold">IT業界について学ぶ</p>
              <p className="text-xl">通常枠では技術的な内容に触れることは稀です。ただし、コメント欄(CommentSection)から宮乃やみにリクエストを送ると、IT業界やコンピューターテクノロジに関する情報・アドバイスが提供されます。</p>
            </div>

          </div>

        </div>
      </div>
    </main >
  );
}
