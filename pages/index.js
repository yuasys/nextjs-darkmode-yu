export default function Home() {
  return (
    <div>
      <div className="container">
        <nav>
          <div className="title">私のポートフォリオ</div>
          <div>
            <form action="#">
              <lavel className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </lavel>
            </form>
          </div>
        </nav>
        <div className="content">
          <h1>YuasysNobのポートフォリオ🚀</h1>
          <h3>
              私はプログラミングチュートリアル動画をYoutubeとUdemyで更新しています🌳
            </h3>
            <p>
              投稿内容はフロントエンドからバックエンドまで幅広く動画を投稿しています。
              エンジニアとして幅広い知識をキャッチアップしたい人のためのチャンネルです☕
            </p>
            <button className="primary-btn">お問い合わせ</button>
        </div>
      </div>
    </div>
  )
}
