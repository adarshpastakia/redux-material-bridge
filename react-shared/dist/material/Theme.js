// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _materialUiStylesCreatePalette = require("material-ui/styles/createPalette");

var _materialUiStylesCreatePalette2 = _interopRequireDefault(_materialUiStylesCreatePalette);

var _materialUiStylesCreateTypography = require("material-ui/styles/createTypography");

var _materialUiStylesCreateTypography2 = _interopRequireDefault(_materialUiStylesCreateTypography);

var _materialUiStyles = require("material-ui/styles");

var _materialUiColors = require("material-ui/colors");

var _index = require("../index");

/* eslint-disable flowtype/require-valid-file-annotation */

var _jss = require('jss');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _reactJssLib = require('react-jss/lib');

// Configure JSS
var jss = (0, _jss.create)((0, _jssPresetDefault2["default"])());
jss.options.createGenerateClassName = _materialUiStyles.createGenerateClassName;

var context = {
  jss: jss,
  // This is needed in order to deduplicate the injection of CSS in the page.
  sheetsManager: new Map(),
  // This is needed in order to inject the critical CSS.
  sheetsRegistry: new _reactJssLib.SheetsRegistry()
};
/*****       *****/

var MuiTheme = (function (_Component) {
  _inherits(MuiTheme, _Component);

  function MuiTheme() {
    _classCallCheck(this, MuiTheme);

    _get(Object.getPrototypeOf(MuiTheme.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(MuiTheme, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var _props$type = _props.type;
      var type = _props$type === undefined ? "light" : _props$type;
      var _props$font = _props.font;
      var font = _props$font === undefined ? "Roboto" : _props$font;
      var _props$primary = _props.primary;
      var primary = _props$primary === undefined ? _materialUiColors.blue : _props$primary;
      var _props$secondary = _props.secondary;
      var secondary = _props$secondary === undefined ? _materialUiColors.pink : _props$secondary;
      var _props$grey = _props.grey;
      var grey = _props$grey === undefined ? _materialUiColors.blueGrey : _props$grey;
      var children = _props.children;

      var palette = (0, _materialUiStylesCreatePalette2["default"])({ type: type, primary: primary, secondary: secondary, grey: grey });

      _index.logger.info("Palette", palette);

      var typography = (0, _materialUiStylesCreateTypography2["default"])(palette, {
        fontSize: 13,
        fontFamily: font + ", 'Roboto', 'Helevetica Neue', 'Segoe UI', Arial, sans-serif"
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
          secondary: palette.secondary[500],

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
        paddedH: {
          paddingLeft: 24,
          paddingRight: 24
        },
        paddedV: {
          paddingTop: 24,
          paddingBottom: 24
        },
        alignLeft: {
          textAlign: 'left'
        },
        alignCenter: {
          textAlign: 'center'
        },
        alignRight: {
          textAlign: 'right'
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

      _index.logger.info("MaterialTheme", theme);

      return _react2["default"].createElement(
        "div",
        { style: {
            minHeight: "100vh",
            color: palette.text.primary,
            backgroundColor: palette.background["default"]
          } },
        _react2["default"].createElement(
          _reactJssLib.JssProvider,
          { registry: context.sheetsRegistry },
          _react2["default"].createElement(
            _materialUiStyles.MuiThemeProvider,
            { theme: theme, sheetsManager: new Map() },
            children
          )
        )
      );
    }
  }]);

  return MuiTheme;
})(_react.Component);

exports["default"] = MuiTheme;
module.exports = exports["default"];