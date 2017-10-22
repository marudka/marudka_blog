import { connect } from "react-redux";

import List from "./../../components/Posts/List.jsx";
import { mapStateToProps, mapDispatchToProps } from "./List.mappers.jsx"
export default connect(mapStateToProps, mapDispatchToProps)(List);