import React from "react";
import NavbarTop from "./NavbarTop";

const Profile = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);

    return (
        <div>
        <NavbarTop />
            <h1 className="gametitle">My Details</h1>
            <div className="row details">
                <div className="col-lg-3">
                    <h3>First name: </h3>
                    <h3>Last name: </h3>
                    <h3>Email:</h3>
                    <h3>PhoneNo </h3>
                </div>
                <div className="col-lg-6">
                    <h3>{userInfo.firstname}</h3>
                    <h3>{userInfo.lastname}</h3>
                    <h3>{userInfo.email}</h3>
                    <h3>{userInfo.phoneNo}</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;
