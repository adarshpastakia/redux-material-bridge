// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj["default"]; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequire(obj) { return obj && obj.__esModule ? obj["default"] : obj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Theme = require("./Theme");

exports.MuiTheme = _interopRequire(_Theme);

var _AppHeader = require("./AppHeader");

exports.MuiAppHeader = _interopRequire(_AppHeader);

var _StickySection = require("./StickySection");

exports.MuiStickySection = _interopRequire(_StickySection);

var _MenuLink = require("./MenuLink");

_defaults(exports, _interopExportWildcard(_MenuLink, _defaults));

var _Inputs = require("./Inputs");

_defaults(exports, _interopExportWildcard(_Inputs, _defaults));

var MuiRootContainer = function MuiRootContainer(_ref) {
  var className = _ref.className;
  var children = _ref.children;
  var _ref$withFooter = _ref.withFooter;
  var withFooter = _ref$withFooter === undefined ? false : _ref$withFooter;

  var props = _objectWithoutProperties(_ref, ["className", "children", "withFooter"]);

  return _react2["default"].createElement(
    "div",
    _extends({ className: "react-root-container " + className + " " + (withFooter ? 'with-footer' : '') }, props),
    children
  );
};

exports.MuiRootContainer = MuiRootContainer;
var MuiAppContainer = function MuiAppContainer(_ref2) {
  var className = _ref2.className;
  var children = _ref2.children;

  var props = _objectWithoutProperties(_ref2, ["className", "children"]);

  return _react2["default"].createElement(
    "div",
    _extends({ className: "react-app-container " + className }, props),
    children
  );
};
exports.MuiAppContainer = MuiAppContainer;