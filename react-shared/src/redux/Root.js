// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {Switch} from "react-router-dom";

import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import {routerReducer as routing} from "react-router-redux";

import {ConnectedRouter, routerMiddleware} from "react-router-redux";

import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";

import "../shared/Root.css";

export const ReduxRoot = (({
  reducers = {},
  children
}) => {
  const history = createHistory();
  const store = createStore(combineReducers(Object.assign(reducers, {form, routing})), applyMiddleware(thunk), applyMiddleware(routerMiddleware(history)));

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {children}
      </ConnectedRouter>
    </Provider>
  )
});
ReduxRoot.propTypes = {
  reducers: PropTypes.object
}

// Router Switch
export const ReduxSwitch = connect((state) => {
  return {location: state.routing.location};
})(Switch);
