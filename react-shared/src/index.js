// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

export * from "./redux";
export * from "./material";

import "./shared/phonelib"
export const PhoneLib = window.PhoneLib;


export const checkPhone = (v)=>PhoneLib.isValid(v);
export const checkEmail = (v)=>/[\w\W]*\@[\w\W]*\.[\w]{2,}/.test(v);
