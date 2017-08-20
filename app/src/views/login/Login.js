// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React, {Component} from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";

// MaterialUI
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid
} from "material-ui";
import {withStyles} from "material-ui/styles";

import {MuiForm, MuiTextField, MuiCheckbox, MuiSection} from "redux-material-bridge";
import loginMedia from "../../assets/login-media1.jpg";

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = "Required"
  }
  if (!values.password) {
    errors.password = "Required"
  }
  return errors
}

const styleSheet = (theme => ({
  loginCard: {
    margin: "5em auto 0",
    maxWidth: 400
  },
  cardMedia: {
    backgroundPosition: "center left",
    backgroundImage: `url(${loginMedia})`,
    backgroundSize: "cover",
    minHeight: 120,
    position: "relative",
    "& > div": {
      color: theme.colors.white,
      fontSize: 24,
      fontWeight: theme.typography.fontWeightLight,
      position: "absolute",
      bottom: 8,
      right: 16
    }
  },
  cardHeader: {
    color: theme.colors.white,
    background: theme.colors.primary,
    padding: "8px 16px",
    "& span": {
      color: "inherit"
    }
  }
}));

class _Login extends Component {
  componentDidMount() {
    setTimeout(() => this.userInput.focus(), 300);
  }

  render() {
    const {classes, handleSubmit} = this.props;
    return (
      <MuiSection>
        <Card className={classes.loginCard}>
          <CardHeader className={classes.cardHeader} title="Login"></CardHeader>
          <CardMedia className={classes.cardMedia} image={loginMedia}>
            <div>Login</div>
          </CardMedia>
          <CardContent>
            <MuiForm onSubmit={handleSubmit(values => console.log(values))} onFocusCycle={() => this.userInput.focus()}>
              <Field inputRef={(ref) => this.userInput = ref} component={MuiTextField} fullWidth name="username" label="User Name"/>
              <Field component={MuiTextField} fullWidth name="password" label="Password" type="password"/>
              <Grid container align="center" justify="space-between">
                <Grid item>
                  <Field component={MuiCheckbox} name="remember" label="Remember Me" value="remember"/>
                </Grid>
                <Grid item>
                  <Button dense color="primary">Forgot Password?</Button>
                </Grid>
              </Grid>
            </MuiForm>
          </CardContent>
          <CardActions>
            <Grid item xs/>
            <Button raised color="primary" onClick={handleSubmit(values => console.log(values))}>Login</Button>
          </CardActions>
        </Card>
      </MuiSection>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

_Login = reduxForm({
  form: "LoginForm", // a unique identifier for this form
  validate
})(_Login);

export default withStyles(styleSheet)(connect(mapStateToProps)(_Login));
