import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./components/ThemeContext/ThemeContext";
import store from "./components/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
