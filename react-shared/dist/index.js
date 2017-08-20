// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj["default"]; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

require("./shared/phonelib");

var _redux = require("./redux");

_defaults(exports, _interopExportWildcard(_redux, _defaults));

var _material = require("./material");

_defaults(exports, _interopExportWildcard(_material, _defaults));

var PhoneLib = window.PhoneLib;

exports.PhoneLib = PhoneLib;
var checkPhone = function checkPhone(v) {
  return PhoneLib.isValid(v);
};
exports.checkPhone = checkPhone;
var checkEmail = function checkEmail(v) {
  return (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v)
  );
};
exports.checkEmail = checkEmail;