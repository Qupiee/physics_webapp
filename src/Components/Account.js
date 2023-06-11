import React from "react";
import Avatar from "../Images/user.png";
import "./Account.css";

/*TODO: сделать верстку для личного кабинета. отобразить основные компоненты: "sidebar" - список учеников.
"форма" отображения ученика и его прогресса. (личный кабинет преподавателя в приоритете).
(личный кабинет учащегося в процессе).
*/

function Account() {
    return(
        <div className="form-account">
            <h1 className="form-greet">Добро пожаловать, {"пользователь"}!</h1>
            <img src={Avatar} className="form-avatar" alt="avatar"></img>
        </div>
    )
}

export default Account;
