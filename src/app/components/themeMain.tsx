import React from "react";

function ThemeMain({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${"main"} ${main.className}`}>
      <div>
        <a href={"/"}>
          <h1>
            <span>****</span> EDV <span>-</span> PUBLIC ARCHIVE <span>-</span>{" "}
            V1 <span>****</span>
          </h1>
        </a>
        <h3 className="quote">(64k of NAMASTE&apos;)</h3>
      </div>
      {children}
    </main>
  );
}

export default ThemeMain;
