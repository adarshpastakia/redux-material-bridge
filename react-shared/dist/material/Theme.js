// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _materialUiStyles = require("material-ui/styles");

var _materialUiColors = require("material-ui/colors");

exports["default"] = function (_ref) {
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? "light" : _ref$type;
  var _ref$primary = _ref.primary;
  var primary = _ref$primary === undefined ? _materialUiColors.blue : _ref$primary;
  var _ref$accent = _ref.accent;
  var accent = _ref$accent === undefined ? _materialUiColors.pink : _ref$accent;
  var _ref$grey = _ref.grey;
  var grey = _ref$grey === undefined ? _materialUiColors.blueGrey : _ref$grey;
  var _ref$headerHeight = _ref.headerHeight;
  var headerHeight = _ref$headerHeight === undefined ? 64 : _ref$headerHeight;
  var children = _ref.children;

  var palette = (0, _materialUiStyles.createPalette)({ type: type, primary: primary, accent: accent, grey: grey });
  var typography = (0, _materialUiStyles.createTypography)(palette, {
    fontSize: 13,
    fontFamily: "'Roboto', 'Helevetica Neue', 'Segoe UI', Arial, sans-serif"
  });
  Object.assign(typography.headline, { fontSize: 22 });
  Object.assign(typography.title, { fontSize: 18 });
  Object.assign(typography.subheading, { fontSize: 15 });
  Object.assign(typography.body1, { fontSize: 13 });
  Object.assign(typography.body2, { fontSize: 13 });

  var theme = (0, _materialUiStyles.createMuiTheme)({
    type: type,
    direction: "ltr",
    colors: {
      primary: palette.primary[500],
      secondary: palette.accent[500],

      info: "#29B6F6",
      danger: "#E53935",
      success: "#43A047",
      warning: "#FFC107",

      white: "#FFFFFF",
      black: "#263238",

      grayLight: "#90A4AE",
      grayMedium: "#607D8B",
      grayDark: "#455A64",

      menuIcon: palette.primary[100],
      menuIconHover: palette.primary[800]
    },
    padded: {
      padding: 24
    },
    icon: {
      small: {
        width: 16,
        height: 16
      },
      medium: {
        width: 24,
        height: 24
      }
    },
    overrides: {
      MuiFormLabel: {
        focused: {
          color: palette.primary[500]
        }
      },
      MuiInput: {
        error: {
          '&:after': {
            height: 1
          },
          '&:hover:after': {
            height: 2
          },
          '&$focused:after': {
            height: 2
          }
        },
        focused: {
          '&:not($error):after': {
            backgroundColor: palette.primary[500]
          }
        },
        underline: {
          '&:hover:not($disabled):before': {
            height: 1
          }
        }
      },
      MuiAppBar: {
        root: {
          height: headerHeight,
          backgroundColor: palette.primary[500]
        }
      },
      MuiTable: {
        root: {
          border: "1px solid " + palette.text.lightDivider
        }
      },
      MuiCardHeader: {
        root: {
          minHeight: 32
        }
      },
      MuiTableRow: {
        head: {
          height: 48,
          backgroundColor: palette.primary[type === "dark" ? 900 : 50]
        },
        root: {
          backgroundColor: palette.background.paper
        }
      }
    },
    palette: palette,
    typography: typography
  });

  return _react2["default"].createElement(
    "div",
    { style: {
        minHeight: "100vh",
        color: palette.text.primary,
        backgroundColor: palette.background["default"]
      } },
    _react2["default"].createElement(
      _materialUiStyles.MuiThemeProvider,
      { theme: theme },
      children
    )
  );
};

module.exports = exports["default"];