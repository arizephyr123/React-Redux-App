import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//dependecies added: redux, react-redux, redux-thunk
import { createStore, applyMiddleware } from "redux";

//import reducer
import rootReducer from "./reducer";

//import Provider then wrap App below and pass in store
import { Provider } from "react-redux";

//create store, pass in rootReducer and applyMiddleware
// next create reducer.
const store = createStore(rootReducer, applyMiddleware);

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
