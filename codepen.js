const { useState, useEffect } = React;

const HojiApp = () => {
  const [hoji, setHoji] = useState<{
    repo: string,
    db: string,
    domain: string,
    github: string,
    vercel: string,
    planetscale: string,
  }>({
    repo: "",
    db: "",
    domain: "",
    github: "",
    vercel: "",
    planetscale: ""
   });

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
    e.target.reportValidity();
    setHoji({ ...hoji, [e.target.name]: e.target.value });
    localStorage.setItem(e.target.name, e.target.value);
  };

  const outputHandler = () => {};
  
  const outputClickHandler = (e) => {
    if(navigator.clipboard){
      navigator.clipboard.writeText(e.target.value);
      alert(`クリップボードにコピーしました。`);
    }
  };

 
  return (
    <div className="text-sm">
      <dl className="flex flex-wrap text-center px-[5%] pt-[2%] pb-[30%] sm:px-[12%] sm:py-[2%]">
        <dt className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-zinc-400">
          リポジトリ
        </dt>
        <dt className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-zinc-400">
          GitHub
        </dt>
        <dt className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-zinc-400">
          データベース
        </dt>
        <dt className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-zinc-400">
          PlanetScale
        </dt>
        <dt className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-zinc-400">
          Vercel
        </dt>
        <dt className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-zinc-400">
          ドメイン
        </dt>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-black">
          <input
            pattern="^[0-9A-Za-z_\.\-]+$"
            name="repo"
            type="text"
            defaultValue={hoji.repo}
            placeholder="リポジトリ名"
            className="bg-green-100 w-full"
            onChange={inputHandler}
          />
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-black">
          <input
            pattern="^[0-9A-Za-z_\.\-]+$"
            name="github"
            type="text"
            defaultValue={hoji.github}
            placeholder="アカウント名"
            className="bg-green-100 w-full"
            onChange={inputHandler}
          />
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-black">
          <input
            pattern="^[0-9A-Za-z_\.\-]+$"
            name="db"
            type="text"
            defaultValue={hoji.db}
            placeholder="platformsを推奨"
            className="bg-green-100 w-full"
            onChange={inputHandler}
          />
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-black">
          <input
            name="planetscale"
            type="text"
            defaultValue={hoji.planetscale}
            placeholder="アカウント名"
            className="bg-green-100 w-full"
            onChange={inputHandler}
          />
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-black">
          <input
            pattern="^[0-9A-Za-z_\.\-]+$"
            name="vercel"
            type="text"
            defaultValue={hoji.vercel}
            placeholder="アカウント名"
            className="bg-green-100 w-full"
            onChange={inputHandler}
          />
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-1/6 box-border font-medium items-center leading-8 text-xs text-black">
          <input
            pattern="^[0-9A-Za-z_\.\-]+$"
            name="domain"
            type="text"
            defaultValue={hoji.domain}
            placeholder="ドメイン"
            className="bg-green-100 w-full"
            onChange={inputHandler}
          />
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          GitHub
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <input
            type="text"
            className="w-full"
            value={`git clone git@github.com:${hoji.github}/${hoji.repo}.git`}
            onChange={outputHandler}
            onClick={outputClickHandler}
          />
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-0 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          PlanetScale:　DB作成
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-0 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <input
            type="text"
            className="w-full"
            value={`pscale db create ${hoji.db}`}
            onChange={outputHandler}
            onClick={outputClickHandler}
          />
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-0 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          PCから接続
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-0 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <input
            type="text"
            className="w-full"
            value={`pscale connect ${hoji.db} main --port 3309 npx prisma db push pscale branch`}
            onChange={outputHandler}
            onClick={outputClickHandler}
          />
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          本番用昇格
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <input
            type="text"
            className="w-full"
            value={`promote ${hoji.db} main`}
            onChange={outputHandler}
            onClick={outputClickHandler}
          />
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          PlanetScale:　mainの管理画面
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <a
            href={`https://app.planetscale.com/${hoji.planetscale}/${hoji.db}/main`}
            target="_blank"
            className="text-blue-500"
          >{`https://app.planetscale.com/${hoji.planetscale}/${hoji.db}/main`}</a>
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          Vercel:　環境変数登録
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <a
            href={`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/environment-variables`}
            target="_blank"
            className="text-blue-500"
          >{`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/environment-variables`}</a>
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          Vercel:　PROJECT ID
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <a
            href={`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/general`}
            target="_blank"
            className="text-blue-500"
          >{`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/general`}</a>
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          Vercel:　TEAM ID
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <a
            href={`https://vercel.com/teams/${hoji.vercel}/settings`}
            target="_blank"
            className="text-blue-500"
          >{`https://vercel.com/teams/${hoji.vercel}/settings`}</a>
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          Vercel:　ドメイン確認
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <a
            href={`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/domains`}
            target="_blank"
            className="text-blue-500"
          >{`https://vercel.com/${hoji.vercel}/${hoji.repo}/settings/domains`}</a>
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          Vercel:　デプロイ
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <br />
          <a
            href={`https://vercel.com/${hoji.vercel}/${hoji.repo}/deployments`}
            target="_blank"
            className="text-blue-500"
          >{`https://vercel.com/${hoji.vercel}/${hoji.repo}/deployments`}</a>
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          Vercel:　ビルド状況確認
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <a
            href={`https://vercel.com/${hoji.vercel}/${hoji.repo}/deployments`}
            target="_blank"
            className="text-blue-500"
          >{`https://vercel.com/${hoji.vercel}/${hoji.repo}/deployments`}</a>
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          ドメイン: アクセスする
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <a
            href={`https://${hoji.domain}`}
            target="_blank"
            className="text-blue-500"
          >{`https://${hoji.domain}`}</a>
        </dd>

        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-2/6 box-border font-medium items-center leading-8 text-xs text-black">
          ドメイン: GitHub Callback URL
        </dd>
        <dd className="font-sans flex p-0 m-0 border-solid border-b-2 border-zinc-200 not-italic w-4/6 box-border font-medium items-center leading-8 text-xs text-black">
          <a
            href={`https://${hoji.domain}/api/auth/callback/github`}
            target="_blank"
            className="text-blue-500"
          >{`https://${hoji.domain}/api/auth/callback/github`}</a>
        </dd>
      </dl>

      <hr />
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
