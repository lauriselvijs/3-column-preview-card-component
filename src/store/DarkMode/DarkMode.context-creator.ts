import { createContext, useContext } from "react";
import { IDarkModeCreateContext } from "./DarkMode.context-creator.d";

export const DarkModeContext = createContext<
  IDarkModeCreateContext | undefined
>(undefined);

export const useDarkModeContext = () => {
  const darkModeContext = useContext(DarkModeContext);
  if (!darkModeContext) {
    throw Error(
      "useDarkModeContext must be used inside DarkModeContext.Provider"
    );
  }
  return darkModeContext;
};
