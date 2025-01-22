import React from "react";
import { Trecord } from "../types";

function Results({
  record,
  datalist,
  setOpen,
}: {
  record: string | null;
  datalist: Trecord[];
  setOpen: (open: boolean) => void;
  open?: boolean;
}) {
  if (record && datalist) {
    const listRecord = datalist.filter((item: Trecord) => {
      return item.Nome_Gioco === record;
    });

    return (
      <div className="modal">
        <div className="close" onClick={() => setOpen(false)}>
          {" "}
          &lt;BACK
        </div>
        <h2>{listRecord[0].Nome_Gioco}</h2>
        <ul className="metadati">
          <li>
            <span>anno:</span> {listRecord[0].Anno}
          </li>
          <li>
            <span>genere:</span> {listRecord[0].Genere}
          </li>
          <li>
            <span>piattaforma:</span> {listRecord[0].Piattaforma}
          </li>
          <li>
            <span>sviluppo:</span> {listRecord[0].Sviluppo}
          </li>
          <li>
            <span>pubblicazione:</span> {listRecord[0].Pubblicazione}
          </li>
        </ul>
        <hr />
        <h3>Episodi:</h3>
        <ul className="episodi">
          {listRecord.map((item: Trecord, index) => {
            if (item.Link) {
              return (
                <li key={index}>
                  <a href={item.Link} target="_blank">
                    <div className="linkArrow">-&gt;</div> stagione:
                    {item.Stagione} <br /> episodio:
                    {item.Episodio}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  } else {
    return <div>nessun dato</div>;
  }
}

export default Results;
