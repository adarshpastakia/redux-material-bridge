// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reactRouterDom = require("react-router-dom");

var _reduxForm = require("redux-form");

var _reactRouterRedux = require("react-router-redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _historyCreateBrowserHistory = require("history/createBrowserHistory");

var _historyCreateBrowserHistory2 = _interopRequireDefault(_historyCreateBrowserHistory);

require("../shared/Root.css");

var ReduxRoot = function ReduxRoot(_ref) {
  var _ref$reducers = _ref.reducers;
  var reducers = _ref$reducers === undefined ? {} : _ref$reducers;
  var _ref$basename = _ref.basename;
  var basename = _ref$basename === undefined ? "/" : _ref$basename;
  var children = _ref.children;

  var history = (0, _historyCreateBrowserHistory2["default"])({ basename: basename });
  var store = (0, _redux.createStore)((0, _redux.combineReducers)(Object.assign(reducers, { form: _reduxForm.reducer, routing: _reactRouterRedux.routerReducer })), (0, _redux.applyMiddleware)(_reduxThunk2["default"]), (0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(history)));

  return _react2["default"].createElement(
    _reactRedux.Provider,
    { store: store },
    _react2["default"].createElement(
      _reactRouterRedux.ConnectedRouter,
      { history: history },
      children
    )
  );
};
exports.ReduxRoot = ReduxRoot;
ReduxRoot.propTypes = {
  reducers: _propTypes.PropTypes.object
};

// Router Switch
var ReduxSwitch = (0, _reactRedux.connect)(function (state) {
  return { location: state.routing.location };
})(_reactRouterDom.Switch);
exports.ReduxSwitch = ReduxSwitch;