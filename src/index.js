import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";

// Redux
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './reducers';
import { getPost } from "./actions/posts.actions";
import { getUser } from "./actions/users.actions";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

store.dispatch(getPost());
store.dispatch(getUser());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
