// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
/**
 * Higher-order component (HOC) to wrap restricted pages
 */
export default function(BaseComponent) {
  class Restricted extends Component {
    componentWillMount() {
      this.checkAuthentication(this.props);
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        this.checkAuthentication(nextProps);
      }
    }
    checkAuthentication(params) {
      const {history} = params;
      // checkCredentials().catch(e => history.replace({pathname: '/login'}));
      if (!params.isLoggedIn) {
        history.replace('/login');
      }
    }
    render() {
      return <BaseComponent {...this.props}/>;
    }
  }
  return withRouter(connect(mapStateToProps)(Restricted));
}

function mapStateToProps(state, ownProps) {
  return {isLoggedIn: state.loggedIn}
}
