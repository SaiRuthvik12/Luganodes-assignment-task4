import React from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";
import { useNavigate } from "react-router-dom";
import fox from "./MetaMask_Fox.svg.png"

const Register = (props) => {
    const history = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [pic, setPic] = useState(
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
    );

    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmpassword) {
            setMessage("Passwords do not match");
        } else {
            setMessage(null);
            try {
                const config = {
                    Headers: {
                        "Content-Type": "application/json",
                    },
                };

                setLoading(true);
                const { data } = await axios.post(
                    "/api/users",
                    { firstname, lastname, email, password, phoneNo, pic },
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
        }
    };

    const connectWallet = async (e) => {
        e.preventDefault();
        if(typeof window!=="undefined" && window.ethereum !== 'undefined'){
            console.log("Metamask installed");
            try{
                const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
                props.setUserRegister(accounts[0]);
                console.log(accounts[0]);
                history("/Registermetamask");
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            console.log("Metamask not installed");
        }

    }

    return (
        <div class="login-container row">
            <div class="register-form col-lg-6 ">
                <h1 class="login-title">Enter your details</h1>
                {message && <ErrorMsg msg={message}></ErrorMsg>}
                {error && <ErrorMsg msg="User already exists"></ErrorMsg>}
                {loading && <Loading />}
                <form class="form-signin" action="/Login">
                    <input
                        type="text"
                        name="firstname"
                        value={firstname}
                        class="form-control top"
                        placeholder="First Name"
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                        autofocus
                    />
                    <input
                        type="text"
                        name="lastname"
                        value={lastname}
                        class="form-control top"
                        placeholder="Last Name"
                        onChange={(e) => setLastname(e.target.value)}
                        required
                        autofocus
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        class="form-control middle"
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    ></input>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        class="form-control bottom"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="confirmpassword"
                        value={confirmpassword}
                        class="form-control bottom"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="phoneNo"
                        value={phoneNo}
                        class="form-control top"
                        placeholder="Phone number"
                        onChange={(e) => setPhoneNo(e.target.value)}
                        required
                        autofocus
                    />

                    <button
                        class="login-btn btn btn-lg btn-primary btn-block"
                        type="submit"
                        onClick={submitHandler}
                    >
                        REGISTER
                    </button>
                </form>
            </div>
            <div class="col-lg-6 register-form">
                <img src={fox} className="App-logo" alt="logo" />
                <form class="form-signin" action="/Login">
                    <button
                        class="login-btn btn btn-lg btn-primary btn-block wallet-button"
                        type="submit"
                        onClick={connectWallet}
                    >
                        Connect Wallet
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
