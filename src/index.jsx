import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.scss";

import React from "react";
import ReactDOM from "react-dom";
import reducers from "./redux/reducers/reducers"
import { createStore, applyMiddleware, combineReducers } from  "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

import App from "./components/App.jsx";

const composeEnhancers =
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger, thunk),
);

const store = createStore(
    combineReducers(reducers),
    enhancer,
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
