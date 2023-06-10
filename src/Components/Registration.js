import React from "react";
import { Link } from "react-router-dom";

function Authorization() {
    return (
        <div className="form-registration">
            <h1 className="form-registration-label">Регистрация</h1>
            <input className="registration-input" type="text" placeholder="Имя пользовтаеля"></input>
            <input className="registration-input" placeholder="Имя"></input>
            <input className="registration-input" placeholder="Фамилия"></input>
            <input id="email" className="registration-input" type="email" placeholder="Электронная почта"></input>
            <input id="registration-password" className="registration-input" type="password" placeholder="Пароль"></input>
            <input id="registration-password-repeat" className="registration-input" type="password" placeholder="Подтвердите пароль"></input>
            <button className="registration-btn" type="submit">Зарегистрироваться</button>
            <Link className="registration-btn" to={'/authorization'}>
                <button className="registration-btn">Войти</button>
            </Link>
        </div>
    )
}

export default Authorization;