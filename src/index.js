import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {store, persistor} from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
