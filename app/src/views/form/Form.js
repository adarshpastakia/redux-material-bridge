// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React, {Component} from "react";
import {connect} from "react-redux";
import {Field, reduxForm, formValueSelector} from "redux-form";

import moment from "moment";

// MaterialUI
import {
  Grid,
  Paper,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  MenuItem
} from "material-ui";
import {withStyles} from "material-ui/styles";

import {
  checkEmail,
  checkPhone,
  PhoneLib,
  MuiForm,
  MuiTextField,
  ReduxEmailInput,
  ReduxPhoneInput,
  MuiSection,
  MuiFieldSet,
  MuiSelectField
} from "redux-material-bridge";

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
  } else if (!checkEmail(values.email)) {
    errors.email = "Invalid email"
  }
  if (!values.phone) {
    errors.phone = "Required"
  } else if (!checkPhone(values.phone)) {
    errors.phone = "Invalid phone"
  }
  return errors
}

const countries = [
  {
    value: 'au',
    label: 'Australia'
  }, {
    value: 'in',
    label: 'India'
  }, {
    value: 'uk',
    label: 'United Kingdom'
  }, {
    value: 'us',
    label: 'United States'
  }
]

const styleSheet = (theme => ({padded: theme.padded}));

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  country: 'in',
  dateBirth: moment('1917-06-07')
}

class _Form extends Component {
  componentDidMount() {
    // setTimeout(() => this.userInput.focus(), 300);
  }

  handleReset() {
    this
      .props
      .reset();
    setTimeout(() => this.userInput.focus(), 100);
  }

  render() {
    const {handleSubmit, formValues} = this.props;
    const inputProps = {
      style: {
        height: 'auto'
      }
    };
    return (
      <MuiSection>
        <Grid container spacing={40} align="stretch">
          <Grid item xs={12} md>
            <Paper>
              <MuiSection>
                <Typography type="headline" color="accent">Form Example</Typography>
                <MuiForm onSubmit={handleSubmit(values => console.log(values))} onFocusCycle={() => this.userInput.focus()}>
                  <Field component={MuiTextField} name="firstName" label="First Name" fullWidth required inputRef={ref => this.userInput = ref} inputProps={inputProps}/>
                  <Field component={MuiTextField} name="lastName" label="Last Name" fullWidth required inputProps={inputProps}/>
                  <ReduxEmailInput name="email" label="Email" fullWidth required inputProps={inputProps}/>
                  <ReduxPhoneInput name="phone" label="Phone" fullWidth required inputProps={inputProps}/>
                  <MuiFieldSet legend="Address">
                    <Field component={MuiTextField} name="address1" label="Address" fullWidth required inputProps={inputProps}/>
                    <Field component={MuiTextField} name="address2" placeholder="Line 2 (Optional)" fullWidth/>
                    <Field component={MuiTextField} name="city" label="City" fullWidth required inputProps={inputProps}/>
                    <Field component={MuiTextField} name="state" label="State" fullWidth required inputProps={inputProps}/>
                    <Field component={MuiSelectField} name="country" label="Country" fullWidth required inputProps={inputProps}>
                      {countries.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    <Field component={MuiTextField} name="zip" label="Zip" fullWidth required inputProps={inputProps}/>
                  </MuiFieldSet>
                </MuiForm>
                <Grid container justify="flex-end">
                  <Button onClick={this
                    .handleReset
                    .bind(this)} color="primary">Reset</Button>
                  <Button onClick={handleSubmit(values => console.log(values))} raised color="primary">Submit</Button>
                </Grid>
              </MuiSection>
            </Paper>
          </Grid>
          <Grid item xs={12} md>
            <Paper>
              <MuiSection>
                <Typography type="headline" color="accent">Form Values</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="First Name" secondary={formValues.firstName || '-'}/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Last Name" secondary={formValues.lastName || '-'}/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Email" secondary={formValues.email || '-'}/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Phone" secondary={PhoneLib.format(formValues.phone) || '-'}/>
                  </ListItem>
                </List>
              </MuiSection>
            </Paper>
          </Grid>
        </Grid>
      </MuiSection>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: selector(state, 'firstName', 'lastName', 'email', 'phone')
  }
}

const selector = formValueSelector('ExampleForm')
_Form = reduxForm({
  form: "ExampleForm", // a unique identifier for this form
  initialValues,
  validate
})(_Form);

export default withStyles(styleSheet)(connect(mapStateToProps)(_Form));
