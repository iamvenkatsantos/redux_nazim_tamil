import React, { Component } from "react";
import Login from "./app/auth/container/login";
import { Provider } from "react-redux";
import Store from "./app/Store";
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={Store}>
          <Login />
        </Provider>
      </div>
    );
  }
}
