const rulesConst = {
    login: {
        regex: /^.{3,}$/,
        message: "Minimum length: 3 letters."
    },
    post: {
        regex: /^.{6,}$/,
        message: "Minimum length: 6 letters."
    }
};

export default rulesConst;