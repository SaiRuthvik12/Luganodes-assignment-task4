import React from "react";

const Login = () => {
    return (
        <div class="form-container row">
            <div class="register-form">
                <h1 class="login-title">Enter your details</h1>
                <form class="form-signin">
                    <input
                        type="text"
                        name="username"
                        //   value={user.username}
                        class="form-control top"
                        placeholder="Username"
                        //   onChange={handleChange}
                        required
                        autofocus
                    />

                    <input
                        type="password"
                        name="password"
                        //   value={user.password}
                        class="form-control bottom"
                        placeholder="Password"
                        //   onChange={handleChange}
                        required
                    />

                    <button
                        class="login-btn btn btn-lg btn-primary btn-block"
                        type="button"
                        // onClick={buttonClick}
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
