"use client";
import React, { useState, useEffect } from "react";
import { Trecord } from "../types";
import Results from "./results";
import Filters from "./filter";
import EasterEgg from "./easterEgg";
import {
  filterString,
  filterAnno,
  filterPiattaforma,
  datiUnici,
  easterEgg,
} from "../utility/utility";
import NotFound from "./notFound";

function Search({ data }: { data: Trecord[] }) {
  const [search, setSearch] = useState<string | null>(null);
  const [submit, setSubmit] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<Trecord[]>([]);
  const [singleRecord, setSingleRecord] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("Nome_Gioco");

  useEffect(() => {
    setFilteredData([]);
    if (search) {
      const risultatiUnici: Trecord[] = [];
      if (filter === "Nome_Gioco" || filter === "Sviluppo") {
        //filtra i dati in base alla stringa di ricerca
        const filtered = filterString(data, search, filter);
        //crea un array con risultati non ripetuti
        datiUnici(filtered, risultatiUnici);
        // setta i risultati
        setFilteredData(risultatiUnici);
      } else if (filter === "Anno") {
        const filtered = filterAnno(data, search, filter);
        console.log("anno", filtered);
        datiUnici(filtered, risultatiUnici);
        setFilteredData(risultatiUnici);
      } else if (filter === "Piattaforma") {
        const filtered = filterPiattaforma(data, search, filter);
        datiUnici(filtered, risultatiUnici);
        setFilteredData(risultatiUnici);
      }

      setSearch(null);
    }
  }, [submit, filter]);
  function getData(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  function setSubmitSearch(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit", search?.toLowerCase());
    setSubmit(search?.toLowerCase() || null);
    setOpen(false);
  }
  function setDataAndOpenModal(record: string) {
    setSingleRecord(record);
    setOpen(true);
  }

  if (data) {
    return (
      <div className="result">
        <form onSubmit={setSubmitSearch}>
          <input
            type="text"
            value={search || ""}
            placeholder="Search..."
            onChange={getData}
          />
          <button type="submit"> -&gt;</button>
          <Filters
            filter={filter}
            setFilter={setFilter}
            setSubmit={setSubmit}
          />
        </form>
        {submit && <div className="current">Hai cercato:{submit}</div>}

        {!open && submit && (
          <ul className="list">
            {filteredData?.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setDataAndOpenModal(item.Nome_Gioco)}
                >
                  {item.Nome_Gioco}
                </li>
              );
            })}
          </ul>
        )}
        {easterEgg(submit) === null && filteredData.length === 0 && submit && (
          <NotFound />
        )}
        {easterEgg(submit) !== null && <EasterEgg />}
        {open && easterEgg(submit) === null && (
          <Results
            record={singleRecord}
            datalist={data}
            setOpen={setOpen}
            open={open}
          />
        )}
      </div>
    );
  }
}

export default Search;
