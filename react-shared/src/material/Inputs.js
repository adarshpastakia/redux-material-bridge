// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {PropTypes} from "prop-types";

import IconButton from "material-ui/IconButton";
import {Clear, ModeEdit} from "material-ui-icons";
import {withStyles} from 'material-ui/styles';

import {
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  Input
} from "material-ui";

// Form
const _Form = ({
  onFocusCycle = () => true,
  children,
  ...rest
}) => (
  <form {...rest}>
    {children}
    <button type="submit" onFocus={onFocusCycle}/>
  </form>
);
_Form.muiName = "MuiForm";
_Form.propTypes = {
  onFocusCycle: PropTypes.func
}
export const MuiForm = _Form;

// TextField
const _TextField = ({
  id = `MuiControl${new Date().getTime()}`,
  input,
  label,
  tabIdx,
  helperText,
  meta: {
    touched,
    error
  },
  inputRef,
  shrinkLabel = undefined,
  required = false,
  margin = "dense",
  ...custom
}) => (<TextField id={id} InputProps={{
  style: {
    marginTop: 16
  }
}} InputLabelProps={{
  shrink: shrinkLabel
}} required={required} margin={margin} error={!!(touched && error)} helperText={(touched && error) || helperText} inputRef={inputRef} tabIndex={tabIdx} label={label} onChange={(value) => input.onChange(value)} value={input.value} {...custom}/>);
_TextField.muiName = "MuiTextField";
_TextField.propTypes = {
  label: PropTypes.string,
  inputRef: PropTypes.func,
  tabIdx: PropTypes.number
}
export const MuiTextField = _TextField;

// Checkbox
const _Checkbox = ({
  input,
  label,
  tabIdx,
  meta,
  inputRef,
  value,
  ...custom
}) => (
  <FormControlLabel value={value} label={label} control={(<Checkbox inputRef={inputRef} tabIndex={tabIdx} onChange={(event, value) => input.onChange(value)} checked={input.checked} {...custom}/>)}/>
);
_Checkbox.muiName = "MuiCheckbox";
_Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.func,
  tabIdx: PropTypes.number
}
export const MuiCheckbox = _Checkbox;

// Radio
const _Radio = ({
  label,
  tabIdx,
  inputRef,
  value,
  ...custom
}) => (
  <FormControlLabel value={value} label={label} control={(<Radio inputRef={inputRef} {...custom}/>)}/>
);
_Radio.muiName = "MuiRadio";
_Radio.propTypes = {
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.func,
  tabIdx: PropTypes.number
}
export const MuiRadio = _Radio;

// RadioGroup
const _RadioGroup = ({
  name,
  label,
  input,
  meta,
  required = false,
  children,
  ...custom
}) => (
  <FormControl required={required}>
    <FormLabel>{label}</FormLabel>
    <RadioGroup name={name} selectedValue={input.value} {...input} {...custom} onChange={(event, value) => input.onChange(value)}>{children}</RadioGroup>
  </FormControl>
);
_RadioGroup.muiName = "MuiRadioGroup";
_RadioGroup.propTypes = {
  label: PropTypes.string.isRequired
}
export const MuiRadioGroup = _RadioGroup;

// CustomTextField
const styleSheet = (theme => ({
  muiInputFocused: {
    '& + $xInputIcon': {
      color: theme.palette.primary[500]
    }
  },
  muiInputError: {
    '& + $xInputIcon': {
      color: theme.palette.error[500]
    }
  },
  xInputIcon: {
    position: "absolute",
    top: 22,
    width: 20,
    height: 20,
    color: theme.palette.grey[500],
    '& > svg': {
      width: 20,
      height: 20
    }
  }
}));
const _MuiCustomTextField = ({
  id = `MuiControl${new Date().getTime()}`,
  label,
  margin = "dense",
  icon = (<ModeEdit/>),
  clear,
  classes,
  shrinkLabel,
  input = {},
  meta = {},
  size = 20,
  handleChange = () => true,
  autoComplete,
  autoFocus,
  className,
  defaultValue,
  disabled,
  inputClassName,
  InputClassName,
  InputProps = {},
  inputProps = {},
  inputRef,
  labelClassName,
  InputLabelProps,
  helperText,
  helperTextClassName,
  FormHelperTextProps,
  fullWidth,
  required,
  type,
  multiline,
  name,
  placeholder,
  rootRef,
  rows,
  rowsMax,
  value = '',
  ...other
}) => {
  if (shrinkLabel)
    other.shrink = true;

  if (input.onChange)
    handleChange = v => input.onChange(v);

  const clearInput = (event) => {
    handleChange('');
    event
      .currentTarget
      .parentElement
      .querySelector('input')
      .focus();
  }

  // let inputProps = inputPropsProp;
  inputProps.size = size;
  if (inputClassName) {
    inputProps.className = inputClassName;
  }

  return (
    <FormControl fullWidth={fullWidth} ref={rootRef} className={className} error={!!(meta.touched && meta.error)} required={required} margin={margin} {...other}>
      {label && (
        <InputLabel style={{
          marginLeft: 24
        }} htmlFor={id} className={labelClassName} {...InputLabelProps}>
          {label}
        </InputLabel>
      )}

      <Input id={id} inputProps={inputProps} inputRef={inputRef} placeholder={placeholder} classes={{
        focused: classes.muiInputFocused,
        error: classes.muiInputError
      }} onChange={(e) => handleChange(e.currentTarget.value)} style={{
        marginLeft: 24,
        paddingRight: (clear
          ? 22
          : 0)
      }} autoComplete={autoComplete} autoFocus={autoFocus} className={InputClassName} defaultValue={defaultValue} disabled={disabled} multiline={multiline} name={name} rows={rows} rowsMax={rowsMax} type={type} value={input.value || value} id={id} {...InputProps}/>

      <div className={classes.xInputIcon}>{icon}</div>

      {clear && value && (
        <IconButton onClick={event => clearInput(event)} style={{
          position: "absolute",
          width: 24,
          height: 24,
          top: 20,
          right: 0
        }}>
          <Clear style={{
            width: 16,
            height: 16
          }}/></IconButton>
      )}

      {((meta.touched && meta.error) || helperText) && (
        <FormHelperText className={helperTextClassName} {...FormHelperTextProps} style={{
          marginLeft: 24
        }}>
          {((meta.touched && meta.error) || helperText)}
        </FormHelperText>
      )}
    </FormControl>
  );
}
_MuiCustomTextField.muiName = "MuiCustomTextField";
_MuiCustomTextField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  size: PropTypes.number,
  helperText: PropTypes.string,
  shrinkLabel: PropTypes.bool,
  handleChange: PropTypes.func
}
export const MuiCustomTextField = withStyles(styleSheet)(_MuiCustomTextField);
