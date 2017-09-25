// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

export * from "./redux";
export * from "./material";

import "./shared/phonelib"
export const PhoneLib = window.PhoneLib;

export const checkPhone = (v) => PhoneLib.isValid(v);
export const checkEmail = (v) => (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(v);

export const logger = {
  info: (tag, ...rest) => {
    if (process.env.NODE_ENV !== "production")
      console.info(tag, rest);
    }
  ,
  error: (tag, ...rest) => {
    if (process.env.NODE_ENV !== "production")
      console.error(tag, rest);
    }
  }
