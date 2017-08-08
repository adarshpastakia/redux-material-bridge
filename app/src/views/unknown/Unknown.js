// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import {Typography} from "material-ui";

const _UnknownRoute = (props) => (
  <div>
    <Typography type="display2" align="center" style={{
      marginTop: '5em'
    }}>Under Construction</Typography>
    <Typography type="headline" align="center">Route = {props.location.pathname}</Typography>
  </div>
);

export default _UnknownRoute;
