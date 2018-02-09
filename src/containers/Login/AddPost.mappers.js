import { addPost } from "./../../redux/effects/addPost";

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (data) => {
            dispatch(addPost(data))
        }
    }
};

export {
    mapDispatchToProps,
}
