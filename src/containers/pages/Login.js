import { connect } from "react-redux";

import Login from "./../../components/pages/Login.jsx";
import { mapStateToProps } from "./Login.mappers.js"
export default connect(mapStateToProps)(Login);