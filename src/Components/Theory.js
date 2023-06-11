import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Theory.css";

/*TODO: переделать в отдельный компонент, как "navbar". сделать наподобие "sidebar".
должен "отображаться" всегда при переходе на раздел темы, где будет "список" материала.
при переходе к "материалу" ведет на новую страницу без "sidebar".
*/
export class Theory extends Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(            
            <div className="form-theory">                
                <h1 className="label-from-theory">Теоретический материал</h1>
                <h1>Механическое движение</h1>
                <ul>
                    <li>
                        <Link to="/">Кинематика</Link>
                    </li>
                    <li>
                        <Link to="/">Законы динамики</Link>
                    </li>
                    <li>
                        <Link to="/">Законы сохранения</Link>
                    </li>
                </ul>
                <h1>Колебания и волны</h1>
                <ul>
                    <li>
                        <Link to="/">Механические колебания</Link>
                    </li>
                    <li>
                        <Link to="/">Электромагнитные колебания</Link>
                    </li>
                    <li>
                        <Link to="/">Механические волны</Link>
                    </li>
                </ul>                
            </div>
        )
    }
}

export default Theory;
