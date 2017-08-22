// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {PropTypes} from "prop-types";
import {Field} from "redux-form";
import {Phone, Email} from "material-ui-icons";

import {MuiCustomTextField} from "../material";

import "../shared/phonelib";

// Email Input
const _ReduxEmailInput = (props) => (
  <Field type="email" component={MuiCustomTextField} icon={(<Email/>)} clear={false} {...props} normalize={value => value.toLowerCase()}/>
);
_ReduxEmailInput.muiName = "ReduxEmailInput";
export const ReduxEmailInput = _ReduxEmailInput;

// Phone Input
const parser = value => PhoneLib.format(value, "us", PhoneLib.FORMAT.FULL) || value;
const formatter = value => PhoneLib.formatInput(value, "us") || value;
const _ReduxPhoneInput = ({
  ...props
}) => {
  return (
    <Field type="tel" component={MuiCustomTextField} icon={(<Phone/>)} clear={false} {...props} format={formatter} parse={parser} placeholder={PhoneLib.getExample('us', PhoneLib.FORMAT.INTERNATIONAL)}/>
  )
};
_ReduxPhoneInput.muiName = "ReduxPhoneInput";
export const ReduxPhoneInput = _ReduxPhoneInput;

// Date Input
