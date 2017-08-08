// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {PropTypes} from "prop-types";

import {IconButton} from "material-ui";
import {Clear, ModeEdit} from "material-ui-icons";
import {withStyles, createStyleSheet} from 'material-ui/styles';

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
}} required={required} margin={margin} error={!!(touched && error)} helperText={touched && error} inputRef={inputRef} tabIndex={tabIdx} label={label} onChange={(value) => input.onChange(value)} value={input.value} {...custom}/>);
_TextField.muiName = "MuiTextField";
_TextField.propTypes = {
  label: PropTypes.string.isRequired,
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
const styleSheet = createStyleSheet({
  labelFormControl: {
    transform: "translate(32px, 23px) scale(1)"
  },
  labelShrink: {
    transform: "translate(0,0) scale(.75)"
  }
});
const _MuiCustomTextField = ({
  id = `MuiControl${new Date().getTime()}`,
  label,
  icon = (<ModeEdit/>),
  clear,
  value,
  shrinkLabel,
  helperText,
  classes,
  size = 20,
  handleChange = () => true,
  ...custom
}) => {
  let labelProps = {};
  if (shrinkLabel)
    labelProps = {
      shrink: true
    };
  return (
    <FormControl>
      <InputLabel htmlFor={id} {...labelProps} classes={{
        formControl: classes.labelFormControl,
        shrink: classes.labelShrink
      }}>{label}</InputLabel>

      <Input id={id} onChange={(e) => handleChange(e.currentTarget.value)} value={value} inputProps={{
        size
      }} style={{
        paddingLeft: 32,
        paddingRight: 22
      }}/>

      <div style={{
        position: "absolute",
        width: 24,
        height: 24,
        top: 18
      }}>{icon}</div>

      {value && (
        <IconButton onClick={() => handleChange('')} style={{
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

      {helperText && (
        <FormHelperText>{helperText}</FormHelperText>
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
