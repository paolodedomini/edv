import { Press_Start_2P, Flamenco } from "next/font/google";
import Search from "./components/search";

const main = Press_Start_2P({ weight: "400", subsets: ["latin"] });

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
          <main className={`${"main"} ${main.className}`}>
            <div>
              <a href={"/"}>
                <h1>
                  <span>****</span> EDV <span>-</span> PUBLIC ARCHIVE{" "}
                  <span>-</span> V1 <span>****</span>
                </h1>
              </a>
              <h3 className="quote">(64k of NAMASTE&apos;)</h3>
            </div>

            <Search data={edvdata.data} />
          </main>
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  } catch (error) {
    return <div>{(error as Error).message}</div>;
  }
}
