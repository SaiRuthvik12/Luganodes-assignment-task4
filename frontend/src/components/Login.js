import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";
import {useNavigate} from "react-router-dom";
import fox from "./MetaMask_Fox.svg.png"

const Login = () => {

    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");


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

    const connectWallet = async (e) => {
        e.preventDefault();
        if (typeof window !== "undefined" && window.ethereum !== "undefined") {
            console.log("Metamask installed");
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
                console.log(accounts[0]);
                try {
                    const config = {
                        Headers: {
                            "Content-Type": "application/json",
                        },
                    };

                    setLoading(true);
                    const { data } = await axios.post(
                        "/api/users/loginmetamask",
                        { walletAddress },
                        config
                    );

                    console.log(data);
                    localStorage.setItem("userInfo", JSON.stringify(data));
                    setLoading(false);
                    history("/profile");
                } catch (err) {
                    console.log(err);
                    setError(true);
                    setLoading(false);
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("Metamask not installed");
        }
    };

    return (
        <div class="login-container row">
            <div class="register-form col-lg-6">
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
            <div class="col-lg-6 register-form">
                <img src={fox} className="App-logo smaller-logo" alt="logo" />
                <form class="form-signin" action="/Login">
                    <button
                        class="login-btn btn btn-lg btn-primary btn-block wallet-button-2"
                        type="submit"
                        onClick={connectWallet}
                    >
                        Login with Wallet
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
