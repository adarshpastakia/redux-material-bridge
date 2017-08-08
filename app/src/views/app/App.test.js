import React from "react";
import {mount} from "enzyme";
import {MemoryRouter} from "react-router";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {App} from "./App";
import reducer from "../../reducers";

const store = createStore(reducer, applyMiddleware(thunk));

const mountWithRouter = Component => mount(
  <Provider store={store}>
    <MemoryRouter>
      {Component}
    </MemoryRouter>
  </Provider>
);

describe("<App />", () => {
  it("should work", () => {
    const wrapper = mountWithRouter(<App/>);
  });
});
