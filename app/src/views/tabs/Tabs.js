// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React, {Component} from "react";
import {connect} from "react-redux";

// MaterialUI
import {
  Card,
  CardContent,
  Typography,
  AppBar,
  Tabs,
  Tab
} from "material-ui";
import {withStyles} from "material-ui/styles";

import {MuiSection} from "redux-material-bridge";

const styleSheet = (theme => ({
  card: {
    maxWidth: 600,
    minHeight: 400,
    margin: '0 auto'
  }
}));

class _Tabs extends Component {
  state = {
    tabSelected: 0
  }

  render() {
    const {classes} = this.props;
    return (
      <MuiSection>
        <Typography type="headline" color="accent">Tabs Example</Typography>
        <Card className={classes.card}>
          <AppBar color="default" position="static">
            <Tabs value={this.state.tabSelected} textColor="accent" onChange={(event, tabSelected) => this.setState({tabSelected})}>
              <Tab label="Item One"/>
              <Tab label="Item Two"/>
              <Tab label="Item Three"/>
            </Tabs>
          </AppBar>
          <CardContent>
            {this.state.tabSelected === 0 && <MuiSection>
              {'Item One'}
            </MuiSection>}
            {this.state.tabSelected === 1 && <MuiSection>
              {'Item Two'}
            </MuiSection>}
            {this.state.tabSelected === 2 && <MuiSection>
              {'Item Three'}
            </MuiSection>}
          </CardContent>
        </Card>
      </MuiSection>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default withStyles(styleSheet)(connect(mapStateToProps)(_Tabs));
