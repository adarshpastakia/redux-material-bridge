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

var _reduxForm = require("redux-form");

var _material = require("../material");

require("./phonelib");

var _ReduxEmailInput = function _ReduxEmailInput(props) {
  return _react2["default"].createElement(_reduxForm.Field, _extends({ type: "email", component: _material.MuiTextField }, props, { normalize: function (value) {
      return value.toLowerCase();
    } }));
};
_ReduxEmailInput.muiName = "ReduxEmailInput";
var ReduxEmailInput = _ReduxEmailInput;

exports.ReduxEmailInput = ReduxEmailInput;
var testValue = function testValue(value) {
  return (value || "").length > 0 && !/^\+/.test(value + '') ? "+" + value : value;
};
var parser = function parser(value) {
  return PhoneLib.format(testValue(value), "", PhoneLib.FORMAT.FULL) || value;
};
var formatter = function formatter(value) {
  return PhoneLib.formatInput(testValue(value), "") || value;
};
var _ReduxPhoneInput = function _ReduxPhoneInput(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2["default"].createElement(_reduxForm.Field, _extends({ type: "tel", component: _material.MuiTextField }, props, { format: formatter, parse: parser, placeholder: PhoneLib.getExample('us', PhoneLib.FORMAT.FULL) }));
};
_ReduxPhoneInput.muiName = "ReduxPhoneInput";
var ReduxPhoneInput = _ReduxPhoneInput;
exports.ReduxPhoneInput = ReduxPhoneInput;