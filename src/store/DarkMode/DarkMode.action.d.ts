import { DarkModeType } from "./DarkMode.action-type";

interface IDarkMode {
  type: DarkModeType.SET_DARK_MODE;
}

export type DarkModeAction = IDarkMode;
