import React from 'react'
import NavbarTop from './NavbarTop'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";


const Edit = () => {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const [firstname, setFirstname] = useState(userInfo.firstname);
    const [lastname, setLastname] = useState(userInfo.lastname);
    const [email, setEmail] = useState(userInfo.email);
    const [phoneNo, setPhoneNo] = useState(userInfo.phoneNo);
    const [id, setId] = useState(userInfo._id);

    const history = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                Headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/users/update",
                { email, firstname, lastname, phoneNo, id },
                config
            );

            console.log(data);
            localStorage.setItem("userInfo", JSON.stringify(data));
            history("/profile");

        } catch (err) {
            console.log(err);
        }
    }


  return (
      <div>
          <div class="login-container col">
              <h1 className="gametitle">Edit Details</h1>
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
                      CONFIRM
                  </button>
              </form>
          </div>
      </div>
  );
}

export default Edit