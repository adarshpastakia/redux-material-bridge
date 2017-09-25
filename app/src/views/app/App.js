// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React, {Component} from "react";
import {connect} from "react-redux";
import {Route, withRouter, NavLink} from "react-router-dom";

// MaterialUI
import {
  Avatar,
  Badge,
  IconButton,
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Divider,
  Popover,
  Typography
} from "material-ui";
import {
  MoreVert,
  Person,
  Notifications,
  ArrowBack,
  AccountBox,
  Clear
} from "material-ui-icons";
import {withStyles} from 'material-ui/styles';

import {
  ReduxSwitch,
  MuiAppContainer,
  MuiAppHeader,
  MuiMenuLink,
  MuiMenuGroup,
  MuiIconMenuItem
} from "redux-material-bridge";
import {
  UnknownRoute,
  Login,
  Table,
  Home,
  Form,
  Tabs
} from "../index";

import reactLogo from "../../assets/react.svg";
import reduxLogo from "../../assets/redux.svg";
import materialLogo from "../../assets/material.svg";

const styleSheet = (({
  palette,
  colors,
  ...theme
}) => ({
  avatar: {
    background: colors.white
  },
  avatarIcon: {
    fill: colors.secondary
  },
  bellBadge: {
    marginTop: 12
  },
  bellIcon: theme.icon.medium,
  notifsList: {
    minWidth: 240,
    maxHeight: 200
  },
  invertedPaper: {
    backgroundColor: palette.background.appBar
  },
  padded: theme.padded,
  clearIcon: theme.icon.small
}));

class _App extends Component {
  state = {
    avatarMenu: {
      open: false,
      anchorEl: undefined
    },
    notifsList: {
      open: false,
      anchorEl: undefined
    },
    popoverOrigin: {
      anchor: {
        "horizontal": "right",
        "vertical": "bottom"
      },
      target: {
        "horizontal": "right",
        "vertical": "top"
      }
    },
    drawer: {
      open: false
    }
  }

  openDrawer = () => {
    const drawer = {
      open: true
    };
    this.setState({drawer});
  }
  closeDrawer = () => {
    const drawer = {
      open: false
    };
    this.setState({drawer});
  }

  openAvatarMenu = (evt) => {
    const avatarMenu = {
      open: true,
      anchorEl: evt.currentTarget
    };
    this.setState({avatarMenu});
  }
  closeAvatarMenu = () => {
    const avatarMenu = {
      open: false
    };
    this.setState({avatarMenu});
  }

  openNotifsList = (evt) => {
    const notifsList = {
      open: true,
      anchorEl: evt.currentTarget
    };
    this.setState({notifsList});
  }
  closeNotifsList = () => {
    const notifsList = {
      open: false
    };
    this.setState({notifsList});
  }

  render() {
    const {classes} = this.props;
    const {drawer, avatarMenu, notifsList, popoverOrigin} = this.state;
    return (
      <MuiAppContainer>
        <MuiAppHeader title="React + Redux + MaterialUI" subtitle="A Demo Application" openMenu={this.openDrawer}>
          <IconButton color="inherit" onClick={this.openNotifsList}>
            <Badge badgeContent={2} color="accent" className={classes.bellBadge}><Notifications className={classes.bellIcon}/></Badge>
          </IconButton>
          <Button color="inherit" dense onClick={this.openAvatarMenu}>
            <Avatar className={classes.avatar}><Person className={classes.avatarIcon}/></Avatar>
            <MoreVert/>
          </Button>
        </MuiAppHeader>

        <Popover open={avatarMenu.open} onRequestClose={this.closeAvatarMenu} anchorEl={avatarMenu.anchorEl} anchorOrigin={popoverOrigin.anchor} transformOrigin={popoverOrigin.target}>
          <MuiIconMenuItem dense title="Profile" icon={(<Person/>)}/>
          <MuiIconMenuItem dense title="My Account" icon={(<AccountBox/>)}/>
          <Divider/>
          <MuiIconMenuItem dense title="Logout" icon={(<ArrowBack/>)}/>
        </Popover>

        <Popover open={notifsList.open} onRequestClose={this.closeNotifsList} anchorEl={notifsList.anchorEl} anchorOrigin={popoverOrigin.anchor} transformOrigin={popoverOrigin.target}>
          <List className={classes.notifsList}>
            {[0, 1, 2, 3].map(value => (
              <ListItem key={value} button>
                <ListItemIcon><Notifications/></ListItemIcon>
                <ListItemText inset primary="User Updated" secondary="On 04/09/2016"/>
                <ListItemSecondaryAction>
                  <IconButton><Clear className={classes.clearIcon}/></IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Popover>

        <Drawer open={drawer.open} onRequestClose={this.closeDrawer} onClick={this.closeDrawer}>
          <Paper className={classes.invertedPaper}>
            <NavLink to="/">
              <Grid container align="center" justify="space-around" className={classes.padded}>
                <Grid item>
                  <Typography type="headline" align="center" color="inherit">
                    <img src={reactLogo} alt="react-logo" height="32"/>
                    <div>React</div>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography type="headline" align="center" color="inherit">
                    <img src={reduxLogo} alt="redux-logo" height="32"/>
                    <div>Redux</div>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography type="headline" align="center" color="inherit">
                    <img src={materialLogo} alt="material-logo" height="32"/>
                    <div>Material</div>
                  </Typography>
                </Grid>
              </Grid>
            </NavLink>
          </Paper>
          <List>
            <MuiMenuLink to="/" title="Getting Started"/>
            <MuiMenuGroup title="Examples">
              <MuiMenuLink indent to="/login" title="Login"/>
              <MuiMenuLink indent to="/form" title="Form"/>
              <MuiMenuLink indent to="/tabs" title="Tabs"/>
              <MuiMenuLink indent to="/table" title="Table"/>
            </MuiMenuGroup>
          </List>
        </Drawer>

        <ReduxSwitch>
          <Route path="/" component={Home} exact/>
          <Route path="/form" component={Form}/>
          <Route path="/login" component={Login}/>
          <Route path="/table" component={Table}/>
          <Route path="/tabs" component={Tabs}/>
          <Route component={UnknownRoute}/>
        </ReduxSwitch>
      </MuiAppContainer>
    );
  }
}

function mapStateToProps(state) {
  return {username: state.userSession.username}
}

export default withStyles(styleSheet)(withRouter(connect(mapStateToProps)(_App)));
