import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Authorization.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Authorization() {
    const navigate = useNavigate();
    const [userlogin, setUserLogin] = useState('');    
    const [userpassword, setUserPassword] = useState('');

    const handleLoginChange = (value) => {
        setUserLogin(value);
    }

    const handlePasswordChange = (value) => {
        setUserPassword(value);
    }

    const handleAuthorization = () => {        
        const data = {
            UserLogin: userlogin,
            UserPassword: userpassword
        }

        const url = 'http://localhost:51160/api/User/Authorization';
        axios.post(url, data).then((result) => {
            alert(result.data)
            navigate('/account')
        }).catch((error) => {
            alert(error);
        })
        document.getElementById('a-login').value = ""
        document.getElementById('a-password').value = ""        
    }

    return (
        <div className="form-authorization">
            <h1 className="form-authorization-label">Авторизация</h1>
            <input id="a-login" className="authorization-input" type="text" placeholder="Имя пользователя" onChange={(e) => handleLoginChange(e.target.value)}></input>
            <input id="a-password" className="authorization-input" type="password" placeholder="Пароль" onChange={(e) => handlePasswordChange(e.target.value)}></input>
            <button className="authorization-btn" type="submit" onClick={() => handleAuthorization()}>Войти</button>
            <Link className="authorization-btn" to={'/registration'}>
                <button style={{ margin: -8 }} className="authorization-btn">Зарегистрироваться</button>
            </Link>
        </div>
    )
}

export default Authorization;
