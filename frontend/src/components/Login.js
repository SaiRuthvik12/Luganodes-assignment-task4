import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const submitHandler = async (e) => {
        e.preventDefault();
        
        try{
            const config = {
                Headers: {
                    "Content-Type": "application/json",
                },
            };

            setLoading(true);
            const { data } = await axios.post(
                "/api/users/login",
                { email, password },
                config
            );
            
            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false);
            history("/profile");
        }
        catch(err){
            console.log(err);
            setError(true);
            setLoading(false);
        }
    }

    return (
        <div class="form-container row">
            <div class="register-form">
                <h1 class="login-title">Enter your details</h1>
                {error && (
                    <ErrorMsg msg="Invalid username or password"></ErrorMsg>
                )}
                {loading && <Loading />}
                <form class="form-signin">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        class="form-control top"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autofocus
                    />

                    <input
                        type="password"
                        name="password"
                        value={password}
                        class="form-control bottom"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        class="login-btn btn btn-lg btn-primary btn-block"
                        type="button"
                        onClick={submitHandler}
                    >
                        LOGIN
                    </button>
                </form>
                {/* <h3 class="login-title failed-msg">{msg}</h3> */}
            </div>
        </div>
    );
};

export default Login;
