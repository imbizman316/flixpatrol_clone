import { createContext } from "react";

export const GlobalContext = createContext(null);

export function GlobalState({ children }) {
  <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}
