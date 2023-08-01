import React from "react";

const Landing = () => {
    return (
        <div class="form-container row">
            <div>
                <h1 class="gametitle h3 font-weight-normal">WELCOME</h1>
                <form class="form-signin" action="/Login" method="get">
                    <button
                        class="my-btn btn btn-lg btn-primary btn-block"
                        type="submit"
                    >
                        LOGIN
                    </button>
                </form>
                <form class="form-signin" action="/Register" method="get">
                    <button
                        class="my-btn btn btn-lg btn-primary btn-block"
                        type="submit"
                    >
                        REGISTER
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Landing;
