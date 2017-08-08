// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj["default"]; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _Root = require("./Root");

_defaults(exports, _interopExportWildcard(_Root, _defaults));

var _Inputs = require("./Inputs");

_defaults(exports, _interopExportWildcard(_Inputs, _defaults));