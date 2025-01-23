import { Trecord } from "../types";
export function filterString(data: Trecord[], search: string, filter: string) {
  const result = data.filter((item: Trecord) => {
    const str = item[filter as keyof Trecord]?.toString();
    return str.toLowerCase().includes(search.toLowerCase());
  });
  return result;
}

export function filterAnno(data: Trecord[], search: string, filter: string) {
  const result = data.filter((item: Trecord) => {
    const str = item[filter as keyof Trecord];
    return str === Number(search);
  });
  return result;
}
export function filterPiattaforma(
  data: Trecord[],
  search: string,
  filter: string
) {
  const result = data.filter((item: Trecord) => {
    const str = item[filter as keyof Trecord];
    if (typeof str === "string") {
      const arrayFromStr = str.split(",");
      return arrayFromStr.some((item) =>
        item.trim().toLowerCase().includes(search.toLowerCase())
      );
    }
  });
  return result;
}

export function datiUnici(dati: Trecord[], risultatiUnici: Trecord[]) {
  dati.forEach((item: Trecord) => {
    if (
      !risultatiUnici.some(
        (uniqueItem: Trecord) => uniqueItem.Nome_Gioco === item.Nome_Gioco
      )
    ) {
      risultatiUnici.push(item);
    }
  });
}

export function easterEgg(word: string | null) {
  switch (word) {
    case "namaste":
      return "NAMASTE'";
    default:
      return null;
  }
}
