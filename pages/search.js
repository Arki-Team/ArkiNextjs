import Head from "next/head";
import ShowSearch from "../components/Search";
export default function Search(pops) {

  return (
    <>
      <Head>
        <title>My page</title>
      </Head>
      <main>
        <div style={{ height: "120vh" }}>
          <ShowSearch></ShowSearch>
        </div>
      </main>
    </>
  );
}


