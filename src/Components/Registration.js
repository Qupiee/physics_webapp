import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
import axios from "axios";

function Authorization() {
    const [userlogin, setUserLogin] = useState('');    
    const [userpassword, setUserPassword] = useState('');

    const handleLoginChange = (value) => {
        setUserLogin(value);
    }

    const handlePasswordChange = (value) => {
        setUserPassword(value);
    }

    const handleRegistration = () => {
        document.getElementById('userlogin').value = ""
        document.getElementById('userfirstname').value = ""
        document.getElementById('usersecondname').value = ""
        document.getElementById('email').value = ""
        document.getElementById('registration-password').value = ""
        document.getElementById('registration-password-repeat').value = ""

        const data = {
            UserLogin: userlogin,
            UserPassword: userpassword
        }
        
        const url = 'http://localhost:51160/api/User/Registration';
        axios.post(url, data).then((result) => {
            alert(result.data)
        }).catch((error) => {
            alert(error);
        })
    }

    return (
        <div className="form-registration">
            <h1 className="form-registration-label">Регистрация</h1>
            <input id="userlogin"className="registration-input" type="text" placeholder="Имя пользовтаеля" onChange={(e) => handleLoginChange(e.target.value)}></input>
            <input id="userfirstname" className="registration-input" placeholder="Имя"></input>
            <input id="usersecondname" className="registration-input" placeholder="Фамилия"></input>
            <input id="email" className="registration-input" type="email" placeholder="Электронная почта"></input>
            <input id="registration-password" className="registration-input" type="password" placeholder="Пароль" onChange={(e) => handlePasswordChange(e.target.value)}></input>
            <input id="registration-password-repeat" className="registration-input" type="password" placeholder="Подтвердите пароль"></input>
            <button className="registration-btn" type="submit" onClick={() => handleRegistration()}>Зарегистрироваться</button>
            <Link className="registration-btn" to={'/authorization'}>
                <button style={{ margin: -8 }} className="registration-btn">Войти</button>
            </Link>
        </div>
    )
}

export default Authorization;
