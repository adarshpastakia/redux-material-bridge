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
    section: {
      '&$padded > .x-sticky-section': {
        margin: -24,
        marginBottom: 0
      },
      '&$paddedH > .x-sticky-section': {
        marginLeft: -24,
        marginRight: -24
      },
      '&$paddedV > .x-sticky-section': {
        marginTop: -24
      }
    },
    sticky: {
      zIndex: 5,
      backgroundColor: theme.palette.background["default"]
    },
    fieldset: {
      padding: '8px 12px',
      margin: '24px -12px',
      borderColor: theme.palette.text.lightDivider,
      '& > legend': {
        fontSize: 11,
        margin: '0 8px',
        color: theme.palette.text.secondary
      }
    },
    padded: theme.padded,
    paddedH: theme.paddedH,
    paddedV: theme.paddedV
  };
});

var _Section = function _Section(_ref) {
  var className = _ref.className;
  var classes = _ref.classes;
  var _ref$padding = _ref.padding;
  var padding = _ref$padding === undefined ? true : _ref$padding;
  var children = _ref.children;

  var props = _objectWithoutProperties(_ref, ["className", "classes", "padding", "children"]);

  var padClass = '';
  if (padding === true) padClass = classes.padded;else if (padding !== false) {
    if (~padding.indexOf("h")) padClass += " " + classes.paddedH;
    if (~padding.indexOf("v")) padClass += " " + classes.paddedV;
  }
  return _react2["default"].createElement(
    "div",
    _extends({ className: classes.section + " " + padClass + " " + className }, props),
    children
  );
};
exports._Section = _Section;
_Section.muiName = "StickySection";
_Section.propTypes = {};
var MuiSection = (0, _materialUiStyles.withStyles)(styleSheet)(_Section);

exports.MuiSection = MuiSection;
var _StickySection = function _StickySection(_ref2) {
  var _ref2$top = _ref2.top;
  var top = _ref2$top === undefined ? 64 : _ref2$top;
  var classes = _ref2.classes;
  var children = _ref2.children;
  var _ref2$padding = _ref2.padding;
  var padding = _ref2$padding === undefined ? false : _ref2$padding;

  var rest = _objectWithoutProperties(_ref2, ["top", "classes", "children", "padding"]);

  var padClass = '';
  if (padding === true) padClass = classes.padded;else if (padding !== false) {
    if (~padding.indexOf("h")) padClass += " " + classes.paddedH;
    if (~padding.indexOf("v")) padClass += " " + classes.paddedV;
  }
  return _react2["default"].createElement(
    "div",
    _extends({ className: "x-sticky-section " + padClass + " " + classes.sticky, style: {
        top: top
      } }, rest),
    children
  );
};
_StickySection.muiName = "StickySection";
_StickySection.propTypes = {
  top: _propTypes.PropTypes.number
};
var MuiStickySection = (0, _materialUiStyles.withStyles)(styleSheet)(_StickySection);

exports.MuiStickySection = MuiStickySection;
var _FieldSet = function _FieldSet(_ref3) {
  var legend = _ref3.legend;
  var classes = _ref3.classes;
  var _ref3$border = _ref3.border;
  var border = _ref3$border === undefined ? true : _ref3$border;
  var children = _ref3.children;

  var props = _objectWithoutProperties(_ref3, ["legend", "classes", "border", "children"]);

  return _react2["default"].createElement(
    "fieldset",
    { className: classes.fieldset },
    legend && _react2["default"].createElement(
      "legend",
      null,
      legend
    ),
    children
  );
};
_FieldSet.muiName = "FieldSet";
var MuiFieldSet = (0, _materialUiStyles.withStyles)(styleSheet)(_FieldSet);
exports.MuiFieldSet = MuiFieldSet;