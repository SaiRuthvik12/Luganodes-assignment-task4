import React from "react";
import {useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Landing from "./Landing";
import RegisterMetamask from "./RegisterMetamask";

function App() {
    const [userInfo, setUserInfo] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Register" element={<Register setUserRegister = {setUserInfo}/>}></Route>
                <Route path="/Registermetamask" element={<RegisterMetamask userInfo = {userInfo}/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
