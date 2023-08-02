import React from "react";
import {useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Landing from "./Landing";
import RegisterMetamask from "./RegisterMetamask";
import Profile from "./Profile";
import Edit from "./Edit";

function App() {
    const [userInfo, setUserInfo] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Register" element={<Register setUserRegister = {setUserInfo}/>}></Route>
                <Route path="/Registermetamask" element={<RegisterMetamask userInfo = {userInfo}/>}></Route>
                <Route path="/Profile" element={<Profile />}></Route>
                <Route path="/edit" element={<Edit />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
