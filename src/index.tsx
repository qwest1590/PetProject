import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const store = configureStore({ reducer: rootReducer, devTools: true });
export type RootState = ReturnType<typeof store.getState>;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
