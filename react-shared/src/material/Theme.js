// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React, {Component} from "react";
import createPalette from "material-ui/styles/createPalette";
import createTypography from "material-ui/styles/createTypography";
import {MuiThemeProvider, createMuiTheme, createGenerateClassName} from "material-ui/styles";
import {blue, pink, blueGrey} from "material-ui/colors";
import {logger} from "../index";

/* eslint-disable flowtype/require-valid-file-annotation */
import {create} from 'jss';
import preset from 'jss-preset-default';
import {JssProvider, SheetsRegistry} from 'react-jss/lib';

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

const context = {
  jss,
  // This is needed in order to deduplicate the injection of CSS in the page.
  sheetsManager: new Map(),
  // This is needed in order to inject the critical CSS.
  sheetsRegistry: new SheetsRegistry()
}
/*****       *****/

class MuiTheme extends Component {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles
        .parentNode
        .removeChild(jssStyles);
    }
  }
  render() {
    const {
      type = "light",
      font = "Roboto",
      primary = blue,
      secondary = pink,
      grey = blueGrey,
      children
    } = this.props;
    const palette = createPalette({type, primary, secondary, grey});

    logger.info("Palette", palette);

    const typography = createTypography(palette, {
      fontSize: 13,
      fontFamily: `${font}, 'Roboto', 'Helevetica Neue', 'Segoe UI', Arial, sans-serif`
    });
    Object.assign(typography.headline, {fontSize: 22});
    Object.assign(typography.title, {fontSize: 18});
    Object.assign(typography.subheading, {fontSize: 15});
    Object.assign(typography.body1, {fontSize: 13});
    Object.assign(typography.body2, {fontSize: 13});

    const theme = createMuiTheme({
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
            border: `1px solid ${palette.text.lightDivider}`
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
            backgroundColor: palette.primary[(type === "dark"
                ? 900
                : 50)]
          },
          root: {
            backgroundColor: palette.background.paper
          }
        }
      },
      palette,
      typography
    });

    logger.info("MaterialTheme", theme);

    return (
      <div style={{
        minHeight: "100vh",
        color: palette.text.primary,
        backgroundColor: palette.background.default
      }}>
        <JssProvider registry={context.sheetsRegistry}>
          <MuiThemeProvider theme={theme} sheetsManager={new Map()}>{children}</MuiThemeProvider>
        </JssProvider>
      </div>
    )
  }
}
export default MuiTheme;
