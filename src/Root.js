import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import { store, history, persistor } from "./store";
import App from "./App";

const Root = () =>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>;

export default Root;