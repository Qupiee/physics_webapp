import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Authorization.css";
import { useState } from "react";

function Authorization() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    function authorizeUser() {
        return 0;
    }

    return (
        <div className="form-authorization" onSubmit={handleSubmit}>
            <h1 className="form-authorization-label">Авторизация</h1>
            <input className="authorization-input" type="text" placeholder="Имя пользователя" value={username} onChange={handleUsernameChange}></input>
            <input className="authorization-input" type="password" placeholder="Пароль" value={password} onChange={handlePasswordChange}></input>
            <button className="authorization-btn" type="submit">Войти</button>
            <Link className="authorization-btn" to={'/registration'}>
                <button style={{ margin: -8 }} className="authorization-btn">Зарегистрироваться</button>
            </Link>
            <Link to={'/#'} className="link-reset-password">Забыли пароль?</Link>
        </div>
    )
}

export default Authorization;
