import React from "react";
import { render } from "react-dom";
import App from "./component/App";
import DarkModeProvider from "./store/DarkMode/DarkMode.provider";

render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
