// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {PropTypes} from "prop-types";

import {withStyles, createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet(theme => ({
  sticky: {
    backgroundColor: theme.palette.background.default
  }
}));

const _StickySection = ({
  top = 64,
  classes,
  children,
  ...rest
}) => {
  return (
    <div className={`sticky-section ${classes.sticky}`} style={{
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

export default withStyles(styleSheet)(_StickySection);
