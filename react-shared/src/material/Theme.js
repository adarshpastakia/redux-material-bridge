// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {MuiThemeProvider, createMuiTheme, createPalette, createTypography} from "material-ui/styles";
import {blue, pink, blueGrey} from "material-ui/colors";

export default(({
  type = "light",
  font = "Roboto",
  primary = blue,
  accent = pink,
  grey = blueGrey,
  children
}) => {
  const palette = createPalette({type, primary, accent, grey});
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
    paddedH: {
      paddingLeft: 24,
      paddingRight: 24
    },
    paddedV: {
      paddingTop: 24,
      paddingBottom: 24
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

  return (
    <div style={{
      minHeight: "100vh",
      color: palette.text.primary,
      backgroundColor: palette.background.default
    }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </div>
  )
});
