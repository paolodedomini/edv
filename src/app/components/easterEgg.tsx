import React from "react";
import Image from "next/image";

function EasterEgg() {
  return (
    <div className="easter">
      <Image src={"/ace.png"} width={640} height={480} alt="ace" />
    </div>
  );
}

export default EasterEgg;
