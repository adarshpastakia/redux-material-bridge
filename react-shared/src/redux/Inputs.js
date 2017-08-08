// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {PropTypes} from "prop-types";
import {Field} from "redux-form";

import {MuiTextField} from "../material";

import "./phonelib";

const _ReduxEmailInput = (props) => (<Field type="email" component={MuiTextField} {...props} normalize={value => value.toLowerCase()}/>);
_ReduxEmailInput.muiName = "ReduxEmailInput";
export const ReduxEmailInput = _ReduxEmailInput;

const testValue = value => (value || "").length > 0 && !(/^\+/).test(value + '')
  ? "+" + value
  : value;
const parser = value => PhoneLib.format(testValue(value), "", PhoneLib.FORMAT.FULL) || value;
const formatter = value => PhoneLib.formatInput(testValue(value), "") || value;
const _ReduxPhoneInput = ({
  ...props
}) => {
  return (<Field type="tel" component={MuiTextField} {...props} format={formatter} parse={parser} placeholder={PhoneLib.getExample('us', PhoneLib.FORMAT.FULL)}/>)
};
_ReduxPhoneInput.muiName = "ReduxPhoneInput";
export const ReduxPhoneInput = _ReduxPhoneInput;
