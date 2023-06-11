import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
import axios from "axios";

function Authorization() {
    const [userlogin, setUserLogin] = useState('');    
    const [userpassword, setUserPassword] = useState('');

    let valueLogin;

    const handleLoginChange = (value) => {
        setUserLogin(value);
    }

    const handlePasswordChange = (value) => {
        setUserPassword(value);
    }

    const handleRegistration = () => {
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
            <input className="registration-input" type="text" placeholder="Имя пользовтаеля" label='userlogin' onChange={(e) => handleLoginChange(e.target.value)}></input>
            <input className="registration-input" placeholder="Имя" label='userfirstname'></input>
            <input className="registration-input" placeholder="Фамилия" label='usersecondname'></input>
            <input id="email" className="registration-input" type="email" placeholder="Электронная почта" label='useremail'></input>
            <input id="registration-password" className="registration-input" type="password" placeholder="Пароль" label='userpassword' onChange={(e) => handlePasswordChange(e.target.value)}></input>
            <input id="registration-password-repeat" className="registration-input" type="password" placeholder="Подтвердите пароль"></input>
            <button className="registration-btn" type="submit" onClick={() => handleRegistration()}>Зарегистрироваться</button>
            <Link className="registration-btn" to={'/authorization'}>
                <button style={{ margin: -8 }} className="registration-btn">Войти</button>
            </Link>
        </div>
    )
}

export default Authorization;
