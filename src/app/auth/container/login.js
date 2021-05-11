import Login from "../components/login";

import { connect } from "react-redux";

import { updateFieldOne } from "../actions/login";

const mapStateToProps = (state) => ({
  LoginState: state.LoginState,
});

const mapDispatchToProps = {
  updateFieldOne,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
