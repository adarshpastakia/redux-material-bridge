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

var _reactRouterDom = require("react-router-dom");

// MaterialUI

var _materialUi = require("material-ui");

var _materialUiStyles = require('material-ui/styles');

var styleSheet = function styleSheet(theme) {
  return {
    link: {
      color: theme.palette.text.primary,
      textDecoration: 'none',
      '&.active > li': {
        boxShadow: "5px 0 0 0 " + theme.palette.accent['700'] + " inset"
      }
    },
    linkItem: {
      '&:focus': {
        color: theme.colors.white,
        background: theme.colors.secondary
      },
      '&:hover': {
        color: theme.colors.white,
        backgroundColor: theme.colors.secondary
      }
    },
    linkText: {
      minWidth: 240,
      color: 'inherit',
      fontWeight: theme.typography.fontWeightMedium
    },
    linkIndent: {
      '&:first-child': {
        paddingLeft: 24
      }
    },
    menuGroupTitle: {
      paddingBottom: 4,
      paddingTop: 12,
      lineHeight: 1
    },
    iconMenuItem: {
      height: 32,
      '&:focus': {
        color: theme.colors.white,
        background: theme.colors.secondary
      },
      '&:hover': {
        color: theme.colors.white,
        backgroundColor: theme.colors.secondary
      }
    },
    iconMenuItemText: {
      fontSize: 13,
      color: 'inherit'
    },
    iconMenuItemIcon: {
      color: 'inherit',
      width: 16,
      height: 16,
      marginRight: 0
    }
  };
};

// MenuLink
var _MenuLink = function _MenuLink(_ref) {
  var to = _ref.to;
  var title = _ref.title;
  var indent = _ref.indent;
  var classes = _ref.classes;

  var rest = _objectWithoutProperties(_ref, ["to", "title", "indent", "classes"]);

  return _react2["default"].createElement(
    _reactRouterDom.NavLink,
    _extends({ to: to }, rest, { className: classes.link, exact: true }),
    _react2["default"].createElement(
      _materialUi.ListItem,
      { button: true, color: "primary", dense: true, classes: {
          root: classes.linkItem
        } },
      _react2["default"].createElement(_materialUi.ListItemText, { inset: indent, primary: title, classes: {
          text: classes.linkText,
          inset: classes.linkIndent
        } })
    )
  );
};
_MenuLink.muiName = "MuiMenuLink";

_MenuLink.propTypes = {
  to: _propTypes.PropTypes.string.isRequired,
  title: _propTypes.PropTypes.string.isRequired,
  indent: _propTypes.PropTypes.bool
};

var MuiMenuLink = (0, _materialUiStyles.withStyles)(styleSheet)(_MenuLink);

exports.MuiMenuLink = MuiMenuLink;
// MenuGroup
var _MenuGroup = function _MenuGroup(_ref2) {
  var title = _ref2.title;
  var classes = _ref2.classes;
  var children = _ref2.children;

  var rest = _objectWithoutProperties(_ref2, ["title", "classes", "children"]);

  return _react2["default"].createElement(
    "div",
    null,
    _react2["default"].createElement(
      _materialUi.ListSubheader,
      { className: classes.menuGroupTitle },
      title
    ),
    _react2["default"].createElement(
      "div",
      null,
      children
    )
  );
};
_MenuGroup.muiName = "MuiMenuGroup";

_MenuGroup.propTypes = {
  title: _propTypes.PropTypes.string.isRequired
};

var MuiMenuGroup = (0, _materialUiStyles.withStyles)(styleSheet)(_MenuGroup);

exports.MuiMenuGroup = MuiMenuGroup;
// IconMenuItem
var _IconMenuItem = function _IconMenuItem(_ref3) {
  var title = _ref3.title;
  var icon = _ref3.icon;
  var dense = _ref3.dense;
  var classes = _ref3.classes;

  var rest = _objectWithoutProperties(_ref3, ["title", "icon", "dense", "classes"]);

  var textStyle = {
    text: classes.iconMenuItemText
  };
  return _react2["default"].createElement(
    _materialUi.MenuItem,
    _extends({}, rest, { className: classes.iconMenuItem }),
    _react2["default"].createElement(
      _materialUi.ListItemIcon,
      { className: classes.iconMenuItemIcon },
      icon
    ),
    _react2["default"].createElement(_materialUi.ListItemText, { classes: textStyle, primary: title })
  );
};
_IconMenuItem.muiName = "MuiIconMenuItem";

_IconMenuItem.propTypes = {
  icon: _propTypes.PropTypes.element.isRequired,
  title: _propTypes.PropTypes.string.isRequired
};

var MuiIconMenuItem = (0, _materialUiStyles.withStyles)(styleSheet)(_IconMenuItem);
exports.MuiIconMenuItem = MuiIconMenuItem;