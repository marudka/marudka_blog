import { addPost } from "./../../redux/effects/addPost";

const mapStateToProps = state => ({
    user: state.login.user.login,
});

const mapDispatchToProps = dispatch => ({
    addPost: (data) => {
        dispatch(addPost(data))
    }
});

export {
    mapStateToProps,
    mapDispatchToProps,
}
