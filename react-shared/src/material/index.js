// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software
import React from "react";

export {default as MuiTheme}
from "./Theme";
export {default as MuiAppHeader}
from "./AppHeader";
export {default as MuiStickySection}
from "./StickySection";

export * from "./MenuLink";

export * from "./Inputs";

export const MuiRootContainer = ({
  className,
  children,
  withFooter = false,
  ...props
}) => (
  <div className={`react-root-container ${className} ${withFooter
    ? 'with-footer'
    : ''}`} {...props}>{children}</div>
);

export const MuiAppContainer = ({
  className,
  children,
  ...props
}) => (
  <div className={`react-app-container ${className}`} {...props}>{children}</div>
);
