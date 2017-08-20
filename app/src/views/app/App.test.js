import React from "react";
import {mount} from "enzyme";

import App from "./App";
import reducer from "../../reducers";
import {ReduxRoot, MuiTheme, MuiRootContainer} from "redux-material-bridge";

const mountWithRouter = Component => mount(
  <ReduxRoot reducers={reducer}>
    <MuiTheme>
      <MuiRootContainer withFooter>
        {Component}
      </MuiRootContainer>
    </MuiTheme>
  </ReduxRoot>
);

describe("<App />", () => {
  it("should work", () => {
    const wrapper = mountWithRouter(<App/>);
  });
});
