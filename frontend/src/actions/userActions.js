import axios from "axios";


export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({ type : "USER_LOGIN_REQUEST" });

        const config = {
            Headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            "/api/users/login",
            { email, password },
            config
        );

        dispatch({ type : "USER_LOGIN_SUCCESS", payload: data });

        localStorage.setItem('userInfo', JSON.stringify(data));
    }
    catch(error){
        dispatch({ type : "USER_LOGIN_FAIL" });
    }
}