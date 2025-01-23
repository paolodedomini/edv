"use client";
import { Press_Start_2P, Orbitron } from "next/font/google";
import React, { useState } from "react";
const main = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const dark = Orbitron({ weight: "400", subsets: ["latin"] });
// Adjust the import path as necessary

function ThemeMain({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("light");
  return (
    <body className={`blur ${theme}`}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      <div className="scanlines"></div>
      <main
        className={`${"main"} ${
          theme === "light" ? main.className : dark.className
        }`}
      >
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
    </body>
  );
}

export default ThemeMain;
