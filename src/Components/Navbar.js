import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import icon from "../Images/icon.png";

function Navbar() {
    return (
        <div className="form-navbar">
            <Link to="/"><img src={icon} width="60px" height="60px" alt="logo"></img></Link>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/choose-theory">Теоретический материал</Link>
                </li>
                <li>
                    <Link to="/tasks">Задания</Link>
                </li>
                <li>
                    <Link to="/authorization">Личный кабинет</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
