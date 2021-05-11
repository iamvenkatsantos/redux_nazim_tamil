import Thunk from "redux-thunk";

import { applyMiddleware, combineReducers, createStore } from "redux";

import LoginState from "../app/auth/reducer/login"; //constuctor state

const reducer = combineReducers({
  LoginState,
});

export default createStore(reducer, applyMiddleware(Thunk));
