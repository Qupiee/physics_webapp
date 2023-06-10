import React from "react";
import { Link } from "react-router-dom";

function Authorization() {
    return (
        <div className="form-authorization">
            <h1>Авторизация</h1>
            <input className="authorization-input" type="text" placeholder="Имя пользователя"></input>
            <input className="authorization-input" type="password" placeholder="Пароль"></input>
            <button className="authorization-btn" type="submit">Войти</button>
            <Link className="authorization-btn" to={'/registration'}>
                <button className="authorization-btn">Зарегистрироваться</button>
            </Link>
            <Link to={'/#'} className="link-reset-password">Забыли пароль?</Link>
        </div>
    )
}

export default Authorization;