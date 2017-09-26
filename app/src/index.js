// @author: Adarsh Pastakia
// Copyright © 2017, Innominds Software

import React from "react";
import ReactDOM from "react-dom";

import {blue, pink, blueGrey} from "material-ui/colors";

import {ReduxRoot, MuiTheme, MuiRootContainer} from "redux-material-bridge";

import {App} from "./views";
import reducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

// import "redux-material-bridge/dist/redux/phonelib";

const baseName = process.env.production
  ? "/redux-material-bridge"
  : "/";

// Main app view fragment
ReactDOM.render((
  <ReduxRoot reducers={reducer} basename={baseName}>
    <MuiTheme primary={blue} accent={pink} grey={blueGrey} type="light" font="Open Sans">
      <MuiRootContainer withFooter>
        <App/>

        <footer>
          <span>© 2017, Adarsh Pastakia</span>
        </footer>
      </MuiRootContainer>
    </MuiTheme>
  </ReduxRoot>
), document.getElementById("root"));

registerServiceWorker();
