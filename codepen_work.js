//TODO: デザイン（UI/UX）クリップボードコピーなど
//TODO: バリデーション
//TODO: コードレビュー

const { useState, useEffect } = React;

const HojiApp = () => {
  const [hoji, setHoji] =
    useState<{
      repo: string,
      db: string,
      domain: string,
      github: string,
      vercel: string,
      planetscale: string,
    }>
    {
      repo: "",
      db: "",
      domain: "",
      github: "",
      vercel: "",
      planetscale: "",
    };

  useEffect(() => {
    setHoji({
      repo: localStorage.getItem("repo"),
      db: localStorage.getItem("db"),
      domain: localStorage.getItem("domain"),
      github: localStorage.getItem("github"),
      vercel: localStorage.getItem("vercel"),
      planetscale: localStorage.getItem("planetscale"),
    });
  }, []);

  const inputHandler = (e) => {
    setHoji({ ...hoji, [e.target.name]: e.target.value });
    localStorage.setItem(e.target.name, e.target.value);
  };

  const outputHandler = () => {};

  return (
    <div className="text-sm">
      <input
        name="repo"
        type="text"
        defaultValue={hoji.repo}
        placeholder="リポジトリ名"
        className="bg-green-200"
        onChange={inputHandler}
      />
      <input
        name="db"
        type="text"
        defaultValue={hoji.db}
        placeholder="DB名"
        className="bg-green-100"
        onChange={inputHandler}
      />
      <input
        name="domain"
        type="text"
        defaultValue={hoji.domain}
        placeholder="ドメイン"
        className="bg-green-200"
        onChange={inputHandler}
      />
      <input
        name="github"
        type="text"
        defaultValue={hoji.github}
        placeholder="GitHubアカウント名"
        className="bg-green-100"
        onChange={inputHandler}
      />
      <input
        name="vercel"
        type="text"
        defaultValue={hoji.vercel}
        placeholder="Vercelアカウント名"
        className="bg-green-200"
        onChange={inputHandler}
      />
      <input
        name="planetscale"
        type="text"
        defaultValue={hoji.planetscale}
        placeholder="PlanetScaleアカウント名"
        className="bg-green-100"
        onChange={inputHandler}
      />
      <hr />
      【GitHub】
      <input
        type="text"
        className="w-1/2 bg-gray-200"
        value={`git clone git@github.com:${hoji.github}/${hoji.repo}.git`}
        onChange={outputHandler}
      />
      <div className="w-1/2 bg-pink-200">
        【VERCEL(環境変数の登録)】
        <a
          href={`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/environment-variables`}
          target="_blank"
          className="text-blue-500"
        >{`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/environment-variables`}</a>
        <br />
        【VERCEL(PROJECT ID を調べる)】
        <a
          href={`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/general`}
          target="_blank"
          className="w-full text-blue-500"
        >{`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/general`}</a>
        <br />
        【VERCEL(TEAM ID を調べる)】
        <a
          href={`https://vercel.com/teams/${hoji.vercel}/settings`}
          target="_blank"
          className="w-full text-blue-500"
        >{`https://vercel.com/teams/${hoji.vercel}/settings`}</a>
        <br />
        【ビルド状況を確認する】
        <a
          href={`https://vercel.com/${hoji.vercel}/${hoji.repo}/deployments`}
          target="_blank"
          className="text-blue-500"
        >{`https://vercel.com/${hoji.vercel}/${hoji.repo}/deployments`}</a>
        【ここからドメインを確認できます。】
        <a
          href={`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/domains`}
          target="_blank"
          className="w-full text-blue-500"
        >{`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/domains`}</a>
        <br />
        【ここから再度デプロイ（Redeploy）できます。】
        <a
          href={`https://vercel.com/${hoji.vercel}/${hoji.repo}/deployments`}
          target="_blank"
          className="w-full text-blue-500"
        >{`https://vercel.com/${hoji.vercel}/${hoji.repo}/deployments`}</a>
      </div>
      <div className="w-1/2 bg-gray-200">
        【DB】コマンド
        <input
          type="text"
          className="w-full bg-gray-200"
          value={`pscale db create ${hoji.db}`}
          onChange={outputHandler}
        />
        <input
          type="text"
          className="w-full bg-gray-200"
          value={`pscale connect ${hoji.db} main --port 3309 npx prisma db push pscale branch`}
          onChange={outputHandler}
        />
        <input
          type="text"
          className="w-full bg-gray-200"
          value={`promote ${hoji.db} main`}
          onChange={outputHandler}
        />
        【DATABASE_URL を取得】
        <a
          href={`https://app.planetscale.com/${hoji.planetscale}/${hoji.db}/main`}
          target="_blank"
          className="text-blue-500"
        >{`https://app.planetscale.com/${hoji.planetscale}/${hoji.db}/main`}</a>
      </div>
      【domain】
      <input
        type="text"
        className="w-30 bg-gray-200"
        value={`${hoji.domain}`}
        onChange={outputHandler}
      />
      【call back】
      <a
        href={`https://${hoji.domain}/api/auth/callback/github`}
        target="_blank"
        className="text-blue-500"
      >{`https://${hoji.domain}/api/auth/callback/github`}</a>
      【アクセスする】
      <a
        href={`https://${hoji.domain}`}
        target="_blank"
        className="text-blue-500"
      >{`https://${hoji.domain}`}</a>
      <br />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HojiApp />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
