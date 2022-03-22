const { useState, useEffect } = React;

const Hoji = () => {
  
    type HojiList = {
      repo: string;
      db: string;
      domain: string;
      github: string,
      vercel: string,
      planetscale: string
    };
  
    const [state, setState] = useState<HojiList>({
      repo: "",
      db: "",
      domain: "",
      github: "",
      vercel: "",
      planetscale: ""
     });
  
 useEffect(() => {

   
   
       // Object.assignを使って、stateをディープコピー
    let copyState = Object.assign({}, state);

    // copyStateの各種プロパティを更新
  copyState.repo = localStorage.getItem("repo");
  copyState.db = localStorage.getItem("db");
  copyState.domain = localStorage.getItem("domain");
  copyState.github = localStorage.getItem("github");
  copyState.vercel = localStorage.getItem("vercel");
  copyState.planetscale = localStorage.getItem("planetscale");

    // copyStateをsetStateに渡して、stateを更新
    setState(copyState);

 }, []);

    const inputHandler = (e) => {
 
      
      setState({ ...state, [e.target.name]: e.target.value});
      
            localStorage.setItem(e.target.name, e.target.value);

      // localStorage.setItem("repo", state.repo);
      // localStorage.setItem("db", state.db);
      // localStorage.setItem("domain", state.domain);
      // localStorage.setItem("github", state.github);
      // localStorage.setItem("vercel", state.vercel);
      // localStorage.setItem("planetscale", state.planetscale);  
      
      // console.log(`${e.target.name} : ${e.target.value} (state.db=${state.db})`);
      
  };
  

  const outputHandler = () => {};

  return (
    <div>
      <input
        name="repo"
        type="text"
        defaultValue={state.repo}
        placeholder="リポジトリ名"
        className="bg-green-200"
        onChange={inputHandler}
      />
      <input
        name="db"
        type="text"
        defaultValue={state.db}
        placeholder="DB名"
        className="bg-green-100"
        onChange={inputHandler}
      />
      <input
        name="domain"
        type="text"
        defaultValue={state.domain}
        placeholder="ドメイン"
        className="bg-green-200"
        onChange={inputHandler}
      />
      <input
        name="github"
        type="text"
        defaultValue={state.github}
        placeholder="GitHubアカウント名"
        className="bg-green-100"
        onChange={inputHandler}
      />
      <input
        name="vercel"
        type="text"
        defaultValue={state.vercel}
        placeholder="Vercelアカウント名"
        className="bg-green-200"
        onChange={inputHandler}
      />
      <input
        name="planetscale"
        type="text"
        defaultValue={state.planetscale}
        placeholder="PlanetScaleアカウント名"
        className="bg-green-100"
        onChange={inputHandler}
      />
      <hr />
      ・プロジェクト名
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`git clone git@github.com:${state.github}/${state.repo}.git`}
        onChange={outputHandler}
      />
      ・VERCEL_PROJECT_ID
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`https://vercel.com/${state.vercel}/${state.repo}/settings/general`}
        onChange={outputHandler}
      />
      ・VERCEL_TEAM_ID
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`https://vercel.com/teams/${state.vercel}/settings`}
        onChange={outputHandler}
      />
      ・DB
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`pscale db create ${state.db}`}
        onChange={outputHandler}
      />
      ・db
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`pscale connect ${state.db} main --port 3309 npx prisma db push pscale branch`}
        onChange={outputHandler}
      />
      ・db
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`promote ${state.db} main`}
        onChange={outputHandler}
      />
      ・環境変数
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`https://vercel.com/${state.vercel}/${state.repo}/settings/environment-variables`}
        onChange={outputHandler}
      />
      ・DATABASE_URL を取得
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`https://app.planetscale.com/${state.planetscale}/${state.db}/main`}
        onChange={outputHandler}
      />
      ・domain
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`${state.domain}`}
        onChange={outputHandler}
      />
      ・ここからドメインを確認できます。
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`https://vercel.com/${state.vercel}/${state.repo}/settings/domains`}
        onChange={outputHandler}
      />
      ・ここから再度デプロイ（Redeploy）できます。
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`https://vercel.com/${state.vercel}/${state.repo}/deployments`}
        onChange={outputHandler}
      />
      ・call back
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`https://${state.domain}/api/auth/callback/github`}
        onChange={outputHandler}
      />
      ・environment-variables
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`https://vercel.com/${state.vercel}/${state.repo}/settings/environment-variables`}
        onChange={outputHandler}
      />
      ・ビルド状況を確認する
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`https://vercel.com/${state.vercel}/${state.repo}/deployments`}
        onChange={outputHandler}
      />
      ・アクセスする
      <input
        type="text"
        className="w-full bg-gray-200"
        value={`https://${state.domain}`}
        onChange={outputHandler}
      />
      <br />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Hoji />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
