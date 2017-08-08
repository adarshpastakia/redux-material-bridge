# App

- Routing

```js
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';


const ConnectedSwitch = connect((state) => {
  return {location: state.routing.location};
})(Switch);
```
```html
<MuiThemeProvider muiTheme={muiTheme}>
  <div>
    <AppBar iconElementRight={this.props.loggedIn
      ? <OptionBox onLogout={() => this.props.logout()} {...this.props}/>
      : <div/>}/> {this.props.loggedIn && this.props.Role === 0 && <MenuBar/>}

    <ConnectedSwitch>
      {/* <Route component={LoginView}/> */}
      <Route path="/login" component={LoginView}/>
      <Route path="/dashboard" component={AuthPipeline(DashboardView)}/>
      <Route path="/shlogs" component={AuthPipeline(ShLogsView)}/>
      <Route path="/users" component={AuthPipeline(UsersView)}/>
      <Route path="/institutes" component={AuthPipeline(InstitutesView)}/>
    </ConnectedSwitch>
  </div>
</MuiThemeProvider>
```
