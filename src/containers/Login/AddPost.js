import { connect } from "react-redux";

import AddPost from "./../../components/Login/AddPost.jsx";
import { mapStateToProps, mapDispatchToProps } from "./AddPost.mappers.js"
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
