import { connect } from "react-redux";

import LoginForm from "./../../components/Login/LoginForm.jsx";
import { mapDispatchToProps } from "./LoginForm.mappers.js"
export default connect(null, mapDispatchToProps)(LoginForm);