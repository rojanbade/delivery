import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redux/reducers";
import { watchFetchData } from "./redux/sagas";

import App from "./App";
// import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from "react-router";
import Counter from "./component/counter";
import MovieList from "./component/movie";
import MovieDetail from "./component/movie/detail";
import Posts from "./component/posts";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route index path="/" element={<App />} />
          <Route path="/movie" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
