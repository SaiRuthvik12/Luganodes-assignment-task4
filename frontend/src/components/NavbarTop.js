import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarTop() {
    const history = useNavigate();

    function handleClick() {
        localStorage.removeItem(
            "userInfo");
        history("/");
    }

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <span className="navbar-brand"> LUGANODES - 20BDS0003</span>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <button className="ml-auto login-btn btn btn-primary" onClick={handleClick}>
                        {" "}
                        Sign-out{" "}
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default NavbarTop;
