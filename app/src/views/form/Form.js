// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React, {Component} from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";

import moment from "moment";
import numeral from "numeral";

// MaterialUI
import {Paper, Button, Grid, Toolbar, Typography} from "material-ui";
import {withStyles, createStyleSheet} from "material-ui/styles";

import {MuiForm, MuiTextField, MuiCheckbox, ReduxEmailInput, ReduxPhoneInput} from "react-shared";

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = "Required"
  }
  if (!values.lastName) {
    errors.lastName = "Required"
  }
  if (!values.email) {
    errors.email = "Required"
  }
  return errors
}

const styleSheet = createStyleSheet(theme => ({padded: theme.padded}));

const initialValues = {
  firstName: 'Dean',
  lastName: 'Martin',
  phone: '',
  dateBirth: moment('1917-06-07')
}

class _Form extends Component {
  componentDidMount() {
    setTimeout(() => this.userInput.focus(), 300);
  }

  render() {
    const {classes, handleSubmit} = this.props;
    return (
      <div className={classes.padded}>
        <Toolbar disableGutters>
          <Typography type="headline" color="accent">Form Example</Typography>
          <Grid item xs/>
        </Toolbar>
        <Paper className={classes.padded}>
          <MuiForm onSubmit={handleSubmit(values => console.log(values))} onFocusCycle={() => this.userInput.focus()}>
            <Grid container spacing={40} justify="center">
              <Grid item xs={12} md>
                <Field autoFocus component={MuiTextField} name="firstName" label="First Name" fullWidth required inputRef={ref => this.userInput = ref}/>
                <Field component={MuiTextField} name="lastName" label="Last Name" fullWidth required/>
                <ReduxEmailInput name="email" label="Email" fullWidth required/>
                <ReduxPhoneInput name="phone" label="Phone" fullWidth required/>
              </Grid>
              <Grid item xs={12} md>
                <Field component={MuiTextField} name="address1" label="Address" fullWidth required/>
                <Field component={MuiTextField} name="address2" label="" shrinkLabel={true} placeholder="Line 2 (Optional)" fullWidth/>
                <Field component={MuiTextField} name="city" label="City" fullWidth required/>
                <Field component={MuiTextField} name="state" label="State" fullWidth required/>
                <Field component={MuiTextField} name="country" label="Country" fullWidth required/>
                <Field component={MuiTextField} name="zip" label="Zip" fullWidth required/>
              </Grid>
            </Grid>
          </MuiForm>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}


_Form = reduxForm({
  form: "ExampleForm", // a unique identifier for this form
  initialValues,
  validate
})(_Form);

export default withStyles(styleSheet)(connect(mapStateToProps)(_Form));
