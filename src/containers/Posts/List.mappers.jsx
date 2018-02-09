import { fetchPosts } from "./../../redux/effects/posts";

const mapStateToProps = (state) => {
    return {
        posts: state.posts.list.data || [],
        status: state.posts.status || "PROGRESS",
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch(fetchPosts())
        }
    }
};

export {
    mapStateToProps,
    mapDispatchToProps,
}
