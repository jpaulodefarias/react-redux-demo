import createRootReducer from "./reducers";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import { routerMiddleware, LOCATION_CHANGE } from "connected-react-router";
import { persistStore, persistReducer, PERSIST, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage"

const middlewares = [];

const history = createBrowserHistory();

middlewares.push(
  routerMiddleware(history)
);

// Enable additional logging in development environment.
if (process.env.NODE_ENV === "development") {
  const blacklist = [
    LOCATION_CHANGE,
    PERSIST,
    REHYDRATE
  ];

  middlewares.push(
    createLogger({
      predicate: (getState, action) =>
        !blacklist.some(element => element === action.type)
    })
  );
}

const persistConfig = {
  key: "root",
  storage
  //whitelist: []
  //blacklist: []
};

const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

const persistor = persistStore(store);

export { store, history, persistor };