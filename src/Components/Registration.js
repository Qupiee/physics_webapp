import React from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

/*TODO: "серверная часть". запрос на добавление в базу данных.*/

function Authorization() {
    let user = {
        userlogin: '',
        userfirstname: '',
        usersecondname: '',
        useremail: '',
        userpassword: ''
    }
    const handleChange = (event) => {
        const { label, value } = event.target;
        switch (label) {
            case 'userlogin':
                user.userlogin = value;
                break
            case 'userfirstname':
                user.userfirstname = value;
                break
            case 'usersecondname':
                user.usersecondname = value;
                break
            case 'useremail':
                user.useremail = value;
                break
            case 'userpassword':
                user.userpassword = value;
                break
            default: break
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    function newUser(){
        return 0;
    }

    return (
        <div className="form-registration" onSubmit={handleSubmit}>
            <h1 className="form-registration-label">Регистрация</h1>
            <input className="registration-input" type="text" placeholder="Имя пользовтаеля" label='userlogin' onChange={handleChange}></input>
            <input className="registration-input" placeholder="Имя" label='userfirstname' onChange={handleChange}></input>
            <input className="registration-input" placeholder="Фамилия" label='usersecondname' onChange={handleChange}></input>
            <input id="email" className="registration-input" type="email" placeholder="Электронная почта" label='useremail' onChange={handleChange}></input>
            <input id="registration-password" className="registration-input" type="password" placeholder="Пароль" label='userpassword' onChange={handleChange}></input>
            <input id="registration-password-repeat" className="registration-input" type="password" placeholder="Подтвердите пароль"></input>
            <button className="registration-btn" type="submit">Зарегистрироваться</button>
            <Link className="registration-btn" to={'/authorization'}>
                <button style={{ margin: -8 }} className="registration-btn">Войти</button>
            </Link>
        </div>
    )
}

export default Authorization;
