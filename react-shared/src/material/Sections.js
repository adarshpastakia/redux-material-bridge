// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {PropTypes} from "prop-types";

import {withStyles, createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet(theme => ({
  section: {
    '&$padded > .x-sticky-section': {
      margin: -24,
      marginBottom: 0
    },
    '&$paddedH > .x-sticky-section': {
      marginLeft: -24,
      marginRight: -24
    },
    '&$paddedV > .x-sticky-section': {
      marginTop: -24
    }
  },
  sticky: {
    zIndex: 5,
    backgroundColor: theme.palette.background.default
  },
  fieldset: {
    padding: '8px 12px',
    margin: '24px -12px',
    borderColor: theme.palette.text.lightDivider,
    '& > legend': {
      fontSize: 11,
      margin: '0 8px',
      color: theme.palette.text.secondary
    }
  },
  padded: theme.padded,
  paddedH: theme.paddedH,
  paddedV: theme.paddedV
}));

export const _Section = ({
  className,
  classes,
  padding = true,
  children,
  ...props
}) => {
  let padClass = '';
  if (padding === true)
    padClass = classes.padded;
  else if (padding !== false) {
    if (~ padding.indexOf("h"))
      padClass += ` ${classes.paddedH}`;
    if (~ padding.indexOf("v"))
      padClass += ` ${classes.paddedV}`;
    }
  return (
    <div className={`${classes.section} ${padClass} ${className}`} {...props}>{children}</div>
  );
}
_Section.muiName = "StickySection";
_Section.propTypes = {}
export const MuiSection = withStyles(styleSheet)(_Section);

const _StickySection = ({
  top = 64,
  classes,
  children,
  padding = false,
  ...rest
}) => {
  let padClass = '';
  if (padding === true)
    padClass = classes.padded;
  else if (padding !== false) {
    if (~ padding.indexOf("h"))
      padClass += ` ${classes.paddedH}`;
    if (~ padding.indexOf("v"))
      padClass += ` ${classes.paddedV}`;
    }
  return (
    <div className={`x-sticky-section ${padClass} ${classes.sticky}`} style={{
      top
    }} {...rest}>
      {children}
    </div>
  );
}
_StickySection.muiName = "StickySection";
_StickySection.propTypes = {
  top: PropTypes.number
}
export const MuiStickySection = withStyles(styleSheet)(_StickySection);

const _FieldSet = ({
  legend,
  classes,
  border = true,
  children,
  ...props
}) => (
  <fieldset className={classes.fieldset}>
    {legend && (
      <legend>{legend}</legend>
    )}
    {children}
  </fieldset>
)
_FieldSet.muiName = "FieldSet";
export const MuiFieldSet = withStyles(styleSheet)(_FieldSet);
