import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.scss";

import React from "react";
import ReactDOM from "react-dom";
import reducer from "./redux/reducers/posts";
import { createStore, applyMiddleware } from  "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

import App from "./components/App.jsx";

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
