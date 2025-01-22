"use client";
import React, { useState, useEffect } from "react";
import { Trecord } from "../types";
import Results from "./results";
import Filters from "./filter";
import {
  filterString,
  filterAnno,
  filterPiattaforma,
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
        //crea un array con risultati non ripetuti
        filterString(data, search, filter).forEach((item: Trecord) => {
          if (
            !risultatiUnici.some(
              (uniqueItem) => uniqueItem.Nome_Gioco === item.Nome_Gioco
            )
          ) {
            risultatiUnici.push(item);
          }
        });

        setFilteredData(risultatiUnici);
      } else if (filter === "Anno") {
        const filtered = filterAnno(data, search, filter);
        console.log("anno", filtered);
        filtered.forEach((item: Trecord) => {
          if (
            !risultatiUnici.some(
              (uniqueItem) => uniqueItem.Nome_Gioco === item.Nome_Gioco
            )
          ) {
            risultatiUnici.push(item);
          }
        });

        setFilteredData(risultatiUnici);
      } else if (filter === "Piattaforma") {
        const filtered = filterPiattaforma(data, search, filter);

        filtered.forEach((item: Trecord) => {
          if (
            !risultatiUnici.some(
              (uniqueItem) => uniqueItem.Nome_Gioco === item.Nome_Gioco
            )
          ) {
            risultatiUnici.push(item);
          }
        });

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
        {filteredData.length === 0 && submit && <NotFound />}
        {open && (
          <Results
            record={singleRecord}
            datalist={data}
            setOpen={setOpen}
            open={open}
          />
        )}
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
}

export default Search;
