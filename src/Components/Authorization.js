import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Authorization.css";
import axios from "axios";

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
