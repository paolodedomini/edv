import Search from "./components/search";

export default async function Home() {
  try {
    const getData = await fetch(
      "https://raw.githubusercontent.com/paolodedomini/edvarchive-api/refs/heads/main/data.json"
    );
    const edvdata = await getData.json();

    if (!edvdata) {
      throw Error("non ci sono dati");
    }
    if (edvdata.data.length) {
      return (
        <div className={"page"}>
          <Search data={edvdata.data} />
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  } catch (error) {
    return <div>{(error as Error).message}</div>;
  }
}
