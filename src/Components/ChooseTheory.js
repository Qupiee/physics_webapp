import React from "react";
import { Link } from "react-router-dom";
import "./ChooseTheory.css";
import Mech from "../Images/mech1.png";
import Electric from "../Images/electric1.png";
import Light from "../Images/light1.png";
import Waves from "../Images/waves1.png";

function ChooseTheory() {
    return(
        <div className="form-choose-theory">
            <h1 className="label-choose-theory">Выбор темы</h1>
            <div className="exact-theory">
                <div>
                    <img src={ Mech } alt="theory-mech" className="picture-choose-theory"></img>
                    <Link to="/" className="label-theory">Механические явления</Link>
                </div>
                <div>
                    <img src={ Electric } alt="theory-electric" className="picture-choose-theory"></img>
                    <Link to="/" className="label-theory">Электромагнитные явления</Link>
                </div>
                <div>
                    <img src={ Light } alt="theory-light" className="picture-choose-theory"></img>
                    <Link to="/" className="label-theory">Световые явления</Link>
                </div>
                <div>
                    <img src={ Waves } alt="theory-waves" className="picture-choose-theory"></img>
                    <Link to="/" className="label-theory">Колебания и волны</Link>
                </div>
            </div>
        </div>
    )
}

export default ChooseTheory;
