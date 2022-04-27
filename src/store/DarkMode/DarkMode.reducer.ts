import { DarkModeType } from "./DarkMode.action-type";
import IDarkModeInitialState from "./DarkMode.initial-state.d";
import type { DarkModeAction } from "./DarkMode.action.d";
import DarkModeInitialState from "./DarkMode.initial-state";

const DarkModeReducer = (
  state = DarkModeInitialState,
  action: DarkModeAction
): IDarkModeInitialState => {
  switch (action.type) {
    case DarkModeType.SET_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export type DarkModeState = typeof DarkModeInitialState;

export default DarkModeReducer;
