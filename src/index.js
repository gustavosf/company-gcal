import React from "react";
import ReactDOM from "react-dom";

import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import reducer from "./Redux/Reducers";
import rootSaga from "./Redux/Sagas";

import App from "./App";

import * as serviceWorker from "./serviceWorker";
import "./index.css";

// Configure redux-saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// Render Application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
