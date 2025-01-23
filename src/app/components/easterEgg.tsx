import React from "react";
import Image from "next/image";
import { easterEgg } from "../utility/utility";
function EasterEgg({ word }: { word: string | null }) {
  const easter = easterEgg(word);
  if (easter) {
    return (
      <div className="easter">
        <Image src={"/" + easter} width={640} height={480} alt={easter} />
      </div>
    );
  }
}

export default EasterEgg;
