import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import * as Flex from "@twilio/flex-ui";
import thunk from 'redux-thunk';
import {
    applyMiddleware, compose, createStore, combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import appReducer from './mainReducer';

const mountNode = document.getElementById("root");


const rootReducer = combineReducers({
    app: appReducer(),
    flex: Flex.FlexReducer,
});

console.log(rootReducer);

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const customStore = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk),
        Flex.applyFlexMiddleware(),
    ),
);

window.onload = () => {
  const predefinedConfig = window.appConfig || {};

  const configuration = {
    ...predefinedConfig,
  };

  Flex
    .progress(mountNode)
    .provideLoginInfo(configuration, mountNode)
    .then(() => Flex.Manager.create(configuration, customStore))
    .then(manager => renderApp(manager))
    .catch(error => handleError(error));
};

function renderApp(manager) {
  ReactDOM.render(
    <Provider store={customStore}>
      <App manager={manager} />
    </Provider>,
    mountNode
  );
}

function handleError(error) {
  console.error("Failed to initialize Flex", error);
}

registerServiceWorker();
