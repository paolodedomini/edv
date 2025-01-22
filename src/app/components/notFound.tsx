import React from "react";
import Image from "next/image";
function NotFound() {
  return (
    <div className="notFound">
      <h2>...Not Found... :(</h2>
      <Image src="/c64-piensa.gif" alt="404" width={300} height={300} />
    </div>
  );
}

export default NotFound;
