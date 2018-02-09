import { connect } from "react-redux";

import AddPost from "./../../components/Login/AddPost.jsx";
import { mapDispatchToProps } from "./AddPost.mappers.js"
export default connect(null, mapDispatchToProps)(AddPost);
