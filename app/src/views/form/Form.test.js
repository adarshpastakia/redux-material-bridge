import React from "react";
import {mount} from "enzyme";

import Form from "./Form";
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


describe("<Form />", () => {
  it("should work", () => {
    const wrapper = mountWithRouter(<Form/>);
  });
});
