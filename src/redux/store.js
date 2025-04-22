import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
  loadData,
  loadArt,
  loadTexts,
  loadCatalog,
  loadNotes,
} from "./actions";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

console.log("Thunk:", thunk);
const middlewares = [thunk];
const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(loadData());
store.dispatch(loadArt());
store.dispatch(loadTexts());
store.dispatch(loadCatalog());
store.dispatch(loadNotes());

export default store;
