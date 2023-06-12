import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    const [userlogin, setUserLogin] = useState('');
    const [userpassword, setUserPassword] = useState('');

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
            navigate('/authorization')
        }).catch((error) => {
            alert(error);
        })
        document.getElementById('r-userlogin').value = ""
        document.getElementById('r-userfirstname').value = ""
        document.getElementById('r-usersecondname').value = ""
        document.getElementById('r-email').value = ""
        document.getElementById('r-registration-password').value = ""
        document.getElementById('r-registration-password-repeat').value = ""
    }

    return (
        <div className="form-registration">
            <h1 className="form-registration-label">Регистрация</h1>
            <input id="r-userlogin"className="registration-input" type="text" placeholder="Имя пользовтаеля" onChange={(e) => handleLoginChange(e.target.value)}></input>
            <input id="r-userfirstname" className="registration-input" placeholder="Имя"></input>
            <input id="r-usersecondname" className="registration-input" placeholder="Фамилия"></input>
            <input id="r-email" className="registration-input" type="email" placeholder="Электронная почта"></input>
            <input id="r-registration-password" className="registration-input" type="password" placeholder="Пароль" onChange={(e) => handlePasswordChange(e.target.value)}></input>
            <input id="r-registration-password-repeat" className="registration-input" type="password" placeholder="Подтвердите пароль"></input>
            <button className="registration-btn" type="submit" onClick={() => handleRegistration()}>Зарегистрироваться</button>
            <Link className="registration-btn" to={'/authorization'}>
                <button style={{ margin: -8 }} className="registration-btn">Войти</button>
            </Link>
        </div>
    )
}

export default Registration;
