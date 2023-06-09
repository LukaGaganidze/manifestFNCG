import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import store from "./store/Index";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
