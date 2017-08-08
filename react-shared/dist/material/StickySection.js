// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _materialUiStyles = require('material-ui/styles');

var styleSheet = (0, _materialUiStyles.createStyleSheet)(function (theme) {
  return {
    sticky: {
      backgroundColor: theme.palette.background["default"]
    }
  };
});

var _StickySection = function _StickySection(_ref) {
  var _ref$top = _ref.top;
  var top = _ref$top === undefined ? 64 : _ref$top;
  var classes = _ref.classes;
  var children = _ref.children;

  var rest = _objectWithoutProperties(_ref, ["top", "classes", "children"]);

  return _react2["default"].createElement(
    "div",
    _extends({ className: "sticky-section " + classes.sticky, style: {
        top: top
      } }, rest),
    children
  );
};
_StickySection.muiName = "StickySection";

_StickySection.propTypes = {
  top: _propTypes.PropTypes.number
};

exports["default"] = (0, _materialUiStyles.withStyles)(styleSheet)(_StickySection);
module.exports = exports["default"];