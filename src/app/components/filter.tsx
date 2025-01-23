import React from "react";

function Filters({
  filter,
  setFilter,
  setSubmit,
}: {
  filter: string;
  setFilter: (filter: string) => void;
  setSubmit: (submit: string | null) => void;
}) {
  return (
    <div className="filter">
      <ul>
        <li
          onClick={() => {
            setFilter("Nome_Gioco");
            setSubmit(null);
          }}
          className={`${filter === "Nome_Gioco" ? "active" : ""}`}
        >
          nome
        </li>
        <li
          onClick={() => {
            setFilter("Genere");
            setSubmit(null);
          }}
          className={`${filter === "Genere" ? "active" : ""}`}
        >
          genere
        </li>
        <li
          onClick={() => {
            setFilter("Anno");
            setSubmit(null);
          }}
          className={`${filter === "Anno" ? "active" : ""}`}
        >
          anno
        </li>
        <li
          onClick={() => {
            setFilter("Piattaforma");
            setSubmit(null);
          }}
          className={`${filter === "Piattaforma" ? "active" : ""}`}
        >
          piattaforma
        </li>
        <li
          onClick={() => {
            setFilter("Sviluppo");
            setSubmit(null);
          }}
          className={`${filter === "Sviluppo" ? "active" : ""}`}
        >
          sviluppatore
        </li>
      </ul>
      {filter === "Piattaforma" && (
        <div className="legenda">
          (AMI, DOS, 3DO, AST, AII, MAC, SMD, WIN, SNES, JAG, MOB, AND, PS3,
          PS4, PSV, XB1, 3DS, NWU, NSW, ARC, NEO, SDC, N64, GBA, GBC, GBI,
          GBI...)
        </div>
      )}
    </div>
  );
}

export default Filters;
