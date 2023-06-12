import React from "react";
import Avatar from "../../Images/user.png";
import "./Account.css";
import AccTabs from "../Functional/AccTabs";

function Account() {
    return(
        <div className="form-account">
            <h1 className="form-greet">Добро пожаловать, {"Петр Петров"}!</h1>
            <img src={Avatar} className="form-avatar" alt="avatar"></img>
            <h2 className="student-list">Список учеников</h2>
            <AccTabs />
        </div>
    )
}

export default Account;
