import React from "react";
import { Link } from "react-router-dom";
import "./Authorization.css";

/*TODO: "серверная часть". запрос на проверку данных в базе данных(найти, как называется правильно...)*/

function Authorization() {
    return (
        <div className="form-authorization">
            <h1 className="form-authorization-label">Авторизация</h1>
            <input className="authorization-input" type="text" placeholder="Имя пользователя"></input>
            <input className="authorization-input" type="password" placeholder="Пароль"></input>
            <button className="authorization-btn" type="submit">Войти</button>
            <Link className="authorization-btn" to={'/registration'}>
                <button style={{ margin: -8 }} className="authorization-btn">Зарегистрироваться</button>
            </Link>
            <Link to={'/#'} className="link-reset-password">Забыли пароль?</Link>
        </div>
    )
}

export default Authorization;
