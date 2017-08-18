// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {PropTypes} from "prop-types";
import {NavLink} from "react-router-dom";

// MaterialUI
import {MenuItem, ListItem, ListItemText, ListItemIcon, ListSubheader} from "material-ui";
import {withStyles} from 'material-ui/styles';

const styleSheet = (theme => ({
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&.active > li': {
      boxShadow: `5px 0 0 0 ${theme.palette.accent['700']} inset`
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
}));

// MenuLink
const _MenuLink = ({
  to,
  title,
  indent,
  classes,
  ...rest
}) => (
  <NavLink to={to} {...rest} className={classes.link} exact>
    <ListItem button color="primary" dense classes={{
      root: classes.linkItem
    }}>
      <ListItemText inset={indent} primary={title} classes={{
        text: classes.linkText,
        inset: classes.linkIndent
      }}/>
    </ListItem>
  </NavLink>
);
_MenuLink.muiName = "MuiMenuLink";

_MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  indent: PropTypes.bool
}

export const MuiMenuLink = withStyles(styleSheet)(_MenuLink);

// MenuGroup
const _MenuGroup = ({
  title,
  classes,
  children,
  ...rest
}) => (
  <div>
    <ListSubheader className={classes.menuGroupTitle}>{title}</ListSubheader>
    <div>{children}</div>
  </div>
);
_MenuGroup.muiName = "MuiMenuGroup";

_MenuGroup.propTypes = {
  title: PropTypes.string.isRequired
}

export const MuiMenuGroup = withStyles(styleSheet)(_MenuGroup);

// IconMenuItem
const _IconMenuItem = ({
  title,
  icon,
  dense,
  classes,
  ...rest
}) => {
  const textStyle = {
    text: classes.iconMenuItemText
  };
  return (
    <MenuItem {...rest} className={classes.iconMenuItem}>
      <ListItemIcon className={classes.iconMenuItemIcon}>{icon}</ListItemIcon>
      <ListItemText classes={textStyle} primary={title}/>
    </MenuItem>
  );
}
_IconMenuItem.muiName = "MuiIconMenuItem";

_IconMenuItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
}

export const MuiIconMenuItem = withStyles(styleSheet)(_IconMenuItem);
