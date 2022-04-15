import IDarkModeInitialState from "./DarkMode.initial-state.d";

export interface IDarkModeCreateContext {
  darkMode: IDarkModeInitialState["darkMode"];
  setDarkMode: () => void;
}
