// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {PropTypes} from "prop-types";
import {NavLink} from "react-router-dom";

import AppBar from "material-ui/AppBar";
import Grid from "material-ui/Grid";
import Hidden from "material-ui/Hidden";
import IconButton from "material-ui/IconButton";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import {Menu} from "material-ui-icons";
import {withStyles} from 'material-ui/styles';

const styleSheet = (theme => ({
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
