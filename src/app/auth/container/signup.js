import SignUp from "../components/signup";

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  LoginState: state.LoginState,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
