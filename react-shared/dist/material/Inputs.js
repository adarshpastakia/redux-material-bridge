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

var _materialUiIconButton = require("material-ui/IconButton");

var _materialUiIconButton2 = _interopRequireDefault(_materialUiIconButton);

var _materialUiIcons = require("material-ui-icons");

var _materialUiStyles = require('material-ui/styles');

var _materialUi = require("material-ui");

// Form
var _Form = function _Form(_ref) {
  var _ref$onFocusCycle = _ref.onFocusCycle;
  var onFocusCycle = _ref$onFocusCycle === undefined ? function () {
    return true;
  } : _ref$onFocusCycle;
  var children = _ref.children;

  var rest = _objectWithoutProperties(_ref, ["onFocusCycle", "children"]);

  return _react2["default"].createElement(
    "form",
    rest,
    children,
    _react2["default"].createElement("button", { type: "submit", onFocus: onFocusCycle })
  );
};
_Form.muiName = "MuiForm";
_Form.propTypes = {
  onFocusCycle: _propTypes.PropTypes.func
};
var MuiForm = _Form;

exports.MuiForm = MuiForm;
// TextField
var _TextField = function _TextField(_ref2) {
  var _ref2$id = _ref2.id;
  var id = _ref2$id === undefined ? "MuiControl" + new Date().getTime() : _ref2$id;
  var input = _ref2.input;
  var label = _ref2.label;
  var tabIdx = _ref2.tabIdx;
  var helperText = _ref2.helperText;
  var _ref2$meta = _ref2.meta;
  var touched = _ref2$meta.touched;
  var error = _ref2$meta.error;
  var inputRef = _ref2.inputRef;
  var _ref2$shrinkLabel = _ref2.shrinkLabel;
  var shrinkLabel = _ref2$shrinkLabel === undefined ? undefined : _ref2$shrinkLabel;
  var _ref2$required = _ref2.required;
  var required = _ref2$required === undefined ? false : _ref2$required;
  var _ref2$margin = _ref2.margin;
  var margin = _ref2$margin === undefined ? "dense" : _ref2$margin;

  var custom = _objectWithoutProperties(_ref2, ["id", "input", "label", "tabIdx", "helperText", "meta", "inputRef", "shrinkLabel", "required", "margin"]);

  return _react2["default"].createElement(_materialUi.TextField, _extends({ id: id, InputProps: {
      style: {
        marginTop: 16
      }
    }, InputLabelProps: {
      shrink: shrinkLabel
    }, required: required, margin: margin, error: !!(touched && error), helperText: touched && error || helperText, inputRef: inputRef, tabIndex: tabIdx, label: label, onChange: function (value) {
      return input.onChange(value);
    }, value: input.value }, custom));
};
_TextField.muiName = "MuiTextField";
_TextField.propTypes = {
  label: _propTypes.PropTypes.string,
  inputRef: _propTypes.PropTypes.func,
  tabIdx: _propTypes.PropTypes.number
};
var MuiTextField = _TextField;

exports.MuiTextField = MuiTextField;
// Select
var _SelectField = function _SelectField(_ref3) {
  var _ref3$id = _ref3.id;
  var id = _ref3$id === undefined ? "MuiControl" + new Date().getTime() : _ref3$id;
  var input = _ref3.input;
  var label = _ref3.label;
  var tabIdx = _ref3.tabIdx;
  var helperText = _ref3.helperText;
  var _ref3$meta = _ref3.meta;
  var touched = _ref3$meta.touched;
  var error = _ref3$meta.error;
  var inputRef = _ref3.inputRef;
  var _ref3$shrinkLabel = _ref3.shrinkLabel;
  var shrinkLabel = _ref3$shrinkLabel === undefined ? undefined : _ref3$shrinkLabel;
  var _ref3$required = _ref3.required;
  var required = _ref3$required === undefined ? false : _ref3$required;
  var _ref3$margin = _ref3.margin;
  var margin = _ref3$margin === undefined ? "dense" : _ref3$margin;
  var children = _ref3.children;

  var custom = _objectWithoutProperties(_ref3, ["id", "input", "label", "tabIdx", "helperText", "meta", "inputRef", "shrinkLabel", "required", "margin", "children"]);

  return _react2["default"].createElement(
    _materialUi.TextField,
    _extends({ select: true, id: id, InputProps: {
        style: {
          marginTop: 16
        }
      }, InputLabelProps: {
        shrink: shrinkLabel
      }, required: required, margin: margin, error: !!(touched && error), helperText: touched && error || helperText, inputRef: inputRef, tabIndex: tabIdx, label: label, onChange: function (event) {
        return input.onChange(event.target.value);
      }, value: input.value }, custom),
    children
  );
};
_SelectField.muiName = "MuiSelectField";
_SelectField.propTypes = {
  label: _propTypes.PropTypes.string,
  inputRef: _propTypes.PropTypes.func,
  tabIdx: _propTypes.PropTypes.number,
  options: _propTypes.PropTypes.array
};
var MuiSelectField = _SelectField;

exports.MuiSelectField = MuiSelectField;
// Checkbox
var _Checkbox = function _Checkbox(_ref4) {
  var input = _ref4.input;
  var label = _ref4.label;
  var tabIdx = _ref4.tabIdx;
  var meta = _ref4.meta;
  var inputRef = _ref4.inputRef;
  var value = _ref4.value;

  var custom = _objectWithoutProperties(_ref4, ["input", "label", "tabIdx", "meta", "inputRef", "value"]);

  return _react2["default"].createElement(_materialUi.FormControlLabel, { value: value, label: label, control: _react2["default"].createElement(_materialUi.Checkbox, _extends({ inputRef: inputRef, tabIndex: tabIdx, onChange: function (event, value) {
        return input.onChange(value);
      }, checked: input.checked }, custom)) });
};
_Checkbox.muiName = "MuiCheckbox";
_Checkbox.propTypes = {
  label: _propTypes.PropTypes.string.isRequired,
  inputRef: _propTypes.PropTypes.func,
  tabIdx: _propTypes.PropTypes.number
};
var MuiCheckbox = _Checkbox;

exports.MuiCheckbox = MuiCheckbox;
// Radio
var _Radio = function _Radio(_ref5) {
  var label = _ref5.label;
  var tabIdx = _ref5.tabIdx;
  var inputRef = _ref5.inputRef;
  var value = _ref5.value;

  var custom = _objectWithoutProperties(_ref5, ["label", "tabIdx", "inputRef", "value"]);

  return _react2["default"].createElement(_materialUi.FormControlLabel, { value: value, label: label, control: _react2["default"].createElement(_materialUi.Radio, _extends({ inputRef: inputRef }, custom)) });
};
_Radio.muiName = "MuiRadio";
_Radio.propTypes = {
  label: _propTypes.PropTypes.string.isRequired,
  inputRef: _propTypes.PropTypes.func,
  tabIdx: _propTypes.PropTypes.number
};
var MuiRadio = _Radio;

exports.MuiRadio = MuiRadio;
// RadioGroup
var _RadioGroup = function _RadioGroup(_ref6) {
  var name = _ref6.name;
  var label = _ref6.label;
  var input = _ref6.input;
  var meta = _ref6.meta;
  var _ref6$required = _ref6.required;
  var required = _ref6$required === undefined ? false : _ref6$required;
  var children = _ref6.children;

  var custom = _objectWithoutProperties(_ref6, ["name", "label", "input", "meta", "required", "children"]);

  return _react2["default"].createElement(
    _materialUi.FormControl,
    { required: required },
    _react2["default"].createElement(
      _materialUi.FormLabel,
      null,
      label
    ),
    _react2["default"].createElement(
      _materialUi.RadioGroup,
      _extends({ name: name, selectedValue: input.value }, input, custom, { onChange: function (event, value) {
          return input.onChange(value);
        } }),
      children
    )
  );
};
_RadioGroup.muiName = "MuiRadioGroup";
_RadioGroup.propTypes = {
  label: _propTypes.PropTypes.string.isRequired
};
var MuiRadioGroup = _RadioGroup;

exports.MuiRadioGroup = MuiRadioGroup;
// CustomTextField
var styleSheet = function styleSheet(theme) {
  return {
    muiInputFocused: {
      '& + $xInputIcon': {
        color: theme.palette.primary[500]
      }
    },
    muiInputError: {
      '& + $xInputIcon': {
        color: theme.palette.error[500]
      }
    },
    xInputIcon: {
      position: "absolute",
      top: 22,
      width: 20,
      height: 20,
      color: theme.palette.grey[500],
      '& > svg': {
        width: 20,
        height: 20
      }
    }
  };
};
var _MuiCustomTextField = function _MuiCustomTextField(_ref7) {
  var _ref7$id = _ref7.id;
  var id = _ref7$id === undefined ? "MuiControl" + new Date().getTime() : _ref7$id;
  var label = _ref7.label;
  var _ref7$margin = _ref7.margin;
  var margin = _ref7$margin === undefined ? "dense" : _ref7$margin;
  var _ref7$icon = _ref7.icon;
  var icon = _ref7$icon === undefined ? _react2["default"].createElement(_materialUiIcons.ModeEdit, null) : _ref7$icon;
  var clear = _ref7.clear;
  var classes = _ref7.classes;
  var shrinkLabel = _ref7.shrinkLabel;
  var _ref7$input = _ref7.input;
  var input = _ref7$input === undefined ? {} : _ref7$input;
  var _ref7$meta = _ref7.meta;
  var meta = _ref7$meta === undefined ? {} : _ref7$meta;
  var _ref7$size = _ref7.size;
  var size = _ref7$size === undefined ? 20 : _ref7$size;
  var _ref7$handleChange = _ref7.handleChange;
  var handleChange = _ref7$handleChange === undefined ? function () {
    return true;
  } : _ref7$handleChange;
  var autoComplete = _ref7.autoComplete;
  var autoFocus = _ref7.autoFocus;
  var className = _ref7.className;
  var defaultValue = _ref7.defaultValue;
  var disabled = _ref7.disabled;
  var inputClassName = _ref7.inputClassName;
  var InputClassName = _ref7.InputClassName;
  var _ref7$InputProps = _ref7.InputProps;
  var InputProps = _ref7$InputProps === undefined ? {} : _ref7$InputProps;
  var _ref7$inputProps = _ref7.inputProps;
  var inputProps = _ref7$inputProps === undefined ? {} : _ref7$inputProps;
  var inputRef = _ref7.inputRef;
  var labelClassName = _ref7.labelClassName;
  var InputLabelProps = _ref7.InputLabelProps;
  var helperText = _ref7.helperText;
  var helperTextClassName = _ref7.helperTextClassName;
  var FormHelperTextProps = _ref7.FormHelperTextProps;
  var fullWidth = _ref7.fullWidth;
  var required = _ref7.required;
  var type = _ref7.type;
  var multiline = _ref7.multiline;
  var name = _ref7.name;
  var placeholder = _ref7.placeholder;
  var rootRef = _ref7.rootRef;
  var rows = _ref7.rows;
  var rowsMax = _ref7.rowsMax;
  var _ref7$value = _ref7.value;
  var value = _ref7$value === undefined ? '' : _ref7$value;

  var other = _objectWithoutProperties(_ref7, ["id", "label", "margin", "icon", "clear", "classes", "shrinkLabel", "input", "meta", "size", "handleChange", "autoComplete", "autoFocus", "className", "defaultValue", "disabled", "inputClassName", "InputClassName", "InputProps", "inputProps", "inputRef", "labelClassName", "InputLabelProps", "helperText", "helperTextClassName", "FormHelperTextProps", "fullWidth", "required", "type", "multiline", "name", "placeholder", "rootRef", "rows", "rowsMax", "value"]);

  if (shrinkLabel) other.shrink = true;

  if (input.onChange) handleChange = function (v) {
    return input.onChange(v);
  };

  var clearInput = function clearInput(event) {
    handleChange('');
    event.currentTarget.parentElement.querySelector('input').focus();
  };

  // let inputProps = inputPropsProp;
  inputProps.size = size;
  if (inputClassName) {
    inputProps.className = inputClassName;
  }

  return _react2["default"].createElement(
    _materialUi.FormControl,
    _extends({ fullWidth: fullWidth, ref: rootRef, className: className, error: !!(meta.touched && meta.error), required: required, margin: margin }, other),
    label && _react2["default"].createElement(
      _materialUi.InputLabel,
      _extends({ style: {
          marginLeft: 24
        }, htmlFor: id, className: labelClassName }, InputLabelProps),
      label
    ),
    _react2["default"].createElement(_materialUi.Input, _extends({ id: id, inputProps: inputProps, inputRef: inputRef, placeholder: placeholder, classes: {
        focused: classes.muiInputFocused,
        error: classes.muiInputError
      }, onChange: function (e) {
        return handleChange(e.currentTarget.value);
      }, style: {
        marginLeft: 24,
        paddingRight: clear ? 22 : 0
      }, autoComplete: autoComplete, autoFocus: autoFocus, className: InputClassName, defaultValue: defaultValue, disabled: disabled, multiline: multiline, name: name, rows: rows, rowsMax: rowsMax, type: type, value: input.value || value, id: id }, InputProps)),
    _react2["default"].createElement(
      "div",
      { className: classes.xInputIcon },
      icon
    ),
    clear && value && _react2["default"].createElement(
      _materialUiIconButton2["default"],
      { onClick: function (event) {
          return clearInput(event);
        }, style: {
          position: "absolute",
          width: 24,
          height: 24,
          top: 20,
          right: 0
        } },
      _react2["default"].createElement(_materialUiIcons.Clear, { style: {
          width: 16,
          height: 16
        } })
    ),
    (meta.touched && meta.error || helperText) && _react2["default"].createElement(
      _materialUi.FormHelperText,
      _extends({ className: helperTextClassName }, FormHelperTextProps, { style: {
          marginLeft: 24
        } }),
      meta.touched && meta.error || helperText
    )
  );
};
_MuiCustomTextField.muiName = "MuiCustomTextField";
_MuiCustomTextField.propTypes = {
  id: _propTypes.PropTypes.string,
  value: _propTypes.PropTypes.string,
  label: _propTypes.PropTypes.string.isRequired,
  icon: _propTypes.PropTypes.element,
  size: _propTypes.PropTypes.number,
  helperText: _propTypes.PropTypes.string,
  shrinkLabel: _propTypes.PropTypes.bool,
  handleChange: _propTypes.PropTypes.func
};
var MuiCustomTextField = (0, _materialUiStyles.withStyles)(styleSheet)(_MuiCustomTextField);
exports.MuiCustomTextField = MuiCustomTextField;