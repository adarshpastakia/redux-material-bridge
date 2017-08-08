// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React, {Component} from "react";
import {connect} from "react-redux";

// MaterialUI
import {Typography, Grid, Card, CardHeader, Button} from "material-ui";
import {withStyles, createStyleSheet} from "material-ui/styles";
import {lightBlue} from "material-ui/colors";

import reactLogo from "../../assets/react.png";
import reduxLogo from "../../assets/redux.png";
import materialLogo from "../../assets/material.png";

const styleSheet = createStyleSheet(theme => ({
  padded: theme.padded,
  banner: {
    padding: '3em 1em',
    color: theme.colors.white,
    background: theme.palette.accent[500]
  },
  iconCard: {
    color: 'inherit',
    width: 200
  },
  cardTitle: {
    color: theme.colors.white
  },
  react: {
    background: lightBlue[300]
  },
  redux: {
    background: lightBlue[500]
  },
  material: {
    background: lightBlue[300]
  },
  card: {
    width: '100%'
  }
}));

class _Home extends Component {

  render() {
    const {classes} = this.props;

    return (
      <div>
        <div className={classes.banner}>
          <Grid container justify="center" align="center" spacing={24}>
            <Grid item>
              <Button className={classes.iconCard} href="//reactjs.com" target="_blank" rel="noopener noreferrer">
                <Typography type="display1" color="inherit" align="center">
                  <img src={reactLogo} height="48" alt="react-logo"/>
                  <div>React</div>
                </Typography>
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Typography type="display2" color="inherit" align="center">+</Typography>
            </Grid>
            <Grid item>
              <Button className={classes.iconCard} href="//redux.js.org" target="_blank" rel="noopener noreferrer">
                <Typography type="display1" color="inherit" align="center">
                  <img src={reduxLogo} height="48" alt="redux-logo"/>
                  <div>Redux</div>
                </Typography>
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Typography type="display2" color="inherit" align="center">+</Typography>
            </Grid>
            <Grid item>
              <Button className={classes.iconCard} href="//material-ui-1dab0.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                <Typography type="display1" color="inherit" align="center">
                  <img src={materialLogo} height="48" alt="material-ui-logo"/>
                  <div>MUI</div>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </div>
        <div className={classes.padded}>
          <Grid container spacing={40} align="stretch" justify="center">
            <Grid item md={4} sm={10} xs={12}>
              <Card className={classes.card}>
                <CardHeader className={classes.react} title={(
                  <Typography type="headline" className={classes.cardTitle}>ReactJS</Typography>
                )} subheader={(
                  <Typography type="subheading" className={classes.cardTitle}>
                    <span className="x-uppercase">A javascript library for building user interfaces</span>
                  </Typography>
                )} avatar={(<img src={reactLogo} height="32" alt="react-logo"/>)}/> {/* <CardContent></CardContent> */}
              </Card>
            </Grid>
            <Grid item md={4} sm={10} xs={12}>
              <Card className={classes.card}>
                <CardHeader className={classes.redux} title={(
                  <Typography type="headline" className={classes.cardTitle}>ReduxJS</Typography>
                )} subheader={(
                  <Typography type="subheading" className={classes.cardTitle}>
                    <span className="x-uppercase">Redux is a predictable state container for react apps</span>
                  </Typography>
                )} avatar={(<img src={reduxLogo} height="32" alt="redux-logo"/>)}/> {/* <CardContent></CardContent> */}
              </Card>
            </Grid>
            <Grid item md={4} sm={10} xs={12}>
              <Card className={classes.card}>
                <CardHeader className={classes.material} title={(
                  <Typography type="headline" className={classes.cardTitle}>Material UI</Typography>
                )} subheader={(
                  <Typography type="subheading" className={classes.cardTitle}>
                    <span className="x-uppercase">A set of react components that implement google's material design</span>
                  </Typography>
                )} avatar={(<img src={materialLogo} height="32" alt="material-ui-logo"/>)}/> {/* <CardContent></CardContent> */}
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default withStyles(styleSheet)(connect(mapStateToProps)(_Home));
