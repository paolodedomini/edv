import { createContext, useState } from "react";

type Tcontext = {
  theme: string;
  setTheme?: (theme: string) => void;
};
const context = createContext<Tcontext>({ theme: "light" });

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("light");

  const settings = { theme, setTheme };

  return <context.Provider value={settings}>{children}</context.Provider>;
}
