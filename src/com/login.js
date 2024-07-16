import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Login() {
    const [Id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleIdChange = (e) => setId(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = () => {
        localStorage.setItem("Id", Id);
        localStorage.setItem("password", password);
    };

    return (
        <div>
            <input value={Id} onChange={handleIdChange} placeholder="ID" />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
            <Link to="./home" onClick={handleLogin}>로그인하기</Link>
        </div>
    );
}

export default Login;
