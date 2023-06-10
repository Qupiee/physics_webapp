import React from "react";
import Avatar from "../Images/user.png";
import "./Account.css";

function Account() {
    return(
        <div className="form-account">
            <h1 className="form-greet">Добро пожаловать, {"пользователь"}!</h1>
            <img src={Avatar} className="form-avatar" alt="avatar"></img>
        </div>
    )
}

export default Account;
