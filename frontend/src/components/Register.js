import React from "react";

const Register = () => {
    return (
        <div class="form-container row">
            <div class="register-form">
                <h1 class="login-title">Enter your details</h1>

                <form class="form-signin" action="/Login">
                    <input
                        type="text"
                        name="username"
                        // value={user.username}
                        class="form-control top"
                        placeholder="Username"
                        // onChange={handleChange}
                        required
                        autofocus
                    />
                    <input
                        type="email"
                        name="email"
                        // value={user.email}
                        class="form-control middle"
                        placeholder="Email address"
                        // onChange={handleChange}
                        required
                    ></input>
                    <input
                        type="password"
                        name="password"
                        // value={user.password}
                        class="form-control bottom"
                        placeholder="Password"
                        // onChange={handleChange}
                        required
                    />

                    <button
                        class="login-btn btn btn-lg btn-primary btn-block"
                        type="submit"
                        // onClick={buttonClick}
                    >
                        REGISTER
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
