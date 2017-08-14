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

var _materialUi = require("material-ui");

var _materialUiIcons = require("material-ui-icons");

var _materialUiStyles = require('material-ui/styles');

var styleSheet = (0, _materialUiStyles.createStyleSheet)(function (theme) {
  return {
    headerToolbar: {
      padding: 0,
      minHeight: 48
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 400
    },
    headerSubtitle: {
      fontSize: 12,
      fontWeight: 400
    },
    menuIcon: {
      color: theme.colors.menuIcon,
      transition: 'color .5s',
      '&:hover': {
        color: theme.colors.menuIconHover
      }
    }
  };
});

var _AppHeader = function _AppHeader(_ref) {
  var title = _ref.title;
  var subtitle = _ref.subtitle;
  var showMenuIcon = _ref.showMenuIcon;
  var children = _ref.children;
  var classes = _ref.classes;
  var openMenu = _ref.openMenu;
  var _ref$height = _ref.height;
  var height = _ref$height === undefined ? 64 : _ref$height;

  var rest = _objectWithoutProperties(_ref, ["title", "subtitle", "showMenuIcon", "children", "classes", "openMenu", "height"]);

  return _react2["default"].createElement(
    _materialUi.AppBar,
    _extends({ position: "fixed" }, rest, { style: {
        height: height
      } }),
    _react2["default"].createElement(
      _materialUi.Toolbar,
      { className: classes.headerToolbar, disableGutters: true },
      showMenuIcon === true && _react2["default"].createElement(
        _materialUi.IconButton,
        { className: classes.menuIcon, onClick: openMenu },
        _react2["default"].createElement(_materialUiIcons.Menu, null)
      ),
      _react2["default"].createElement(
        _reactRouterDom.NavLink,
        { to: "/" },
        _react2["default"].createElement(
          "div",
          { className: classes.headerTitle },
          title
        ),
        subtitle && _react2["default"].createElement(
          _materialUi.Hidden,
          { smDown: true },
          _react2["default"].createElement(
            "div",
            { className: classes.headerSubtitle },
            subtitle
          )
        )
      ),
      _react2["default"].createElement(_materialUi.Grid, { item: true, xs: true }),
      " ",
      children
    )
  );
};
_AppHeader.muiName = "AppHeader";

_AppHeader.propTypes = {
  title: _propTypes.PropTypes.string.isRequired,
  subtitle: _propTypes.PropTypes.string,
  showMenuIcon: _propTypes.PropTypes.bool,
  openMenu: _propTypes.PropTypes.func
};
_AppHeader.defaultProps = {
  showMenuIcon: true,
  openMenu: function openMenu() {
    return void 0;
  }
};

exports["default"] = (0, _materialUiStyles.withStyles)(styleSheet)(_AppHeader);
module.exports = exports["default"];