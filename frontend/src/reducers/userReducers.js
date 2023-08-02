export const userLoginReducer = (state = {}, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return { loading: true };
        case "USER_LOGIN_SUCCESS":
            return { loading: false, userInfo: action.payload };
        case "USER_LOGIN_FAIL":
            return { loading: false, error: true };
        case "USER_LOGOUT":
            return {};

        default:
            return state;

    }
}