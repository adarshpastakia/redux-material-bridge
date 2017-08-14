// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {PropTypes} from "prop-types";
import {NavLink} from "react-router-dom";

import {
  AppBar,
  Grid,
  Toolbar,
  IconButton,
  Hidden,
  Typography
} from "material-ui";
import {Menu} from "material-ui-icons";
import {withStyles, createStyleSheet} from 'material-ui/styles';

const styleSheet = createStyleSheet(theme => ({
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
}));

const _AppHeader = ({
  title,
  subtitle,
  showMenuIcon,
  children,
  classes,
  openMenu,
  height = 64,
  ...rest
}) => {
  return (
    <AppBar position="fixed" {...rest} style={{
      height
    }}>
      <Toolbar className={classes.headerToolbar} disableGutters={true}>
        {showMenuIcon === true && (
          <IconButton className={classes.menuIcon} onClick={openMenu}>
            <Menu/>
          </IconButton>
        )}
        <NavLink to="/">
          <div className={classes.headerTitle}>{title}</div>
          {subtitle && (
            <Hidden smDown>
              <div className={classes.headerSubtitle}>{subtitle}</div>
            </Hidden>
          )}
        </NavLink>
        <Grid item xs/> {children}
      </Toolbar>
    </AppBar>
  );
}
_AppHeader.muiName = "AppHeader";

_AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  showMenuIcon: PropTypes.bool,
  openMenu: PropTypes.func
}
_AppHeader.defaultProps = {
  showMenuIcon: true,
  openMenu: () => void(0)
}

export default withStyles(styleSheet)(_AppHeader);
