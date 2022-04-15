import React, { ReactNode, useReducer, Reducer } from "react";
import { DarkModeAction } from "./DarkMode.action";
import DarkModeInitialState from "./DarkMode.initial-state";
import IDarkModeInitialState from "./DarkMode.initial-state.d";
import DarkModeReducer from "./DarkMode.reducer";
import { DarkModeContext } from "./DarkMode.context-creator";
import { DarkModeType } from "./DarkMode.action-type";
import PropTypes from "prop-types";

// Provider component
const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<
    Reducer<IDarkModeInitialState, DarkModeAction>
  >(DarkModeReducer, DarkModeInitialState);

  const setDarkMode = (): void => {
    dispatch({
      type: DarkModeType.SET_DARK_MODE,
    });
  };

  return (
    <DarkModeContext.Provider
      value={{
        darkMode: state.darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.node,
};

DarkModeProvider.defaultTypes = {
  children: null,
};

export default DarkModeProvider;
